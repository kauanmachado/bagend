

import "../styles/dashboard.css";
import { Navbar} from "react-bootstrap"
import { AiOutlineSchedule } from "react-icons/ai"
import { VscAccount } from "react-icons/vsc";
import { BsBookmarks } from "react-icons/bs"
import { RiEditBoxFill, RiMenu2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MdCoPresent } from "react-icons/md";
import Logout from "./Logout";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";
import axios from "axios";


const PainelCliente = () => {


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
      const res = await axios.get(`${apiUrl}/painel-cliente/${id}`, {
        withCredentials: true
      })
        // console.log(res)
        const data = {
          nomecliente: res.data.nome_completo,
        }
        setData(data)  
    }
      catch(error) {
        console.error('Erro ao buscar dados da API:', error)
        if (error.response.status = 401) {
          Cookies.remove('token')
          navigate('/login-cliente')
        }
      }
    }
    fetchData();
  },[])


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
            <span className="ms-1 fw-bold">{data.nomecliente}</span>
          </a>
          <hr className="text-secondary"/>
          <ul className="nav nav-pills flex-column">
          <li className="nav-item  fs-4 my-1">
              <Link to="../painel-cliente"  className="nav-link text-secondary fs-5">
                <MdCoPresent />
                <span className="ms-3 text-secondary">Geral</span>
                </Link>
            </li>
            
            <li className="nav-item  fs-4 my-1">
              <Link to={`../painel-cliente/agendas/${id}`}  className="nav-link text-secondary fs-5">
                <AiOutlineSchedule />
                <span className="ms-3">Agendas</span>
                </Link>
            </li>
            <li className="nav-item  fs-4 my-1">
            <Link to={`../painel-cliente/${id}/salvos`}  className="nav-link text-secondary fs-5">
                <BsBookmarks />
                <span className="ms-3">Salvos</span>
                </Link>
            </li>
            <li className="nav-item fs-4 my-1">
            <Link to="../painel-cliente/alterar-dados"  className="nav-link text-secondary fs-5">
                <RiEditBoxFill />
                <span className="ms-3">Editar dados</span>
                </Link>
            </li>
          </ul>
          <hr className="text-secondary"/>
              <Logout/>
          </div>
        </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default PainelCliente;
