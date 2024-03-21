import React from "react";

const CategoryForm = () => {
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor="Category Name" className="font-semibold text-slate-600">
         Name
      </label>
      <input
        placeholder="Enter category name"
        className="bg-slate-100 w-96 p-3 mt-3 rounded-md"
      />
      <label htmlFor="Category Name" className="font-semibold text-slate-600 mt-7">
       Percentage (%)
      </label>
      <input
        placeholder="Enter percentage" max={70} min={1}
        className="bg-slate-100 w-96 p-3 my-3 rounded-md" type="number" inputMode="numeric"
      />
      <label htmlFor="Category Name" className="font-semibold text-slate-600 mt-7">
       Calculated Amount (GHC)
      </label>
      <input value={'2,000.00'} readOnly disabled
        placeholder="Enter percentage"
        className="bg-slate-100 w-96 p-3 my-3 rounded-md"
      />
      
      <button
            type="submit"
            className="flex w-full justify-center mt-5 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Save and Close
          </button>
    </div>
  );
};

export default CategoryForm;
