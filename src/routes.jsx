import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Jogos from './pages/Jogos/Jogos.jsx'
import Classificacao from "./pages/Classificacao/Classificacao.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/jogos" element={ <Jogos /> }></Route>
                <Route path="/classificacao" element={ <Classificacao /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes
