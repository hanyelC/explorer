import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import { Routes } from "./routes"

import { theme } from "./styles/theme"



import { New } from "./pages/New"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)


