import { useState } from "react";
import AllTransactions from "../../components/AllTransactions";
import CardBalance from "../../components/CardBalance";
import Expenses from "../../components/Categories";
import Graph from "../../components/Graph";
import Transactions from "../../components/Transaction";
import Modal from "../../components/Modal";
import CategoryForm from "../../components/CategoryForm";
import ExpensesForm from "../../components/ExpensesForm";
import IncomeForm from "../../components/IncomeForm";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("category");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  let content;

  if (selectedValue === "category") {
    content = <CategoryForm />;
  } else if (selectedValue === "expenses") {
    content = <ExpensesForm />;
  } else {
    content = <IncomeForm />;
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <CardBalance />
        <AllTransactions />
        <Transactions />
      </div>

      <div className=" w-3/4 relative">
        <Expenses />
        <Graph />
        <button
        onClick={toggleModal}
        className="bg-slate-200 text-slate-700 fixed py-3 px-5 font-black bottom-0 right-0 m-9 rounded-md text-4xl"
      >
        +
      </button>
      </div>
      

      {/* Modal */}
      <div className="flex flex-col items-center justify-center min-h-screen w-auto">
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black text-slate-600 mb-4">New Data</h1>
            <p
              onClick={onCloseModal}
              className="font-black -mt-6 cursor-pointer bg-slate-100 rounded-full py-3 px-5"
            >
              X
            </p>
          </div>

          {/* Body */}
          <div className="flex flex-col">
            <select
              className="bg-slate-100 mt-5 py-3 px-4 rounded-md"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value={"category"}>Category</option>
              <option value={"expenses"}>Expense</option>
              <option value={"income"}>Income</option>
            </select>
            {content}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center mt-5 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Save and Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
