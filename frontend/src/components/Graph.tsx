

const Graph = () => {
  return (
    <div className=" p-5 border-2 m-8 border-slate-100 rounded-xl">
      <div className="flex justify-between">
      <h1 className="font-black text-slate-600">Graph</h1>
      <select className="font-medium text-slate-600 outline-none">
        <option value="month">Year</option>
        <option value="month">Month</option>
      </select>
      </div>
      <div className="flex flex-start bg-slate-100 h-56 w-full mt-5"></div>
    </div>
  );
};

export default Graph;
