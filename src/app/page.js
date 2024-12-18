'use client'

import Image from "next/image";
import CategoryList from "./components/list";
import items from "./components/data";
import DataTable from "./components/dataset";
import { useState } from "react";

export default function Home() {

  const [klik, setKlik] = useState(false);
  const [klik2, setKlik2] = useState(false);

  function handleClick() {
    setKlik(!klik);
  }
  function handleClick2() {
    setKlik2(!klik2);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4" onClick={handleClick}>
        Trending YouTube Video Statistics
      </h1>
      <div className={`${klik ? "hidden" : ""}`}>
        <CategoryList categories={items} />
      </div>
      <h1 className="text-3xl font-bold mb-4" onClick={handleClick2}>Youtube Videos Dataset</h1>
      <div className={`${klik2 ? "hidden" : ""}`}>
        <DataTable />
      </div>
    </div>
  );
}
