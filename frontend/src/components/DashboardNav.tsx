import GreetUser from "../utils/greetUser";


const DashboardNav = () => {

  const user =   <GreetUser username={"loggedInUser"} />
  console.log("User", user.props.username)
  return (
    <div className=" h-[8vh] bg-white border-2 border-slate-100 py-3 flex justify-between px-6 sticky top-0 z-10">
    <GreetUser username={"Robert"} />

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
