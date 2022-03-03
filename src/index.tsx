import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"
import GlobalStyle from "./globalStyle"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.querySelector("#root"),
)
