import { type Logger } from 'pino'
import { type IRandomGenerator } from '../services/intefaces'

export class HumidityRandomGenerator implements IRandomGenerator {
  constructor (private readonly logger: Logger) {}

  private readonly HUMIDITY_MIN = 30
  private readonly HUMIDITY_MAX = 80

  generate (): number {
    const randNumber = Math.floor(Math.random() * (this.HUMIDITY_MAX - this.HUMIDITY_MIN)) + this.HUMIDITY_MIN
    this.logger.info(`generated random humidity data ${randNumber}.`)
    return randNumber / 100
  }
}
