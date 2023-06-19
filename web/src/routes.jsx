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

const PrivateRoute = ({children, redirectTo}) => {
  const isAuthenticated = Cookies.get('token');
  console.log("isAuth: ", isAuthenticated)
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login-cliente" element={<LoginCliente />} />
        <Route path="cadastro-cliente" element={<CadastroCliente />} />
        <Route path="login-barbearia" element={<LoginBarbearia />} />
        <Route path="cadastro-barbearia" element={<CadastroBarbearia />} />

        {/* PAINEL DO CLIENTE */}
        <Route path="painel-cliente" element={<PrivateRoute redirectTo="/login-cliente">
          <CliGeral />
        </PrivateRoute>} />
        <Route path="painel-cliente/agendas" element={<CliAgendas />} />
        <Route path="painel-cliente/alterar-dados" element={<CliEditarDados />} />
        <Route path="painel-cliente/salvos" element={<CliSalvos />} />

        {/* PAINEL DA BARBEARIA */}
        <Route path="painel-barbearia" element={<Geral />} />
        <Route path="painel-barbearia/agendas" element={<BrbAgendas />} />
        <Route path="painel-barbearia/cortes-estilos" element={<CortesEstilos />} />
        <Route path="painel-barbearia/alterar-dados" element={<BrbEditarDados />} />
        <Route path="painel-barbearia/cortes-estilos/adicionar-corteestilo" element={<AdicionarCorteEstilo />} />
        <Route path="painel-barbearia/cortes-estilos/editar-corteestilo" element={<EditarCorteEstilo />} />
        <Route path="painel-barbearia/profissionais" element={<Profissionais />} />
        <Route path="painel-barbearia/avaliacoes" element={<Avaliacoes />} />
        <Route path="perfil-barbearia" element={<PerfilBarbearia />} />
        <Route path="perfil-barbearia/avaliar" element={<Avaliar />} />


        <Route path="/redefinir-senha" element={<RedefinirSenha />} /> 
        <Route path="/barbearias" element={<Barbearias />} /> 
        <Route path="/agenda" element={<Agenda/>} />   
      </Routes>
    </BrowserRouter>
  );
};
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "login-cliente",
//     element: <LoginCliente />,
//   },
//   {
//     path: "login-barbearia",
//     element: <LoginBarbearia />,
//   },
//   {
//     path: "cadastro-cliente",
//     element: <CadastroCliente />,
//   },
//   {
//     path: "cadastro-barbearia",
//     element: <CadastroBarbearia />,
//   },
//   {
//     path: "perfil-cliente",
//     element: <PerfilCliente />,
//   },
//   {
//     path: "barbearias",
//     element: <Barbearias />,
//   },
//   {
//     path: "painel-barbearia",
//     element: <Geral />,
//   },
//   {
//     path: "painel-barbearia/agendas",
//     element: <BrbAgendas />,
//   },
//   {
//     path: "painel-barbearia/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "painel-barbearia/cortes-estilos",
//     element: <CortesEstilos />,
//   },
//   {
//     path: "painel-barbearia/alterar-dados",
//     element: <BrbEditarDados />,
//   },
//   {
//     path: "painel-barbearia/cortes-estilos/adicionar-corteestilo",
//     element: <AdicionarCorteEstilo />,
//   },
//   {
//     path: "painel-cliente",
//     element: <CliGeral />,
//   },
//   {
//     path: "painel-cliente/agendas",
//     element: <CliAgendas />,
//   },
//   {
//     path: "painel-cliente/alterar-dados",
//     element: <CliEditarDados />,
//   },
// ])

export default Routers;
