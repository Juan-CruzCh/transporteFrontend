import { BrowserRouter, Route } from "react-router";
import type { RouterI } from "../interface/router";
import { Routes } from "react-router";
import { usuarioRouter } from "../../internal/usuario/router/router";

const renderRoutes = (routes: RouterI[], isAuthenticated: boolean) =>
    routes.map((item, index) => {
        console.log(item.path);

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
                < Route >
                    {renderRoutes(usuarioRouter, false)}
                </Route>

            </Routes>
        </BrowserRouter>

    );
};