import { useState } from "react";
import { expenses } from "../resources/data";
import Modal from "./Modal";
import ExpensesForm from "./ExpensesForm";
import CategoryForm from "./CategoryForm";

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("category");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="p-5 border-2 m-8 border-slate-100 rounded-xl max-h-56">
      <h1 className="font-black text-slate-600">Your Categories</h1>
      <div className="flex justify-start">
        {expenses.map((expense, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            className="bg-slate-100 flex flex-col justify-between my-4 mr-6 min-w-56 min-h-32 p-3 rounded-md"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-slate-700 text-xl mb-auto mr-auto">
                {expense.categoryName}
              </h1>

              {hoveredIndex === index && (
                <>
                  <h6 className="cursor-pointer">View</h6>
                  <h6 className="cursor-pointer">Close</h6>
                </>
              )}
            </div>

            <progress
              max={10}
              value={5}
              style={{
                backgroundColor: "red",
              }}
            ></progress>
            <div className="flex items-center justify-between mt-1">
              <small className="font-bold text-slate-600">10%</small>
              <h6 className="text-right font-semibold text-slate-500">
                {expense.amount}
              </h6>
            </div>
          </div>
        ))}
        <div
          onClick={toggleModal}
          className="cursor-pointer min-w-24 p-5 border-2 border-dashed rounded-3xl my-4 flex items-center justify-center font-bold text-slate-700"
        >
          Add
        </div>
      </div>

      {/* Modal */}
      <div className="flex flex-col items-center justify-center min-h-screen w-auto">
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black text-slate-600 mb-4">
              New Category
            </h1>
            <p
              onClick={onCloseModal}
              className="font-black -mt-6 cursor-pointer bg-slate-100 rounded-full py-3 px-5"
            >
              X
            </p>
          </div>

          <div className="flex flex-col">
            <CategoryForm />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Expenses;
