import { CreditCard } from '../__entities/CreditCard'

export interface CreditCardValidator {
  validate(data: CreditCard): Promise<void>
}
