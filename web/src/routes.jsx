import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Autenticado from "./auth";
import Home from "./pages/Home";
import LoginCliente from "./pages/LoginCliente";
import LoginBarbearia from "./pages/LoginBarbearia";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroBarbearia from "./pages/CadastroBarbearia";
import PerfilCliente from "./pages/PerfilCliente";
import Barbearias from "./pages/Barbearias";
import Geral from "./pages/PainelBarbearia/Geral";
import BrbAgendas from "./pages/PainelBarbearia/BrbAgendas";
import Dashboard from "./pages/PainelBarbearia/Dashboard";
import CortesEstilos from "./pages/PainelBarbearia/CortesEstilos";
import BrbEditarDados from "./pages/PainelBarbearia/BrbEditarDados";
import AdicionarCorteEstilo from "./pages/PainelBarbearia/AdicionarCorteEstilo";
import CliGeral from "./pages/PainelCliente/CliGeral";
import CliAgendas from "./pages/PainelCliente/CliAgendas";
import CliEditarDados from "./pages/PainelCliente/CliEditarDados";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//       {...rest}
//       render={(props) =>
//         Autenticado ? (
//           <Component {...props} />
//         ) : (
//           <Link to="/login-cliente" />
//         )
//       }
//       />
//     )
// };

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login-cliente" element={<LoginCliente />} />
        <Route path="cadastro-cliente" element={<CadastroCliente />} />
        <Route path="login-barbearia" element={<LoginBarbearia />} />
        <Route path="cadastro-barbearia" element={<CadastroBarbearia />} />
        <Route path="painel-cliente" element={<CliGeral />} />
        <Route path="painel-cliente/agendas" element={<CliAgendas />} />
        <Route path="painel-cliente/alterar-dados" element={<CliEditarDados />} />
        <Route path="painel-barbearia" element={<Geral />} />
        <Route path="painel-barbearia/agendas" element={<BrbAgendas />} />
        <Route path="painel-barbearia/cortes-estilos" element={<CortesEstilos />} />
        <Route path="painel-barbearia/alterar-dados" element={<BrbEditarDados />} />
        <Route path="painel-barbearia/cortes-estilos/adicionar-corteestilo" element={<AdicionarCorteEstilo />} />
        <Route path="/barbearias" element={<Barbearias />} />       
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