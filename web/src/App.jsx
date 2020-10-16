import React from "react"
import { renderRoutes } from "react-router-config"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { GlobalStyle } from "./style"
import { IconStyle } from "@/assets/iconfont/iconfont"
import routes from "./routes"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

export default App
