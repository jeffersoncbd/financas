import { CreditCardsRepository } from '../../_repositories/CreditCard'
import { CreditCardValidator } from '../../_validators/CreditCard'
import { CreditCard } from '../../__entities/CreditCard'
import { CreateCreditCard } from './protocols'

export class CreateCreditCardUseCase implements CreateCreditCard {
  constructor(
    private validator: CreditCardValidator,
    private repository: CreditCardsRepository
  ) {}

  async create(data: CreditCard): Promise<void> {
    await this.validator.validate(data)
    await this.repository.create(data)
    return undefined
  }
}
