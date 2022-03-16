import type { RefObject } from "react"
import { useCallback, useState } from "react"
import validator from "validator"

const { isEmail, isMobilePhone } = validator

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const useValidation = (ref: Readonly<RefObject<HTMLFormElement>>) => {
  const [isFormValid, setIsFormValid] = useState(false)

  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isReferencePhoneValid, setIsReferencePhoneValid] = useState(false)
  const [isReference2PhoneValid, setIsReference2PhoneValid] = useState(false)
  const [isIncomeValid, setIsIncomeValid] = useState(false)

  const validateForm = useCallback(() => {
    if (!ref.current) return

    const formData = new FormData(ref.current)

    let isFormValidNew = true

    if (isMobilePhone(String(formData.get("phone")))) setIsPhoneValid(true)
    else {
      setIsPhoneValid(false)
      isFormValidNew = false
    }

    if (isEmail(String(formData.get("email")))) setIsEmailValid(true)
    else {
      setIsEmailValid(false)
      isFormValidNew = false
    }

    if (Number(formData.get("monthlyIncome"))) setIsIncomeValid(true)
    else {
      setIsIncomeValid(false)
      isFormValidNew = false
    }

    if (isMobilePhone(String(formData.get("referencePhone"))))
      setIsReferencePhoneValid(true)
    else {
      setIsReferencePhoneValid(false)
      isFormValidNew = false
    }

    if (isMobilePhone(String(formData.get("reference2Phone"))))
      setIsReference2PhoneValid(true)
    else {
      setIsReference2PhoneValid(false)
      isFormValidNew = false
    }

    const fields = Array.from(formData.entries())

    if (fields.some(([_, value]) => !String(value).trim()))
      isFormValidNew = false

    setIsFormValid(isFormValidNew)
  }, [ref])

  return {
    isEmailValid,
    isFormValid,
    isIncomeValid,
    isPhoneValid,
    isReference2PhoneValid,
    isReferencePhoneValid,
    validateForm,
  }
}

export default useValidation
