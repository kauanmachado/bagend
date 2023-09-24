import "../styles/dashboard.css";
import {
  Navbar,
} from "react-bootstrap";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";
import { RiEditBoxFill, RiMenu2Fill } from "react-icons/ri";
import {  Link, useNavigate } from "react-router-dom";
import { MdBusinessCenter, MdOutlineForum } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import Logout from "./Logout";

const PainelBarbearia = () => {

  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"

  

  useEffect(() => {
    async function fetchData(){
      try {
      const res = await axios.get(`${apiUrl}/painel-barbearia/${id}`, {
        withCredentials: true
      })
        const dados = res.data
        const barbearia = {
          ...dados,
          imagemUrl: `${apiUrl}/${dados.foto_perfil}`
        }
        setData(barbearia)  
    }
      catch(error) {
        console.error('Erro ao buscar dados da API:', error)
        if (error.response.status = 401) {
          Cookies.remove('token')
          navigate('/login-barbearia')
        }
      }
    }
    fetchData();
  },[])

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
                src={data.imagemUrl}
                width="40"
                height="40"
                className="rounded-circle "
              />
              <span className="ms-2 mt-2 fw-bold">{data.nome_barbearia}</span>
            </a>
            <hr className="text-secondary" />
            <ul className="nav nav-pills flex-column">
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia"
                  className="nav-link text-secondary fs-5"
                >
                  <MdBusinessCenter />
                  <span className="ms-3">Geral</span>
                </Link>
              </li>

              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/agendas"
                  className="nav-link text-secondary fs-5"
                >
                  <AiOutlineSchedule />
                  <span className="ms-3">Agendas</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/cortes-estilos"
                  className="nav-link text-secondary fs-5"
                >
                  <BsScissors />
                  <span className="ms-3">Cortes / Estilos</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/profissionais"
                  className="nav-link text-secondary fs-5"
                >
                  <ImUserTie/>
                  <span className="ms-3 ">Profissionais</span>
                </Link>
              </li>
              <li className="nav-item  fs-4 my-1">
                <Link
                  to="../painel-barbearia/avaliacoes"
                  className="nav-link text-secondary fs-5"
                >
                  <MdOutlineForum />
                  <span className="ms-3 ">Avaliações</span>
                </Link>
              </li>
              <li className="nav-item fs-4 my-1">
                <Link
                  to="../painel-barbearia/alterar-dados"
                  className="nav-link text-secondary fs-5"
                >
                  <RiEditBoxFill/>
                  <span className="ms-3">Editar dados</span>
                </Link>
              </li>
            </ul>
            <hr className="text-secondary" />
            <Logout/>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default PainelBarbearia;
