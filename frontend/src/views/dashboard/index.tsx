import { Outlet } from "react-router-dom"
import DashboardNav from "../../components/DashboardNav"


const RootLayout = () => {
  return (
    <div>
       <DashboardNav />
        <Outlet />
    </div>
  )
}

export default RootLayout