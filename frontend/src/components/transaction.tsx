import React from "react";
import { transactions } from "../resources/data";
// import { FaBeer } from "react-icons/fa";

const Transactions = () => {
  return (
    <>
      {transactions.map((transaction) => (
        <div className="bg-slate-50 p-4 my-4 rounded-xl flex mx-6">
          <div className="bg-slate-200 h-12 w-12 rounded-lg mr-4 font-black text-slate-600 flex justify-center items-center">
            {/* <FaBeer /> */}
            EA
          </div>
          <div className="mr-auto">
            <h1 className="font-bold text-slate-700">{transaction.title}</h1>
            <small className="font-medium text-slate-600">
              {transaction.time}
            </small>
          </div>
          <div>
            <h1 className="text-slate-700 font-black">{transaction.amount}</h1>

          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
