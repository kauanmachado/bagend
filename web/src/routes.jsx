import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginCliente from "./pages/LoginCliente";
import LoginBarbearia from "./pages/LoginBarbearia";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroBarbearia from "./pages/CadastroBarbearia";
import Barbearias from "./pages/Barbearias";
import Geral from "./pages/PainelBarbearia/Geral";
import BrbAgendas from "./pages/PainelBarbearia/BrbAgendas";
import CortesEstilos from "./pages/PainelBarbearia/CortesEstilos";
import BrbEditarDados from "./pages/PainelBarbearia/BrbEditarDados";
import AdicionarCorteEstilo from "./pages/PainelBarbearia/AdicionarCorteEstilo";
import CliGeral from "./pages/PainelCliente/CliGeral";
import CliAgendas from "./pages/PainelCliente/CliAgendas";
import CliEditarDados from "./pages/PainelCliente/CliEditarDados";
import Cookies from "js-cookie";
import Agenda from "./pages/Agenda";
import Profissionais from "./pages/PainelBarbearia/Profissionais";
import Avaliacoes from "./pages/PainelBarbearia/Avaliacoes";
import CliSalvos from "./pages/PainelCliente/CliSalvos";
import EditarCorteEstilo from "./pages/PainelBarbearia/EditarCorteEstilo";
import PerfilBarbearia from "./pages/PerfilBarbearia";
import Avaliar from "./pages/Avaliar";
import RedefinirSenha from "./pages/RedefinirSenha";
import jwt_decode from "jwt-decode"

const checkIfTokenExists = () => {
  const isAuthenticated = Cookies.get('token');
  if(!isAuthenticated){
    console.log('Token não encontrado!')
  }
}

const PrivateRouteBarber = ({children, redirectTo}) => {
  checkIfTokenExists()
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const role = decodedToken.role

  if (role !== "barbearia") {
    return <Navigate to={redirectTo}/>
  } 

  return children
}

const PrivateRouteClient = ({children, redirectTo}) => {
  checkIfTokenExists()
  const token = Cookies.get('token')
  const decodedToken =  jwt_decode(token)
  const role =  decodedToken.role

  if(role !== "cliente") {
    return <Navigate to={redirectTo}/>
  }
  return children
}

  const LogRoute = ({children, redirectTo}) => {
  const token = Cookies.get('token')

  if(token) {
    return <Navigate to={redirectTo}/>
  }

  return children
}

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        {/* ROTAS DE LOGIN E CADASTRO */}
        <Route path="login-cliente" element={<LogRoute redirectTo={"/"}>
          <LoginCliente />
        </LogRoute>} />
        <Route path="cadastro-cliente" element={<LogRoute redirectTo={"/"}>
          <CadastroCliente />
        </LogRoute>} />
        <Route path="login-barbearia" element={<LogRoute redirectTo={"/"}>
          <LoginBarbearia />
        </LogRoute>} />
        <Route path="cadastro-barbearia" element={<LogRoute redirectTo={"/"}>
          <CadastroBarbearia />
        </LogRoute>} />

        {/* ROTAS DO CLIENTE */}
        <Route path="painel-cliente" element={<PrivateRouteClient redirectTo="/login-cliente">
          <CliGeral />
        </PrivateRouteClient>} />
        <Route path="painel-cliente/agendas" element={<PrivateRouteClient redirectTo={"/login-cliente"}>
          <CliAgendas />
        </PrivateRouteClient>} />
        <Route path="painel-cliente/alterar-dados" element={<PrivateRouteClient redirectTo={"/login-cliente"}>
          <CliEditarDados />
        </PrivateRouteClient>} />
        <Route path="painel-cliente/salvos" element={<PrivateRouteClient redirectTo={"/login-cliente"}>
          <CliSalvos />
        </PrivateRouteClient>} />

        {/* ROTAS DA BARBEARIA */}
        <Route path="painel-barbearia" element={<PrivateRouteBarber redirectTo="/login-barbearia">
          <Geral />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/agendas" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <BrbAgendas />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/cortes-estilos" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <CortesEstilos />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/alterar-dados" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <BrbEditarDados />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/cortes-estilos/adicionar-corteestilo" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <AdicionarCorteEstilo />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/cortes-estilos/editar-corteestilo" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <EditarCorteEstilo />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/profissionais" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <Profissionais />
        </PrivateRouteBarber>} />
        <Route path="painel-barbearia/avaliacoes" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <Avaliacoes />
        </PrivateRouteBarber>} />
        <Route path="perfil-barbearia" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <PerfilBarbearia />
        </PrivateRouteBarber>} />
        <Route path="perfil-barbearia/avaliar" element={<PrivateRouteBarber redirectTo={"/login-barbearia"}>
          <Avaliar />
        </PrivateRouteBarber>} />

        {/* ROTAS PÚBLICAS */}
        <Route path="/redefinir-senha" element={<RedefinirSenha />} /> 
        <Route path="/barbearias" element={<Barbearias />} /> 
        <Route path="/agenda" element={<Agenda/>} />   
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
