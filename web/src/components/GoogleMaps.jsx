import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, InfoWindow, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Geocode from "react-geocode";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { FaMapMarkerAlt} from "react-icons/fa";
import Loading from "./Loading";
import { Link } from "react-router-dom";

Geocode.setLanguage("pt");
Geocode.setRegion("br");
Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const GoogleMaps = () => {
  const containerStyle = {
    width: "100%",
    height: "600px",
  };



  const [center, setCenter] = useState({ lat: -30.030775, lng: -51.227831 })

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
  const apiUrl = "http://localhost:8001"
  const [locations, setLocations] = useState([])
  const [activeMarker, setActiveMarker] = useState()

  const handleActiveMarker = (location) => {
    if (location === activeMarker) {
      return
    }
    setActiveMarker(location)
  }

  // --GEOCODE-- //
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/barbearias`,)
        console.log(res.data)

        const convertedData = res.data.map((barbearia) => {
          return {
          ...barbearia,
          imagemUrl: `${apiUrl}/${barbearia.foto_perfil}`,
          lat: parseFloat(barbearia.lat),
          lng: parseFloat(barbearia.lng)
        }
        })
        console.log(res.data)
        setLocations(convertedData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])



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
            <div class="form-floating mb-4">
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
              <label for="floatingInput" className="text-secondary">
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
                  icon={
                    <FaMapMarkerAlt/>
                  }
                  >
                    {
                      activeMarker === location.id ? <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                        <div className="p-4 d-flex-column justify-content-center">
                          <img src={location.imagemUrl} className="rounded infoWindowImage mb-3" />
                          <h6 className="fw-bold">{location.nome_barbearia}</h6>
                          <p className="text-secondary">{location.endereco}</p>
                          <div className="d-flex">
                            <Link to={`perfil-barbearia/${location.id}`}>
                            <Button className="bg-white px-4 py-2 agendar shadow rounded-pill me-2 float-end text-primary">
                              Ver perfil
                            </Button>
                            </Link>
                            <Button className="primary px-4 py-2 agendar shadow rounded-pill  float-end">
                              Agendar
                            </Button>
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
    <Loading/>
  );
};


export default GoogleMaps;
