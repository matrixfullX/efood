import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"

import GlobalStyle from "./styles"
import Home from "./pages/Home"
import Perfil from "./pages/Perfil"
import Cart from "./components/Cart"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'flavors/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Cart />
        <RouterProvider router={rotas} />
      </Provider>
    </>
  )
}

export default App
