import { type Logger } from 'pino'
import { type IRandomGenerator } from '../services/intefaces'

export class TempRandomGenerator implements IRandomGenerator {
  constructor (private readonly logger: Logger) {}

  private readonly TEMP_MIN = 10
  private readonly TEMP_MAX = 45

  generate (): number {
    const randNumber = Math.floor(Math.random() * (this.TEMP_MAX - this.TEMP_MIN)) + this.TEMP_MIN
    this.logger.info(`generated random temp data ${randNumber}.`)
    return randNumber
  }
}
