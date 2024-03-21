import { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import Modal from "./Modal";


const AllTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="flex justify-between px-8 pt-8">
      <h1 className="font-black text-slate-600">Recent Transactions</h1>
      <button className="font-bold text-blue-500" onClick={toggleModal}>See all</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black text-slate-600 mb-4">All Transactions</h1>
            <p
              onClick={onCloseModal}
              className="font-black -mt-6 cursor-pointer bg-slate-100 rounded-full py-3 px-5"
            >
              X
            </p>
          </div>

        
          <div className="flex flex-col">
           <ExpensesForm />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center mt-5 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Save and Close
          </button>
        </Modal>
    </div>
  );
};

export default AllTransactions;
