import React from "react";

const Table = ({ data }) => (
  <table className="table-auto border-collapse border border-gray-300  bg-white shadow-md rounded-lg mx-auto">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">{row.name}</td>
          <td className="border border-gray-300 px-4 py-2">{row.age}</td>
          <td className="border border-gray-300 px-4 py-2">{row.email}</td>
          <td className="border border-gray-300 px-4 py-2">{row.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
