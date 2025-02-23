import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [ShowPassword, SetShowPassword] = useState(false);
  const [data, setData] = useState({
    email : "",
    password : ""

  })
  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value,
        }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <section className="relative h-screen w-full flex flex-wrap items-center justify-center bg-white ">
      <div className="bg-slate-200 md-pt-20 p-6 rounded-lg shadow-lg w-full max-w-sm mt-30">
        <div className="flex justify-center items-center mb-6">
          <img src="icon.png" alt="Logo" className="h-14 w-16" />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold">Sign In</h1>
          <Link 
          to={'/signup'} 
          className="text-red-600 text-sm underline">
            Create an account
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>
              Email:
            </label>
            <input
              type="email"
              name='email'
              value = {data.email}
              onChange={handleOnChange}
              className="w-full rounded-lg p-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>
              Password:
            </label>
            <div className="flex mb-4 bg-white items-center">
              <input
                type={ShowPassword ? "text": "password"}
                name='password'
                value = {data.password}
                onChange={handleOnChange}
                className=" w-full rounded-lg p-2 outline-none"
                placeholder="Enter your password"
              />
                <div className="cursor-pointer p-2" onClick={()=>SetShowPassword((prev)=>!prev)}>
                  <span>
                    {
                      ShowPassword ? (
                      <FaEyeSlash />
                      )
                      :
                      (
                      <FaEye />
                      )
                    }  
                  </span>
                </div>
                </div>
          </div>
          <button
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-red-600 text-sm underline">
            Forgot password?
          </a>
        </div>
        <div className="my-4 text-center text-gray-600">OR</div>
        <button className="w-full border border-gray-400 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100">
          <FcGoogle className="h-5 w-5 mr-2"/>
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
