import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "TEST_TOKEN";

export default function MapView({ vehicles }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [9.035, 45.626],
      zoom: 14
    });

    vehicles.forEach(v => {
      new mapboxgl.Marker({ color: "#00D1C1" })
        .setLngLat([v.lng, v.lat])
        .addTo(map);
    });
  }, [vehicles]);

  return <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />;
}
