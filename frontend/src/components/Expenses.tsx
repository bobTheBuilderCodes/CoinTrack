

const Expenses = () => {
  return (
    <div className=" p-5 border-2 m-8 border-slate-100 rounded-xl">
      <h1 className="font-black text-slate-600">Your Expenses</h1>
      <div className="flex flex-start">
        <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4 mr-12">
          <h1 className="font-medium p-4 text-slate-600">Food and Drink</h1>
        </div>
        <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4 mr-12">
          <h1 className="font-medium p-4 text-slate-600">Miscellanous</h1>
        </div>
        <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4">
          <h1 className="font-medium p-4 text-slate-600">Savings</h1>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
