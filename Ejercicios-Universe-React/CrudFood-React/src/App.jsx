import { BrowserRouter, Routes, Route } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/pages/Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route></Route>
      </Routes>
    </main>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App

///////////

/*  " <BrowserRouter> " Habilita el sistema de rutas de React Router

Sin BrowserRouter, los componentes <Route>, <Link>, <Navigate>, etc., no funcionarían.
Es el "motor" que permite detectar cambios en la URL. */

///////////