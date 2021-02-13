import { CreditCard } from '../../__entities/CreditCard'

export interface CreateCreditCard {
  create(data: CreditCard): Promise<void>
}
