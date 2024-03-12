import React from "react";
import Navbar from "../../components/navbar";

const LandingPage = () => {
  return (
    <>
        <Navbar />
    <div className="bg-white h-[90vh] flex items-center justify-center flex-col">
      <h2 className=" text-center text-[72px] font-black leading-tight tracking-tight text-gray-900">
        Manage Your Finances <br /> <span>Effortlessly</span>
      </h2>
      <p className="text-center text-md text-gray-500 w-[50%] mt-6 leading-normal">
        This Expense Tracker App is designed to help users easily manage and
        track their expenses. Whether you're tracking personal finances or
        managing expenses for a business, this app provides a simple and
        intuitive way to keep track of where your money is going.
      </p>
      <div className="mt-9 flex w-1/4">
        <button
          type="submit"
          className="flex mx-4 w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
          Let's get started
        </button>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-white border-2 borfer-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
          Learn more
        </button>
      </div>
    </div>
            </>
  );
};

export default LandingPage;
