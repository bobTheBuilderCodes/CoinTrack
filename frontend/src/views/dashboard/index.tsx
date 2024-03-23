import { Outlet } from "react-router-dom"
import DashboardNav from "../../components/DashboardNav"


const RootLayout = () => {
  return (
    <div className="h-[92vh]">
       <DashboardNav />
        <Outlet />
    </div>
  )
}

export default RootLayout