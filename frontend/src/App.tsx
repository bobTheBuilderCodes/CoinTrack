import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/auth/Login';
import SignUp from './views/auth/Signup';
import ForgotPassword from './views/auth/forgot-password';
import LandingPage from './views/home/landingPage';
import RootLayout from './views/dashboard';
import Dashboard from './views/dashboard/dashboard';



const AppRouter = () => {
 return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/signup"element={<SignUp />} />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<h1>Reset Password</h1>} />
        <Route path="/dashboard" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
 );
};

export default AppRouter;
