import { type IRandomGenerator, type IMessaging, type DeviceData } from './intefaces'

export class HumidityGeneratorService {
  private readonly HUMIDITY_TIMEOUT: number
  constructor (private readonly randomGenerator: IRandomGenerator, private readonly messaging: IMessaging) {
    const humidityTimeout = process.env.HUMIDITY_TIMEOUT

    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (humidityTimeout === undefined || humidityTimeout === null) {
      throw new Error('invalid humidity timeout')
    }
    this.HUMIDITY_TIMEOUT = +humidityTimeout
  }

  public do (): void {
    setInterval(() => {
      const random = this.randomGenerator.generate()
      const data: DeviceData = {
        device: 'random',
        type: 'HUMIDITY',
        value: String(random)
      }
      this.messaging.pub(data)
    }, this.HUMIDITY_TIMEOUT)
  }
}
