import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-300 bg-white shadow-md rounded-lg mx-auto text-sm table-auto">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th
                key={col}
                className="border border-gray-300 px-3 py-2 text-left whitespace-nowrap font-semibold"
              >
                {col} {/* exact property name */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((col) => (
                <td
                  key={col}
                  className="border border-gray-300 px-3 py-2 whitespace-nowrap align-top"
                >
                  {row[col] === null || row[col] === undefined || row[col] === ""
                    ? "—"
                    : String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
