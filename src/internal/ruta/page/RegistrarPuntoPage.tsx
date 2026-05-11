
import type { PosicionI } from '../interface/ruta';
import { regitsrarPosision } from '../service/ruta';
import { HttpStatusCode } from 'axios';

export const RegistrarPuntoPage = () => {

    const btnRegistrarPunto = () => {
        const nav = window.navigator.geolocation
        if (!nav) {
            alert("Tu navegador no soporta geolocalización");
            return;
        }

        nav.getCurrentPosition(async (posision) => {
            try {
                const data:PosicionI ={
                    latitud:posision.coords.latitude,
                    longitud:posision.coords.longitude
                }
              const response = await regitsrarPosision(data)
              if(response.status == HttpStatusCode.Created){
                alert("registrado")
              }
                
            } catch (error) {
             console.log(error);
                
            }

        })
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
