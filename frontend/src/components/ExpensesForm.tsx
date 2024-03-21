import React from 'react'

const ExpensesForm = () => {
  return (
    <>
        <div className="flex flex-col mt-7">
          <label
            htmlFor="Category Name"
            className="font-semibold text-slate-600"
          >
            Category
          </label>
          <select className="bg-slate-100 mt-5 py-3 px-4 rounded-md">
            <option value={"category"}>Food</option>
            <option value={"expenses"}>Travel</option>
            <option value={"income"}>Miscellanous</option>
          </select>
        </div>
        <div className="flex flex-col mt-7">
          <label
            htmlFor="Category Name"
            className="font-semibold text-slate-600"
          >
            Expense Title
          </label>
          <input
            placeholder="Enter expense title"
            className="bg-slate-100 w-96 p-3 mt-3 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-7">
          <label
            htmlFor="Category Name"
            className="font-semibold text-slate-600"
          >
            Amount
          </label>
          <input
            placeholder="Eg. GHC 100"
            className="bg-slate-100 w-96 p-3 mt-3 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-7">
          <label
            htmlFor="Category Name"
            className="font-semibold text-slate-600"
          >
            Description
          </label>
          <textarea
            cols={12}
            className="bg-slate-100 h-28 mt-3 rounded-md resize-none p-4"
          ></textarea>
        </div>
      </>
  )
}

export default ExpensesForm