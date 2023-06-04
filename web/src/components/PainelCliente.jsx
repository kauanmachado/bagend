import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../styles/dashboard.css";
import {Container,Row,Col, Navbar, ListGroup, Button, ListGroupItem  } from "react-bootstrap"
import { FaBars } from "react-icons/fa";
import HeaderClienteLogado from "./HeaderClienteLogado";
import { AiOutlineSchedule } from "react-icons/ai"
import { VscAccount } from "react-icons/vsc";
import { BsBookmarks } from "react-icons/bs"
import { RiEditBoxFill, RiMenu2Fill } from "react-icons/ri";
import logoPreta  from "../assets/img/logo1.png"
import { Link } from "react-router-dom";
import { MdCoPresent } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";


const PainelCliente = () => {

  return (
    <>  
        <Navbar expand="lg">
        <Navbar.Toggle
                aria-controls="navbarScroll"
                className="w-100 navtoggle"
              >
                <RiMenu2Fill className=" float-start thmenu text-dark" />
              </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
          <a className="text-decoration-none text-dark d-flex align-itemcenter ms-3 mt-2">
            <span className="ms-1 fw-bold">Kauan Machado</span>
          </a>
          <hr className="text-secondary"/>
          <ul className="nav nav-pills flex-column">
          <li className="nav-item  fs-4 my-1">
              <Link to="../painel-cliente" id="link" className="nav-link text-dark fs-5">
                <MdCoPresent />
                <span className="ms-2">Geral</span>
                </Link>
            </li>
            
            <li className="nav-item  fs-4 my-1">
              <Link to="../painel-cliente/agendas" id="link" className="nav-link text-dark fs-5">
                <AiOutlineSchedule />
                <span className="ms-2">Agendas</span>
                </Link>
            </li>
            <li className="nav-item  fs-4 my-1">
            <Link to="../painel-cliente/salvos" id="link" className="nav-link text-dark fs-5">
                <BsBookmarks />
                <span className="ms-2">Salvos</span>
                </Link>
            </li>
            <li className="nav-item fs-4 my-1">
            <Link to="../painel-cliente/alterar-dados" id="link" className="nav-link text-dark fs-5">
                <RiEditBoxFill />
                <span className="ms-2">Editar dados</span>
                </Link>
            </li>
          </ul>
          <hr className="text-secondary"/>
          <Link to="/" className="p-3 fw-bold text-danger">
              Sair
            </Link>
          </div>
        </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default PainelCliente;
