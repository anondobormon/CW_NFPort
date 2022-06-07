import React from "react";

export default function ReservationCard({ item }) {
  return (
    <div className={`module ${item.border}`}>
      <div className="module-header minimal">
        <h3 className="module-heading">{item.title}</h3>
      </div>
      <div className="module-main">
        <div className="module-number blue">{item.count}</div>
      </div>
    </div>
  );
}
