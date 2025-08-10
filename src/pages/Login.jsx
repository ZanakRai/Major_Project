import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 absolute left-1 top-0">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Or separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-400 font-semibold">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Continue with Google button */}
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
          onClick={() => {
            // यहाँ Google login handler राख्न सक्नुहुन्छ
            alert("Google Sign-In clicked");
          }}
        >
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.5 278.4c0-18.5-1.5-36.4-4.5-53.9H272v102h147.1c-6.4 34.6-26.1 63.9-55.9 83.7v69.6h90.5c53-48.9 83.8-120.9 83.8-201.4z"
              fill="#4285F4"
            />
            <path
              d="M272 544.3c73.4 0 135.2-24.4 180.3-66.3l-90.5-69.6c-25.1 16.9-57.3 27-89.8 27-68.8 0-127-46.5-147.9-108.8H31.8v68.6c45.2 89.2 137.7 148 240.2 148z"
              fill="#34A853"
            />
            <path
              d="M124.1 324.3c-10.6-31.4-10.6-65.4 0-96.8V159H31.8c-43.7 86.6-43.7 189.8 0 276.4l92.3-68.6z"
              fill="#FBBC05"
            />
            <path
              d="M272 107.7c37.8-.6 74.3 13 101.9 37.2l76.2-76.2C409.9 24.3 350.6 0 272 0 169.5 0 77 58.8 31.8 148.1l92.3 68.6C145 154.1 203.2 107.7 272 107.7z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    
  );
}
