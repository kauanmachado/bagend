import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import GoogleMaps from "../components/GoogleMaps"

import Cookies from "js-cookie";


const Autenticado = Cookies.get('token')

const Barbearias = () => {

  return  (
    <>
    <Header/>
      <GoogleMaps />
    <Footer />
    </>
    
  )
}

export default Barbearias;
