import { Container, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import Banner from "../../components/Banner"
import warrantyBanner from "../../assets/images/warranty/warranty-banner.webp"
import legalWarrantyImage from "../../assets/images/warranty/legal-warranty-image.webp"
import mechanicalWarrantyImage from "../../assets/images/warranty/mechanical-warranty-image.webp"
import fairPriceImage from "../../assets/images/warranty/fair-price-image.webp"
import PageTitle from "../../components/PageTitle"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const StyledImage = styled(ImageComponent)`
  height: 150px;
  width: auto;
  max-width: 100%;
`

const Warranty = () => (
  <>
    <Banner image={warrantyBanner} />
    <Container className="mb-5">
      <PageTitle title="En carruso nos interesan tres puntos que siempre van a proteger tu inversión" />
      <Row>
        <Wrapper>
          <div className="text-center">
            <StyledImage src={legalWarrantyImage} />
          </div>
          <div>
            <p>
              Las unidades que se ofrecen en nuestra plataforma cuentan con un
              extensa revisión mecánica, con ello ofrecemos una garantía mínimo
              de 3 meses o 10 kms lo que antes suceda, la garantía se base en
              tres puntos básicos:
            </p>
            <ol>
              <li>
                Motriz: todo aquello relacionado al buen funcionamiento de la
                máquina
              </li>
              <li>
                Suspensión: se verifica el funcionamiento correcto de cada parte
                de suspensión y se garantiza el buen funcionamiento.
              </li>
              <li>
                Caja Velocidades: Puede ser Mecánica o Automática en ambos
                casos.
              </li>
            </ol>
          </div>
          <div className="text-center">
            <StyledImage src={mechanicalWarrantyImage} />
          </div>
          <p>
            La base de una compra automotriz es la legal y para ello carruso
            tiene el compromiso de que cada unidad tenga un historial impecable
            en todos sus documentos que son: Factura de origen e intermedias,
            pagos de impuestos tenencias y pagos locales como son verificación
            vehicular y/u otros
          </p>
          <div className="text-center">
            <StyledImage src={fairPriceImage} />
          </div>
          <p>
            La compra de un automóvil se basa en la parte financiera, cada
            unidad tendrá un precio justo y esto también implica en la forma de
            compra (Crédito o arrendamiento) aunque en carruso no podemos
            garantizar los incrementos financieros si se garantiza el precio, un
            precio justo en el mercado.
          </p>
        </Wrapper>
      </Row>
    </Container>
  </>
)

export default Warranty
