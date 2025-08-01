import React from "react";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email: email,
        password: password,
      });

      const jwt = response.data.token;

      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err) {
      alert("Error while signing in");
    }
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-amber-200 to-yellow-400 flex justify-center">
      <div className="h-[520px] w-[380px] bg-white m-10 p-10 flex-col items-center justify-center rounded-2xl">
        <div className="font-semibold text-4xl text-center">Signin Form</div>
        <div className="w-full flex-col mt-4 items-center">
          <div className="p-4 mt-2">
            <div>Email</div>
            <input
              className="border-1 h-10 w-full font-medium rounded-lg p-2 mt-2 border-gray-500 hover:border-blue-400 focus:text-[#1a75ff]"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-4 mt-2">
            <div>Password</div>
            <input
              className="border-1 h-10 w-full font-medium rounded-lg p-2 mt-2 border-gray-500 hover:border-blue-400 focus:text-[#1a75ff]"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-white-400 h-12 w-60 rounded-3xl text-black flex justify-center items-center gap-2 font-bold hover:drop-shadow-3xl hover:bg-yellow-400 cursor-pointer mt-4"
            onClick={() => handleSubmit(email, password)}
          >
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;

{
  /* // <div className="h-full w-full bg-gradient-to-r from-amber-200 to-yellow-400 flex justify-center">
//   <div className="p-5 bg-white rounded-2xl m-5 shadow-2xl w-[480px]">
//     <div className="flex-col items-center text-center">
//       <div className="font-bold text-2xl">Signin Form</div>
//       <div>
//         <div className="flex gap-20 justify-center items-center m-2 border-1 rounded-lg h-10 w-30">
//           <div>Login</div>
//           <div>Signup</div>
//         </div>
//         <div>
//           <div>
//             <input type="text" placeholder="Name" />
//           </div>
//           <div>
//             <input type="email" placeholder="Email" />
//           </div>
//           <div>
//             <input type="password" placeholder="Password" />
//           </div>
//           <div></div>
//         </div>
//         <div>signup btn</div>
//       </div>
//     </div>
//   </div>
// </div> */
}
