import "leaflet-geosearch/dist/geosearch.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import * as GeoSearch from "leaflet-geosearch";

export const BuscarlorLeaflet = () => {
    const map = useMap();

    useEffect(() => {
        const bounds = map.getBounds();

        const west = bounds.getWest();
        const north = bounds.getNorth();
        const east = bounds.getEast();
        const south = bounds.getSouth();

        const provider = new GeoSearch.OpenStreetMapProvider({
            params: {
                countrycodes: "bo",
                viewbox: `${west},${north},${east},${south}`,
                bounded: 1,
            },
        });

        const buscadorControl = new (GeoSearch.GeoSearchControl as any)({
            provider,
            style: "bar",
            showMarker: true,
            showPopup: true,
            autoClose: true,
            retainZoomLevel: false,
            animateZoom: true,
            keepResult: true,
            searchLabel: "Buscar dirección...",
        });

        map.addControl(buscadorControl);

        return () => {
            map.removeControl(buscadorControl);
        };
    }, [map]);

    return null;
};