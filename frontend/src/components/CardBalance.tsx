import React from "react";

const CardBalance = () => {
  return (
    <div className="bg-slate-700 rounded-lg h-52 text-white p-4 mt-7 mx-7 flex flex-col justify-between">
      <div>
        {" "}
        <small>CURRENT BALANCE</small>
        <h2 className="text-3xl font-black">GHC 45,505.00</h2>
      </div>
      <div>
        {" "}
        <small className="text-lg">**** **** **** 4593</small>
      </div>
      <div className="flex justify-between">
        <div>
          <small>CARD HOLDER</small>
          <h2 className="text-md font-bold">PHILOMENA POTINGE</h2>
        </div>
        <div>
          <small>EXP DATE</small>
          <h2 className="text-md font-bold">09/25</h2>
        </div>
      </div>
    </div>
  );
};

export default CardBalance;
