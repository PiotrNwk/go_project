import React from "react";

export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg shadow transition-colors
        ${
          active
            ? "bg-blue-700 text-white"
            : "bg-blue-600 text-white hover:bg-blue-800"
        }`}
    >
      {label}
    </button>
  );
}
