import { Routes, Route } from "react-router-dom";
import App from "../componentes/entrada";

function AppRoute() {
    return (
        <Routes>
            <Route path='/' element={<App/>}></Route>
        </Routes>
    )
}

export default AppRoute

