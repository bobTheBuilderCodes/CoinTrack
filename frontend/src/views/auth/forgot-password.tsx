import { Link } from "react-router-dom";
import logo from "../../resources/logo.png";

export default function ForgotPassword() {
  return (
    <div className="flex h-screen items-center flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:bg-white shadow-sm border-2 border-gray-100 w-[450px] py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-gray-900"
                />
              </div>
            </div>

           

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
              Send reset link
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           Already have an account?{" "}
            <Link
              to="/auth/signin"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
             Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
