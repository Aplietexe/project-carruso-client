import requestPaneImage from "../../../assets/images/request-pane-image.webp"

import Pane from "./Pane"

const RequestPane = () => (
  <Pane imageSource={requestPaneImage}>
    <h4>Rápido y Sencillo desde tu celular</h4>
    <p>
      Nuestro sistema es muy sencillo. <br />
      1. Llena tus datos que te solicitamos <br />
      2. Te mandamos respuesta de tu solicitud. <br />
      3. Ya aprobado te ofertamos la mejor unidad que solicitas. <br />
      RECIBIRÁS UN CORREO O UN WHATSAPP AL SER PREAUTORIZADO
    </p>
  </Pane>
)

export default RequestPane
