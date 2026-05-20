import React, { useState, useEffect } from "react";
import MapView from "./MapView";
import VehiclesList from "./VehiclesList";
import { fetchVehicles } from "./api/mockProvider";

export default function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(fetchVehicles());
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapView vehicles={vehicles} />
      <VehiclesList vehicles={vehicles} />
    </div>
  );
}
