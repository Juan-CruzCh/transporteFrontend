import L from "leaflet";

export const iconoMiUbicacion = L.divIcon({
    className: "mi-ubicacion-marker",
    html: `<div style="
        background-color: #2196F3;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
    "></div>`,
    iconSize: [21, 21],
    iconAnchor: [10, 10],
});