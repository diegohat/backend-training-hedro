import { type IRandomGenerator, type IMessaging, type DeviceData } from './intefaces'

export class TempGeneratorService {
  private readonly TEMP_TIMEOUT: number
  constructor (private readonly randomGenerator: IRandomGenerator, private readonly messaging: IMessaging) {
    const tempTimeout = process.env.TEMP_TIMEOUT

    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (tempTimeout === undefined || tempTimeout === null) {
      throw new Error('invalid temperature timeout')
    }
    this.TEMP_TIMEOUT = +tempTimeout
  }

  public do (): void {
    setInterval(() => {
      const random = this.randomGenerator.generate()
      const data: DeviceData = {
        device: 'random',
        type: 'TEMP',
        value: String(random)
      }
      this.messaging.pub(data)
    }, this.TEMP_TIMEOUT)
  }
}
