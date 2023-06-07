import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../styles/dashboard.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import HeaderClienteLogado from "./HeaderClienteLogado";
import { AiOutlineSchedule } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BsBookmarks, BsScissors } from "react-icons/bs";
import { RiEditBoxFill, RiMenu2Fill } from "react-icons/ri";
import logoPreta from "../assets/img/logo1.png";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdCoPresent, MdOutlineForum } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { ImUserTie } from "react-icons/im";
import exBarber from "../assets/img/exBarber.png";

const PainelBarbearia = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Navbar.Toggle aria-controls="navbarScroll" className="w-100 navtoggle">
          <RiMenu2Fill className=" float-start thmenu text-dark" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
            <a className="text-decoration-none text-dark d-flex align-itemcenter ms-3 mt-2">
              <img
                src={exBarber}
                width="40"
                height="40"
                className="rounded-circle "
              />
              <span className="ms-2 mt-2 fw-bold">Mr Barba</span>
            </a>
            <hr className="text-secondary" />
            <ul className="nav nav-pills flex-column">
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia"
                  className="nav-link text-dark fs-5"
                >
                  <MdBusinessCenter className=" text-secondary" />
                  <span className="ms-3 text-secondary">Geral</span>
                </Link>
              </li>

              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/agendas"
                  className="nav-link text-dark fs-5"
                >
                  <AiOutlineSchedule className=" text-secondary" />
                  <span className="ms-3 text-secondary">Agendas</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/cortes-estilos"
                  className="nav-link text-dark fs-5"
                >
                  <BsScissors className=" text-secondary" />
                  <span className="ms-3 text-secondary">Cortes / estilo</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/cortes-estilos"
                  className="nav-link text-dark fs-5"
                >
                  <ImUserTie className=" text-secondary" />
                  <span className="ms-3 text-secondary">Profissionais</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/cortes-estilos"
                  className="nav-link text-dark fs-5"
                >
                  <MdOutlineForum className=" text-secondary" />
                  <span className="ms-3 text-secondary">Avaliações</span>
                </Link>
              </li>
              <li className="nav-item fs-4 my-1">
                <Link
                  to="../painel-barbearia/alterar-dados"
                  className="nav-link text-dark fs-5"
                >
                  <RiEditBoxFill className=" text-secondary" />
                  <span className="ms-3 text-secondary">Editar dados</span>
                </Link>
              </li>
            </ul>
            <hr className="text-secondary" />
            <Link to="/" className="p-3 fw-bold text-danger">
              Sair
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default PainelBarbearia;
