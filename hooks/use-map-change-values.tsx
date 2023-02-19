import {useEffect} from "react";

export const useMapChangeValues = ({map, setMapLng, setMapLat, setMapZoom}) => {
    useEffect(() => {
        console.log("sds")
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setMapLng(map.current.getCenter().lng.toFixed(4));
            setMapLat(map.current.getCenter().lat.toFixed(4));
            setMapZoom(map.current.getZoom().toFixed(2));
        });
    });
}