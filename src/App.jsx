import About from "./components/About/About"
import Home from "./components/Home/Home"
import Meals from "./components/Meals/Meals"
import Footer from "./layout/Footer"
import Layout from "./layout/Layout"

function App() {

  return (
    <>
    <Layout></Layout>
     <Home></Home>
     <Meals/>
     <About></About>
     <Footer/>
    </>
  )
}

export default App
