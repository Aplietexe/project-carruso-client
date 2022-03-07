import { Tabs, Tab } from "react-bootstrap"
import styled from "styled-components"

import RequestPane from "../panes/RequestPane"
import SeminewPane from "../panes/SeminewPane"
import WarrantyPane from "../panes/WarrantyPane"

const StyledTabs = styled(Tabs)`
  padding-inline: 10%;

  .nav-item {
    flex-grow: 1;

    button {
      width: 100%;
      border: none;

      &.active {
        background-color: var(--bs-primary);
        color: white;
      }
    }
  }
`

const HomeInfoLarge = () => (
  <StyledTabs className="mb-3" defaultActiveKey="request">
    <Tab eventKey="request" title="Solicitalo desde tu celular">
      <RequestPane />
    </Tab>
    <Tab eventKey="seminew" title="Seminuevos Carruso">
      <SeminewPane />
    </Tab>
    <Tab eventKey="warranty" title="Garantía Carruso">
      <WarrantyPane />
    </Tab>
  </StyledTabs>
)

export default HomeInfoLarge
