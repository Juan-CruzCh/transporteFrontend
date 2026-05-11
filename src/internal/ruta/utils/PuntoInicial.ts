import type { PosicionI } from "../interface/ruta";

export function puntoInicial(): Promise<PosicionI> {
    return new Promise((resolve, reject) => {
        const nav = window.navigator.geolocation;

        if (!nav) {
            alert("Tu navegador no soporta geolocalización");
            resolve({ latitud: 0, longitud: 0 });
            return;
        }

        nav.getCurrentPosition(
            (posicion) => {
                resolve({
                    latitud: posicion.coords.latitude,
                    longitud: posicion.coords.longitude
                });
            },
            (error) => {
               console.log(error)  
                alert("No se pudo obtener tu ubicación actual");
                resolve({ latitud: 0, longitud: 0 });
            },
        );
    });
}