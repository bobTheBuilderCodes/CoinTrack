import React from "react";

const CategoryForm = () => {
  return (
    <div className="flex flex-col mt-7">
      <label htmlFor="Category Name" className="font-semibold text-slate-600">
        Category Name
      </label>
      <input
        placeholder="Enter name"
        className="bg-slate-100 w-96 p-3 mt-3 rounded-md"
      />
    </div>
  );
};

export default CategoryForm;
