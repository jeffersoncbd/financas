import { CreditCard } from '../../__entities/CreditCard';
import { CreateCreditCard } from './protocols'

export class CreateCreditCardUseCase implements CreateCreditCard {


  async create(data: CreditCard): Promise<void> {
    return undefined
  }
}
