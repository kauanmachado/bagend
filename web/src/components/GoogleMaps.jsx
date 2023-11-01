import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, InfoWindow, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Geocode from "react-geocode";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineInstagram, AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { FaMapMarkerAlt } from "react-icons/fa";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import CheckRole from "./CheckRole";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import ScrollToTop from "./ScrollToTop";
import { Toast } from "react-bootstrap";
import { RiCheckboxCircleFill } from "react-icons/ri";

Geocode.setLanguage("pt");
Geocode.setRegion("br");
Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const GoogleMaps = () => {

  const apiUrl = "http://localhost:8001"
  const role = CheckRole()
  const token = Cookies.get('token')
  let id
  if(token) {
    const decodedToken = jwt_decode(token)
    id = decodedToken.id
  }
  

  const containerStyle = {
    width: "100%",
    height: "600px",
  };


  let lat = 0
  let lng = 0

  const [center, setCenter] = useState({ lat: -30.030775, lng: -51.227831 })

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/barbearias`,)
        const convertedData = res.data.map((barbearia) => {
          return {
            ...barbearia,
            imagemUrl: `${apiUrl}/${barbearia.foto_perfil}`,
            lat: parseFloat(barbearia.lat),
            lng: parseFloat(barbearia.lng)
          }
        })
        setLocations(convertedData)
      } catch (error) {
        console.error(error)
      }
    }

      async function getUserCoordinates(){
        try {
          if(role == "cliente"){
            const res = await axios.get(`${apiUrl}/painel-cliente/${id}`, {
              withCredentials: true
            })
            lat = parseFloat(res.data.lat)
            lng = parseFloat(res.data.lng)
            setCenter({lat: lat, lng: lng})
            console.log(lat)
            
          } else if (role == "barbearia"){
            const res = await axios.get(`${apiUrl}/painel-barbearia/${id}`, {
              withCredentials: true
            })
            lat = parseFloat(res.data.lat)
            lng = parseFloat(res.data.lng)
            setCenter({lat: lat, lng: lng})
          }
        } catch (error) {
          console.error(error)
        }
        
        
      }

    getUserCoordinates()
    fetchData()
  }, [])

  const [toastCheck, setToastCheck] = useState(false);

  const exibirToastCheck = () => {
    setToastCheck(true);

    setTimeout(() => {
      setToastCheck(false);
    }, 3000);
  };

  const handleSalvar = async (idBarbearia) => {
    try {
      const res = await axios.post(`${apiUrl}/salvar-barbearia/${id}`, {
        idBarbearia: idBarbearia
      })
      ScrollToTop()
      exibirToastCheck()
    } catch (error) {
      console.error(`Erro ao salvar barbearia ${error}`)
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // --GEOCODE-- //
  const [endereco, setEndereco] = useState(null);
  // Busca endereço e retorna os seus dados
  const buscarEndereco = (e) => {
    e.preventDefault();
    Geocode.fromAddress(endereco).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const enderecoFormatado = response.results[0].formatted_address;
        setCenter({ lat, lng })
        console.log(lat, lng);
        console.log(enderecoFormatado);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  
  const [locations, setLocations] = useState([])
  const [activeMarker, setActiveMarker] = useState()

  const handleActiveMarker = (location) => {
    if (location === activeMarker) {
      return
    }
    setActiveMarker(location)
  }

  // --GEOCODE-- //
  

  

  return isLoaded ? (
    <>
      <Container className="mt-5">
        <Row>
          <h2 className="fw-bold">
            Encontre as barbearias mais próximas da sua cidade
          </h2>
          <p className="text-secondary">
            Procure barbearias de forma fácil e rápida e faça seu agendamento
          </p>
          

          <Form onSubmit={buscarEndereco}>
            <div className="form-floating mb-4">
              <input
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Digite o endereço da barbearia"
                aria-label="Username"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                aria-describedby="basic-addon1"
                required
                autoComplete="email"
                className="form-control shadow"
              />
              <label htmlFor="floatingInput" className="text-secondary">
                <AiOutlineSearch className="fs-3 me-2" />
                Digite o endereço da barbearia
              </label>
            </div>
          </Form>
        </Row>
      </Container>
      <Container className="mt-4" fluid>
        <Row className="justify-content-center">
        
          <Col md={12}>
          <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute top-0 start-50 translate-middle-x toastEmail bg-success text-white mt-5"
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Barbearia salva com sucesso!
            </Toast.Body>
          </Toast>
            <GoogleMap
              id="map"
              className="mb-5"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                mapTypeControl: false,
                streetViewControl: false,
                styles: [
                  {
                    elementType: "labels",
                    featureType: "poi",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    elementType: "labels",
                    featureType: "transit",
                    stylers: [{ visibility: "off" }],
                  },

                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#646464" }],
                  },
                ],
              }}
            >
              
              {
                locations.map((location) => (
                  <MarkerF
                    key={location.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => handleActiveMarker(location.id)}
                    
                  >
                    {
                      activeMarker === location.id ? <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                        <div className="p-4 d-flex-column justify-content-center">
                          <img src={location.imagemUrl} className="rounded infoWindowImage mb-2" />
                          <h5 className="fw-bold mb-3">{location.nome_barbearia}</h5>
                          <p className="text-secondary">
                            <BsFillPinMapFill className="fs-4 me-2 text-dark" />{location.endereco}</p>
                          <p className="text-secondary">
                            <SlScreenSmartphone className="fs-4 me-2 text-dark" />{location.telefone}</p>
                          <p className="text-secondary">
                            <AiOutlineInstagram className="fs-4 me-2 text-dark" />{location.link_instagram}</p>
                          <div className="d-flex flex-column justify-content-center">


                            {role === "cliente" ?
                              <>
                                <Link to={`/agenda/${location.id}`}>
                                  <Button className="primary py-2 agendar shadow rounded-pill w-100 mb-2">
                                    Agendar
                                  </Button>
                                </Link>
                                <Button onClick={() => handleSalvar(location.id)}className="bg-white py-2 agendar shadow rounded-pill w-100 text-primary">
                                  Adicionar aos salvos
                                </Button>
                              </>
                              : role === "barbearia" ?
                                null
                                :

                                <Link to="/login-cliente">
                                  <Button className="primary py-2 agendar shadow rounded-pill w-100 mb-2">
                                    Agendar
                                  </Button>
                                  <Button className="bg-white py-2 agendar shadow rounded-pill w-100 text-primary">
                                    Adicionar aos salvos
                                  </Button>
                                </Link>}


                          </div>
                        </div>
                      </InfoWindowF> : null
                    }
                  </MarkerF>
                ))
              }
            </GoogleMap>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <Loading />
  );
};


export default GoogleMaps;
