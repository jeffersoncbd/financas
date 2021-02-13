import * as uuid from 'uuid'

abstract class CreditCardFields {
  name: string
  closingDay: number
  dueDay: number
}

interface CreditCardData extends CreditCardFields {
  id?: string
}

export class CreditCard extends CreditCardFields {
  readonly id: string

  constructor(data: CreditCardData) {
    super()
    this.id = data.id || uuid.v4()

    this.name = data.name
    this.closingDay = data.closingDay
    this.dueDay = data.dueDay
  }
}
