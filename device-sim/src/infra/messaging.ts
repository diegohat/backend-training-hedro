import { type Logger } from 'pino'
import { type DeviceData, type IMessaging } from '../services/intefaces'
import { type MqttClient, connect } from 'mqtt'
export class Messaging implements IMessaging {
  private conn: MqttClient
  private readonly MQTT_HOST: string
  private readonly MQTT_PROTOCOL: string
  private readonly MQTT_USER: string
  private readonly MQTT_PASSWORD: string
  constructor (private readonly logger: Logger) {
    const mqttHost = process.env.MQTT_HOST
    const mqttProtocol = process.env.MQTT_PROTOCOL
    const mqttUser = process.env.MQTT_USER
    const mqttPassword = process.env.MQTT_PASSWORD
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (mqttHost === undefined || mqttHost === null || mqttProtocol === undefined || mqttProtocol === null || mqttUser === undefined || mqttUser === null || mqttPassword === undefined || mqttPassword === null) {
      throw new Error('invalid mqtt credentials')
    }

    this.MQTT_HOST = mqttHost
    this.MQTT_PROTOCOL = mqttProtocol
    this.MQTT_USER = mqttUser
    this.MQTT_PASSWORD = mqttPassword
  }

  pub (data: DeviceData): void {
    this.logger.info(`publishing: ${JSON.stringify(data)}`)
    this.conn.publish(`HedroTraining/${data.device}/${data.type}`, JSON.stringify(data), { qos: 2, retain: false })
    this.logger.info('published')
  }

  connect (): void {
    try {
      this.conn = connect(`${this.MQTT_PROTOCOL}://${this.MQTT_HOST}`, {
        username: this.MQTT_USER,
        password: this.MQTT_PASSWORD,
        clientId: "device-simulator"
      })
    } catch (err) {
      this.logger.error({ msg: 'something went wrong', error: err })
      throw err
    }
  }
}
