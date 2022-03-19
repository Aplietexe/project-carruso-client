import { Button } from "react-bootstrap"

import StyledLink from "../../components/StyledLink"

const RequestButton = () => (
  <StyledLink to="/credit-request">
    <Button className="w-100 d-block mt-4" size="lg">
      Solicita tu crédito
    </Button>
  </StyledLink>
)

export default RequestButton
