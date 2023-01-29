import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { PaginaInicial } from "./pages/PaginaInicial/PaginaInicial";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { Login } from "./pages/Login";
import { GerenciamentoMesas } from "./pages/GerenciamentoMesas/GerenciamentoMesas";
import { Item } from "./pages/Item/Item";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gerenciamentomesas" element={<GerenciamentoMesas />} />
                <Route path="/item" element={<Item />} />
            </Routes>
        </Router>
    )
}
