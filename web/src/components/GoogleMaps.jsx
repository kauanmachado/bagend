import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";

Geocode.setLanguage("pt");
Geocode.setRegion("br");
Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const GoogleMaps = () => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: -30.030775,
    lng: -51.227831,
  };

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
        console.log(lat, lng);
        console.log(enderecoFormatado);
      },
      (error) => {
        console.error(error);
      }
    );
  };
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
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <></>
  );
};

export default GoogleMaps;
