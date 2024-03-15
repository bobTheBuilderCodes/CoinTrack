

const DashboardNav = () => {
  return (
    <div className="h-[7%] bg-white border-2 border-slate-100 py-3 flex justify-between px-6 ">
      <h1 className="px-0 -pt-3 font-black text-2xl text-slate-500">
        Dashboard
      </h1>

      <input
        type="search"
        placeholder="Search for transactions"
        className="w-1/3 bg-slate-100 p-2 rounded-lg"
      />
      <div className="bg-slate-200 h-9 w-9 rounded-lg mr-1 font-black text-slate-600 flex justify-center items-center">
        {/* <FaBeer /> */}
        RS
      </div>
    </div>
  );
};

export default DashboardNav;
