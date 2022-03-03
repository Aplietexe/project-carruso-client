import { createGlobalStyle } from "styled-components"

import Muli from "./assets/fonts/Muli.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Muli";
    src: local("Muli"), url(${Muli}) format("truetype");
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Muli", Helvetica, Sans-Serif;
    box-sizing: border-box;
    --bs-primary-rgb: 5, 117, 245;
    --bs-primary: #0575f5;
  }
`

export default GlobalStyle
