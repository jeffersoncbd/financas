import { CreditCard } from '../__entities/CreditCard'

export interface CreditCardsRepository {
  create(data: CreditCard): Promise<{ id: string }>
}
