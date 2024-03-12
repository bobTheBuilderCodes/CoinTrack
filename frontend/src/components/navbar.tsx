
import { Link } from 'react-router-dom';
import logo from '../resources/logo.png';

const Navbar = () => {

 

  return (
    <nav>
      <div className='nav-center flex justify-between items-end px-16'>
        <div className='nav-header'>
            <Link to={'/'}>
          <img src={logo} width={200} className='logo' alt='logo' />
            </Link>
        </div>
        
        <div className="mt-9 flex items-end w-[220px] ">
        <button
          type="submit"
          className=" mx-4 w-full justify-center rounded-md bg-black  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
         <Link to={'/auth/signin'}>Sign in</Link>
        </button>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-white border-2 borfer-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
        <Link to="/auth/signup"> Sign up</Link>
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
