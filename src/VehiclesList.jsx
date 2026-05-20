import React from "react";

export default function VehiclesList({ vehicles }) {
  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      background: "white",
      padding: "10px",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px"
    }}>
      <h3>Mezzi vicini</h3>
      {vehicles.map(v => (
        <div key={v.id}>
          {v.type} — €{v.price}
        </div>
      ))}
    </div>
  );
}
