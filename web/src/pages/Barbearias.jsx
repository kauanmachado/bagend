import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"
import GoogleMaps from "../components/GoogleMaps"
import CheckRole from "../components/CheckRole";
import HeaderCliente from "../components/HeaderCliente";
import HeaderBarbearia from "../components/HeaderBarbearia";

const Barbearias = () => {

  const role = CheckRole()

  return (
    <>
      {role === "cliente" ? <HeaderCliente /> : role === "barbearia" ? <HeaderBarbearia /> : <Header />}

      <GoogleMaps />
      <Footer />
    </>

  )
}

export default Barbearias;
