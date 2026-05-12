import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { puntoInicial } from "../utils/PuntoInicial";
import { useEffect, useState } from "react";
import type { PosicionI } from "../interface/ruta";
import { iconoMiUbicacion } from "../utils/iconosLeaflet";
import { BuscarlorLeaflet } from "../components/BuscarlorLeaflet";

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
    const puntos: [number, number][] = [
        posicionInicial,
        [-19.045, -65.255],
        [-19.05, -65.26],
        [-19.055, -65.27],
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
                    <BuscarlorLeaflet />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="Mapa"
                    />
                    <Polyline positions={puntos} color="blue" />
                    <Marker position={posicionInicial} icon={iconoMiUbicacion}>
                        <Popup>Estás aquí</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};