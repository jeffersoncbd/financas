import { CreateCreditCardUseCase } from '.'
import { CreditCardsRepository } from '../../_repositories/CreditCard'
import { CreditCardValidator } from '../../_validators/CreditCard'
import { CreditCard } from '../../__entities/CreditCard'

function makeCreditCardValidatorStub() {
  class CreditCardValidatorStub implements CreditCardValidator {
    async validate(): Promise<void> {
      return undefined
    }
  }
  return new CreditCardValidatorStub()
}

function makeCreditCardsRepositoryStub() {
  class CreditCardsRepositoryStub implements CreditCardsRepository {
    async create(): Promise<void> {
      return undefined
    }
  }
  return new CreditCardsRepositoryStub()
}

function makeFakeCreditCard(): CreditCard {
  return new CreditCard({
    name: 'any_name',
    closingDay: 6,
    dueDay: 16
  })
}

function makeSut() {
  const validatorStub = makeCreditCardValidatorStub()
  const repositoryStub = makeCreditCardsRepositoryStub()
  const sut = new CreateCreditCardUseCase(validatorStub, repositoryStub)
  return { sut, validatorStub, repositoryStub }
}

describe('CreateCreditCard', () => {
  test('Deve validar os dados recebidos', async () => {
    const { sut, validatorStub } = makeSut()
    const validateSpy = jest.spyOn(validatorStub, 'validate')

    const fakeCreditCard = makeFakeCreditCard()
    await sut.create(fakeCreditCard)

    expect(validateSpy).toHaveBeenCalledWith(fakeCreditCard)
  })

  test('Deve salvar os dados no repositorio', async () => {
    const { sut, repositoryStub } = makeSut()
    const createSpy = jest.spyOn(repositoryStub, 'create')

    const fakeCreditCard = makeFakeCreditCard()
    await sut.create(fakeCreditCard)

    expect(createSpy).toHaveBeenCalledWith(fakeCreditCard)
  })
})
