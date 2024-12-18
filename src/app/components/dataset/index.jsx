'use client'

import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Path file CSV di folder public
    const fetchData = async () => {
      const response = await fetch("/youtube.csv");
      const reader = await response.text();
      Papa.parse(reader, {
        header: true, // Parsing header agar nama kolom otomatis
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data);
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data YouTube</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {/* Ambil header berdasarkan data */}
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-left"
                  >
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx} className="border border-gray-300 px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
