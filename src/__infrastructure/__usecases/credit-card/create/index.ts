import { CreditCardValidator } from '../../_validators/CreditCard'
import { CreditCard } from '../../__entities/CreditCard'
import { CreateCreditCard } from './protocols'

export class CreateCreditCardUseCase implements CreateCreditCard {
  constructor(private validator: CreditCardValidator) {}

  async create(data: CreditCard): Promise<void> {
    await this.validator.validate(data)
    return undefined
  }
}
