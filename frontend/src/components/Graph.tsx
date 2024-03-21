import { useEffect, useState } from "react";
import Barchart from "./Barchart";
import { monthlyData, yearlyData } from "../resources/data";
import BarGraph from "./Barchart";

const Graph = () => {
  const [selectedValue, setSelectedValue] = useState("year");
  const [selectedView, setSelectedView] = useState(yearlyData)

  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log("Selected", selectedValue);
  };

  

  return (
    <div className=" p-5 border-2 m-8 border-slate-100 rounded-xl">
      <div className="flex justify-between">
        <h1 className="font-black text-slate-600">Graph</h1>
        <select defaultValue={'year'}
          className="font-medium text-slate-600 outline-none"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div className="flex flex-start h-auto w-full mt-5">
       <BarGraph />
       
      </div>
    </div>
  );
};

export default Graph;
