import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { ProductsContextProvider } from './context/ProductContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
