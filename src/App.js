import { useState } from "react";
import "./App.css";
import mobileBg from "./images/bg-intro-mobile.png";


function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
})

function handleChange(event) {
  const {name, value, checked, type} = event.target
  setFormData((prevFormData) => {
      return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value 
      }
  })
}

  return (
    <div className="bg-[url('./images/bg-intro-mobile.png')] flex flex-col sm:flex-row  grow justify-around items-center p-5 bg-red-400 text-white sm:p-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl p-8 text-center font-bold sm:text-5xl sm:text-left">
          Learn to code by watching others
        </p>
        <p className="text-center font-bold sm:text-left sm:px-8">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="mt-10 bg-purple-700 py-6 rounded-2xl px-12 shadow-lg shadow-purple-400 text-center"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button>
        <form action="" className="mt-10 flex flex-col items-center gap-5 bg-white p-5 rounded-xl">
          <input
            type="text"
            placeholder="First Name"
            className="border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
          <input
            type="email"
            placeholder="Email address"
            className="border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        
          <button className="bg-green-400 p-5 rounded-lg font-bold w-[95%] shadow-lg shadow-green-600">CLAIM YOUR FREE TRIAL</button>
          <p className="text-gray-400 text-center p-2">By clicking the button, you are agreeing to our <span className="font-bold text-red-500">Terms and Services</span></p>
        </form>
      </div>
    </div>
  );
}

export default App;
