import type { RouterI } from "../../../app/interface/router";
import { MapaRutaPage } from "../page/MapaRutaPage";
import { RegistrarPuntoPage } from "../page/RegistrarPuntoPage";

export const rutaRouter: RouterI[] = [
    {
        element:RegistrarPuntoPage,
        isAutenticacion:false,
        path:"registrarPunto"
    },
     {
        element:MapaRutaPage,
        isAutenticacion:false,
        path:"rutas"
    }
]
