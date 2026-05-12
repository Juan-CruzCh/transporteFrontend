import { BrowserRouter, Route } from "react-router";
import type { RouterI } from "../interface/router";
import { Routes } from "react-router";
import { usuarioRouter } from "../../internal/usuario/router/router";
import { lineaRouter } from "../../internal/linea/router/router";
import { rutaRouter } from "../../internal/ruta/router/router";
import { ubicacionRouter } from "../../internal/ubicacion/router/router";

const renderRoutes = (routes: RouterI[], isAuthenticated: boolean) =>
    routes.map((item, index) => {

        return (
            <Route
                key={index}
                path={item.path}
                element={<item.element />}
            />

        );
    });

export const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout */}
                < Route   >
                    {renderRoutes(usuarioRouter, false)}
                    {renderRoutes(rutaRouter, false)}
                    {renderRoutes(lineaRouter, false)}
                    {renderRoutes(ubicacionRouter, false)}
                </Route>


            </Routes>
        </BrowserRouter>

    );
};