use std::env;

use futures_util::StreamExt;
use lapin::{
    message::Delivery,
    options::{BasicAckOptions, BasicConsumeOptions},
    types::FieldTable,
    Channel, Connection, ConnectionProperties, Consumer,
};
use log::{error, info};

use crate::services::{messages::RMQMessage, service::BridgeService};

struct RabbitMQConfig {
    host: String,
    port: String,
    user: String,
    password: String,
    queue: String,
}

pub struct RabbitMQMessenger {
    service: Box<dyn BridgeService>
}

impl RabbitMQMessenger {
    pub fn new(service: Box<dyn BridgeService>) -> Self {
        Self { service }
    }
}

impl RabbitMQMessenger {
    fn envs(&self) -> Result<RabbitMQConfig, ()> {
        let Ok(host) = env::var("RABBITMQ_HOST") else {
            error!("Failed to read RABBIT_HOST env.");
            return Err(())
        };

        let Ok(port) = env::var("RABBITMQ_PORT") else {
            error!("Failed to read RABBITMQ_PORT env.");
            return Err(())
        };

        let Ok(user) = env::var("RABBITMQ_USER") else {
            error!("Failed to read RABBITMQ_USER env.");
            return Err(())
        };

        let Ok(password) = env::var("RABBITMQ_PASSWORD") else {
            error!("Failed to read RABBITMQ_PASSWORD env.");
            return Err(())
        };

        let Ok(queue) = env::var("RABBITMQ_QUEUE") else {
            error!("Failed to read RABBITMQ_QUEUE env.");
            return Err(())
        };

        Ok(RabbitMQConfig {
            host,
            port,
            user,
            password,
            queue,
        })
    }

    pub async fn connect(&mut self) -> Result<(), ()> {
        let envs = self.envs()?;

        info!("Starting RabbitMQ conection!!");

        let addr = format!(
            "amqp://{}:{}@{}:{}",
            envs.user, envs.password, envs.host, envs.port
        );

        let Ok(conn) = Connection::connect(&addr, ConnectionProperties::default()).await else {
            error!("RabbitMQ connection failure.");
            return Err(())
        };

        info!("RabbitMQ conected!");
        info!("Starting RabbitMQ chanel!!");

        let Ok(channel) = conn.create_channel().await else {
            error!("Failed to create RabbitMQ channel.");
            return Err(())
        };

        info!("RabbitMQ channel created!");

        let mut consumer = self.consume(channel).await?;

        while let Some(event) = consumer.next().await {
            let Ok(delivery) = event else {
                error!("Failed to deliver message.");
                return Err(())
            };
            self.handler(delivery).await;
        }

        Ok(())
    }

    async fn consume(&self, channel: Channel) -> Result<Consumer, ()> {
        let envs = self.envs()?;
        let Ok(consumer) = channel
            .basic_consume(
                &envs.queue,
                "consumer-test",
                BasicConsumeOptions::default(),
                FieldTable::default(),
            )
            .await
        else {
            error!("Failed to create consumer.");
            return Err(())
        };

        info!("Consumer created!");
        Ok(consumer)
    }

    async fn handler(&self, delivery: Delivery) {
        let Ok(_ack) = delivery.ack(BasicAckOptions::default()).await else {
            error!("Failed to ack message.");
            return
        };

        let Ok(deserialized_msg): Result <RMQMessage, _> = serde_json::from_slice(&delivery.data) else {
            error!("Failed to deserialize.");
            return
        };
        info!("Message: {:?}", deserialized_msg);

        match self.service.exec(&deserialized_msg).await {
            
            Ok(_) => {
                info!("Message processed successfully!")
            }

            Err(_) => error!("Failed to process message.")
        }
    }
}
