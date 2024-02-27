import { LoggerInitializer } from './infra/logger'
import { Messaging } from './infra/messaging'
import { TempRandomGenerator } from './infra/temp_random_generator'
import { HumidityRandomGenerator } from './infra/humidity_random_generator'
import { TempGeneratorService } from './services/temp'
import { HumidityGeneratorService } from './services/humidity'
import { type IMessaging, type IRandomGenerator } from './services/intefaces'
import dotenv from 'dotenv'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup () {
  dotenv.config()
  const logger = new LoggerInitializer().init()
  logger.info('Starting App...')
  const messaging = new Messaging(logger)
  messaging.connect()
  const tempRandom = new TempRandomGenerator(logger)
  const humidityRandom = new HumidityRandomGenerator(logger)
  return { logger, messaging, tempRandom, humidityRandom }
}

function start (messaging: IMessaging, tempRandom: IRandomGenerator, humidityRandom: IRandomGenerator): void {
  const tempGeneratorService = new TempGeneratorService(tempRandom, messaging)
  const humidityGeneratorService = new HumidityGeneratorService(humidityRandom, messaging)
  tempGeneratorService.do()
  humidityGeneratorService.do()
}

function main (): void {
  const { logger, messaging, tempRandom, humidityRandom } = setup()
  logger.info('App running...')
  start(messaging, tempRandom, humidityRandom)
}

main()
