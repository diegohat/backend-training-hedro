export interface DeviceData {
  device: string
  value: string
  type: 'TEMP' | 'HUMIDITY'
}

interface IRandomGenerator {
  generate: () => number
}
interface IMessaging {
  pub: (data: DeviceData) => void
}

export type { IRandomGenerator, IMessaging }
