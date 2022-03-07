import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const WhatsappWrapper = styled.a`
  display: block;
  text-decoration: none;
  background-color: #2bb741;
  color: white;

  &:hover {
    color: white;
  }
`

const ContactInfo = () => (
  <>
    <Row>
      <Col>
        <WhatsappWrapper className="p-3" href="tel:+528122173132">
          Whatsapp: +52 8122173132
        </WhatsappWrapper>
      </Col>
    </Row>
    <Row>
      <Col>
        <a
          className="p-3 bg-light d-block text-black text-decoration-none"
          href="https://www.google.com/maps/place/Av.+Paseo+de+la+Reforma+26-piso+9,+Ju%C3%A1rez,+Cuauht%C3%A9moc,+06600+Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.434208,-99.1535551,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8d360ff2985:0x9920296e2eb6c6d4!8m2!3d19.434208!4d-99.1513664"
        >
          Dirección: Avenida Reforma 26 piso 9, Col Juárez, Alcaldía Cuauhtémoc,
          C.P. 06600, CDMX
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <iframe
          allow="fullscreen"
          className="w-100"
          height="450"
          loading="lazy"
          sandbox="allow-scripts"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4951327430613!2d-99.15355508466472!3d19.43420798688343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d360ff2985%3A0x9920296e2eb6c6d4!2sAv.%20Paseo%20de%20la%20Reforma%2026-piso%209%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses!2sar!4v1646634067798!5m2!1ses!2sar"
          title="Mapa"
          width="600"
        />
      </Col>
    </Row>
  </>
)

export default ContactInfo
