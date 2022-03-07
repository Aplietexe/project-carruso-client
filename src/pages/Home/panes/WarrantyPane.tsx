import warrantyPaneImage from "../../../assets/images/home/warranty-pane-image.webp"

import Pane from "./Pane"

const WarrantyPane = () => (
  <Pane imageSource={warrantyPaneImage}>
    <h4>Garantía de 90 días libre de kilometraje</h4>
    <p>
      Con la familia de Carruso no te estresa la compra de un auto seminuevo,
      cuidamos a cada uno de nuestros clientes con las siguientes garantías.
      <br />
      - Legal: cada unidad pasa por un chequeo de documentos y la verificación
      de su origen. <br />
      - Mecánico: Son 3 puntos generales para ofrecer una seguridad en su
      compra:
      <br />
      a) Motriz <br />
      b) Caja velocidades <br />
      c) Suspensión <br />- Garantía de precio y trato justo.
    </p>
  </Pane>
)

export default WarrantyPane
