
import type { PosicionI } from '../interface/ruta';
import { regitsrarPosision } from '../service/ruta';
import { HttpStatusCode } from 'axios';
import { puntoInicial } from '../utils/PuntoInicial';

export const RegistrarPuntoPage = () => {

    const btnRegistrarPunto = async () => {
        const puntoI = await puntoInicial()
        const response = await regitsrarPosision(puntoI)
        if (response.status == HttpStatusCode.Created) {
            alert("registrado")
        }
    }
    return (
        <button
            onClick={btnRegistrarPunto}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200"
        >
            Registrar Punto
        </button>
    )
}
