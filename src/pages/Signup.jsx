import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [ShowPassword, SetShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        email : "",
        password : "",
        name : "",
        confirmPassword : ""
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
    <section className="relative h-screen w-full flex flex-wrap items-center justify-center bg-[url('./images/image_5.png')] bg-cover bg-center ">
      <div className="bg-slate-200 md-pt-20 p-10 rounded-lg shadow-lg w-full max-w-sm mt-20">
        <div className="flex justify-center items-center mb-6">
          <img src="icon.png" alt="Logo" className="h-14 w-16" />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold">Sign Up</h1>
          <Link 
          to={'/login'} 
          className="text-red-600 text-sm underline">
            Have an account
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label>
              User Name:
            </label>
            <input
              type="text"
              name='name'
              value = {data.name}
              onChange={handleOnChange}
              required
              className="w-full rounded-lg p-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label>
              Email:
            </label>
            <input
              type="email"
              name='email'
              value = {data.email}
              onChange={handleOnChange}
              required
              className="w-full rounded-lg p-2 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label>
              Password:
            </label>
            <div className="flex bg-white ">
            <input
              type={ShowPassword ? "text" : "password"}
              name='password'
              value = {data.password}
              onChange={handleOnChange}
              required
              className="w-full rounded-lg p-2 bg-transparent outline-none"
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

          <div className="mb-4">
            <label>
              Confirm Password:
            </label>
            <div className="flex bg-white">
            <input
              type={showconfirmPassword ? "text" : "password"}
              name='confirmPassword'
              value = {data.confirmPassword}
              onChange={handleOnChange}
              required
              className="w-full rounded-lg p-2 outline-none bg-transparent"
              placeholder="Confirm your password"
            />
            <div className="cursor-pointer p-2" onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                <span>
                    {
                        showconfirmPassword ? (
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
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
          

        </form>
        <div className="my-4 text-center text-gray-600">OR</div>
        <button className="w-full border border-gray-400 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100">
          <FcGoogle className="h-5 w-5 mr-2"/>
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default Signup;
