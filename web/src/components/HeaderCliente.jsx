import "./header/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { TiThMenu } from "react-icons/ti";
import logoPreta from "../assets/img/logo1.png";
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";
import { MdNotifications } from "react-icons/md";
import Logout from "./Logout";
import { FaUserCircle } from "react-icons/fa";

const HeaderCliente = () => {



  return (
    <>
      <Navbar expand="lg" bg="light" className=" px-lg-5  navbar">
        <Container fluid className="px-md-5 py-xl-2 py-sm-3 py-3">
          <Link to="/">
            <Navbar.Brand
              className="text-white ms-xl-5 mx-xl-5 fw-bolder"
            >
              <img src={logoPreta} className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" className="navtoggle m-0">
            <TiThMenu className="text-dark thmenu" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Link to="/" id="link" className="me-5 py-1 fw-bold text-dark">
                Página Inicial
              </Link>
              <Link
                to="/barbearias"
                id="link"
                className="me-xl-5 py-1 fw-bold text-dark"
              >
                Procurar barbearias
              </Link>
            </Nav>

            <br />
            <Dropdown className="me-2">
              <Dropdown.Toggle className="bg-light text-dark fw-bold m-0 p-0" id="dropdown-basic">
                <MdNotifications className="text-secondary"/>
              </Dropdown.Toggle>

              <Dropdown.Menu className="shadow border-0 mt-2 p-4">
                <p className="text-secondary fs-6">Não há notificações para você</p>
              </Dropdown.Menu>
            </Dropdown>
              <Dropdown.Toggle className="bg-light text-dark fw-bold m-0 p-0" id="dropdown-basic">
              
              </Dropdown.Toggle>
            <Link to="/painel-cliente" className="fw-bold me-1 text-dark">
              <FaUserCircle className="fs-2"/>
            </Link>
            <Logout />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderCliente;
