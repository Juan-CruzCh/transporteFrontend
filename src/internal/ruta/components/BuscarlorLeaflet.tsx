import "leaflet-geosearch/dist/geosearch.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as GeoSearch from 'leaflet-geosearch';
export const BuscarlorLeaflet = () => {
    const map = useMap();
    useEffect(() => {
        const provider = new GeoSearch.OpenStreetMapProvider();
        const buscadorControl = new (GeoSearch.GeoSearchControl as any)({
            provider: provider,
            style: 'bar',
            showMarker: true,
            showPopup: true,
            autoClose: true,
            retainZoomLevel: false,
            animateZoom: true,
            keepResult: true,
            searchLabel: 'Buscar dirección en Sucre...',
        })

        map.addControl(buscadorControl)

    }, [map])

    return null
}
