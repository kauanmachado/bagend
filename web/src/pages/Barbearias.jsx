import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import GoogleMaps from "../components/GoogleMaps"
import HeaderClienteLogado from "../components/HeaderClienteLogado";
import Cookies from "js-cookie";


const Autenticado = Cookies.get('token')

const Barbearias = () => {

  return  (
    <>
    {Autenticado ? <HeaderClienteLogado /> : <Header />}
      <GoogleMaps />
    <Footer />
    </>
    
  )
}

export default Barbearias;
