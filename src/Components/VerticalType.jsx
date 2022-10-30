import React from "react";

function VerticalType({ verticalName, setCurrentVertical, verticalType }) {
  return (
    <>
      <button
        className={`hover:bg-blue-500  background-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
          verticalName === verticalType
            ? "text-amber-500"
            : "text-green-700"
        }`}
        onClick={(e) => setCurrentVertical(e.target.value)}
        value={verticalName}
      >
        {verticalName}
      </button>
    </>
  );
}

export default VerticalType;
