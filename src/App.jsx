import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies"
import Card from "./components/card/Card"
import Earnings from "./components/earnings/Earnings"
import Status from "./components/status/Status"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"

function App() {
 

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <Companies></Companies>
      <About></About>
      <Card></Card>
      <Earnings></Earnings>
      <Status></Status>
      <Contact></Contact>
    </>
  )
}

export default App
