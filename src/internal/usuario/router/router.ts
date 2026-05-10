import type { RouterI } from "../../../app/interface/router";
import { ListarUsuarioPage } from "../page/ListarUsuarioPage";

export const usuarioRouter: RouterI[] = [
    {
        element: ListarUsuarioPage,
        isAutenticacion: false,
        path: "/listar/usuario"
    }
]
