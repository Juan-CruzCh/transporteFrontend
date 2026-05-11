import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { puntoInicial } from "../utils/PuntoInicial";
import { useEffect, useState } from "react";
import type { PosicionI } from "../interface/ruta";
import { iconoMiUbicacion } from "../utils/iconosLeaflet";

export const MapaRutaPage = () => {
    const [punto, setPunto] = useState<PosicionI | null>(null);
    useEffect(() => {
        puntoInicial().then((item) => {
            setPunto(item);
        });
    }, []);

    if (!punto) {
        return <h1>Cargando mapa...</h1>;
    }
    const posicionInicial: [number, number] = [
        punto.latitud,
        punto.longitud,
    ];
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div style={{ flex: 1 }}>
                <MapContainer
                    center={posicionInicial}
                    zoom={15}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <Marker position={posicionInicial} icon={iconoMiUbicacion}>
                        <Popup>Estás aquí</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};