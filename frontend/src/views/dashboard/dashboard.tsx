import Transactions from "../../components/transaction";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="h-[7%] bg-white border-2 border-slate-100 py-3 flex justify-between px-6 ">
        <h1 className="px-3 -pt-3 font-black text-2xl text-slate-500">Dashboard</h1>

        <input
          type="search"
          placeholder="Search for transactions"
          className="w-1/3 bg-slate-100 p-2 rounded-lg"
        />
        <div className="bg-slate-200 h-9 w-9 rounded-lg mr-4 font-black text-slate-600 flex justify-center items-center">
            {/* <FaBeer /> */}
            EA
          </div>
      </div>
      <div className="flex">
        <div className="w-1/4 h-screen">
          {/* Card Details */}
          <div className="bg-slate-700 rounded-lg h-52 text-white p-4 m-7 flex flex-col justify-between">
            <div>
              {" "}
              <small>CURRENT BALANCE</small>
              <h2 className="text-3xl font-black">GHC 45,505.00</h2>
            </div>
            <div>
              {" "}
              <small className="text-lg">**** **** **** 4593</small>
            </div>
            <div className="flex justify-between">
              <div>
                <small>CARD HOLDER</small>
                <h2 className="text-md font-bold">PHILOMENA POTINGE</h2>
              </div>
              <div>
                <small>EXP DATE</small>
                <h2 className="text-md font-bold">09/25</h2>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="p-8">
            <div>
              <h1 className="font-black text-slate-600">Recent Transactions</h1>
              <Transactions />
            </div>
          </div>
        </div>

        {/* Graphs section */}
        <div className=" w-3/4">
          <div>
            <div className=" p-5 border-2 m-8 border-slate-100 rounded-xl">
              <h1 className="font-black text-slate-600">Your Expenses</h1>
              <div className="flex flex-start">
                <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4 mr-12">
                  <h1 className="font-medium p-4 text-slate-600">
                    Food and Drink
                  </h1>
                </div>
                <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4 mr-12">
                  <h1 className="font-medium p-4 text-slate-600">
                    Miscellanous
                  </h1>
                </div>
                <div className="w-48 h-40 border-2 bg-slate-100 border-slate-100 rounded-xl mt-4">
                  <h1 className="font-medium p-4 text-slate-600">Savings</h1>
                </div>
              </div>
            </div>

            {/* Graph */}
            <div className=" p-5 border-2 m-8 border-slate-100 rounded-xl">
              <h1 className="font-black text-slate-600">Graph</h1>
              <div className="flex flex-start"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
