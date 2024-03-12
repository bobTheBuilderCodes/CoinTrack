import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/auth/Login';
import SignUp from './views/auth/Signup';
import ForgotPassword from './views/auth/forgot-password';



const AppRouter = () => {
 return (
    <Router>
      <Routes>
          <Route path="/auth/signup"element={<SignUp />} />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<h1>Reset Password</h1>} />
        <Route path="/" element={<h1>Hello</h1>}>
          <Route index element={<h1>Hoome page</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
 );
};

export default AppRouter;
