import { type ChangeEventHandler, useState, useCallback } from "react"
import { Card, FormControl, InputGroup } from "react-bootstrap"
import styled from "styled-components"

import { formatPrice } from "../../utils/helpers"

import InfoGallery from "./InfoGallery"

type CreditSimulatorProps = Readonly<{
  price: number
}>

type ValidInstallments = 12 | 18 | 24 | 30 | 36 | 42 | 48 | 54 | 60

const interestRates = {
  12: 0.023_211_661_764_306_557,
  18: 0.019_243_474_867_443_267,
  24: 0.016_500_386_691_092_44,
  30: 0.015_097_704_935_669_31,
  36: 0.014_388_288_753_468_093,
  42: 0.013_673_372_765_633_74,
  48: 0.012_952_867_059_639_717,
  54: 0.012_952_867_059_639_717,
  60: 0.012_952_867_059_639_717,
}

const getInstallmentAmount = (
  amount: number,
  installments: ValidInstallments,
): number => amount * (1 / installments + interestRates[installments])

const StyledCard = styled(Card)`
  box-shadow: 0 0 12px 0 #6c757d;
  overflow: hidden;
  border: none;
`

const CreditSimulator = ({ price }: CreditSimulatorProps) => {
  const [downPayment, setDownPayment] = useState(0.2)
  const [isDownPaymentValid, setIsDownPaymentValid] = useState(true)

  const amount = price * (1 - downPayment)

  const handleDownPaymentChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      const { value } = event.currentTarget

      let newValue

      if (value === "") {
        newValue = 0
      } else {
        const parsed = Math.floor(Number.parseInt(value, 10))

        if (parsed !== 0 && !parsed) return

        newValue = parsed > 100 ? 100 : parsed
      }

      setDownPayment(newValue / 100)
      setIsDownPaymentValid(newValue >= 20)
    }, [])

  const installmentOptions: ValidInstallments[] = [
    12, 18, 24, 30, 36, 42, 48, 54, 60,
  ]

  const items = installmentOptions.map((installments) => ({
    body: isDownPaymentValid
      ? formatPrice(getInstallmentAmount(amount, installments))
      : "-",

    title: `${installments} Meses`,
  }))

  return (
    <StyledCard className="my-4">
      <Card.Header as="h3" className="fs-5 text-center bg-primary text-white">
        SIMULA TU CRÉDITO
      </Card.Header>
      <Card.Body className="bg-light">
        <h4>
          <label htmlFor="down-payment">% de Enganche</label>
        </h4>
        <InputGroup hasValidation>
          <InputGroup.Text className="fs-5">%</InputGroup.Text>
          <FormControl
            className="fs-5"
            isInvalid={!isDownPaymentValid}
            onChange={handleDownPaymentChange}
            value={downPayment === 0 ? "" : downPayment * 100}
          />
          <FormControl.Feedback type="invalid">
            El enganche debe ser mayor al 20%
          </FormControl.Feedback>
          <FormControl.Feedback type="valid">Test</FormControl.Feedback>
        </InputGroup>
        <p className="my-2">
          Enganche:{" "}
          {isDownPaymentValid ? formatPrice(price * downPayment) : "-"}
        </p>
        <p className="my-2">
          Comisión P/A: {isDownPaymentValid ? formatPrice(amount * 0.029) : "-"}
        </p>
        <h4 className=" mt-4 mb-3">¿A cuántos plazos quieres pagar?</h4>
        <InfoGallery items={items} />
      </Card.Body>
    </StyledCard>
  )
}

export default CreditSimulator
