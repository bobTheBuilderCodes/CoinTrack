import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/Signup";
import ForgotPassword from "./views/auth/forgot-password";
import LandingPage from "./views/home/landingPage";
import RootLayout from "./views/dashboard";
import Dashboard from "./views/dashboard/Dashboard";
import { routes } from "./routes/route";

const AppRouter = () => {
  const {
    home,
    signin,
    signup,
    reset_password,
    forgot_password,
    dashboard,
    not_found,
  } = routes;
  return (
    <Router>
      <Routes>
        <Route path={home} element={<LandingPage />} />
        <Route path={signup} element={<SignUp />} />
        <Route path={signin} element={<Login />} />
        <Route path={forgot_password} element={<ForgotPassword />} />
        <Route path={reset_password} element={<h1>Reset Password</h1>} />
        <Route path={dashboard} element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path={not_found} element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
