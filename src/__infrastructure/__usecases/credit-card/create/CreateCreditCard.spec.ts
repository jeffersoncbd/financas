import { CreateCreditCardUseCase } from '.'
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

function makeFakeCreditCard(): CreditCard {
  return {
    name: 'any_name',
    closingDay: 6,
    dueDay: 16
  }
}

function makeSut() {
  const validatorStub = makeCreditCardValidatorStub()
  const sut = new CreateCreditCardUseCase(validatorStub)
  return { sut, validatorStub }
}

describe('CreateCreditCard', () => {
  test('Deve chamar validador corretamente', async () => {
    const { sut, validatorStub } = makeSut()
    const validateSpy = jest.spyOn(validatorStub, 'validate')

    const fakeCreditCard = makeFakeCreditCard()
    await sut.create(fakeCreditCard)

    expect(validateSpy).toHaveBeenCalledWith(fakeCreditCard)
  })
})
