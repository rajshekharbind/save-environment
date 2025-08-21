import React from "react";

export default function EcoCard({ title, description, icon, color }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-center">{description}</p>
    </div>
  );
}

