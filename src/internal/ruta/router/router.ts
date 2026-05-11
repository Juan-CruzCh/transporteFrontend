import type { RouterI } from "../../../app/interface/router";
import { RegistrarPuntoPage } from "../page/RegistrarPuntoPage";

export const rutaRouter: RouterI[] = [
    {
        element:RegistrarPuntoPage,
        isAutenticacion:false,
        path:"registrarPunto"
    }
]
