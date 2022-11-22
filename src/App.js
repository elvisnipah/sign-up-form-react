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
    <div className="bg-[url('./images/bg-intro-mobile.png')] flex flex-col grow justify-start items-start p-5 bg-red-400 text-white">
      <p className="text-2xl p-9 text-center font-bold">
        Learn to code by watching others
      </p>
      <p className="text-center font-bold">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <button className="mt-10 bg-purple-700 py-6 rounded-2xl px-12"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button> 
      <form action="">
        <input 
          type="text" 
          placeholder="First Name"
          className=""
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input 
          type="text" 
          placeholder="Last Name"
          className=""
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input 
          type="email" 
          placeholder="Email address"
          className=""
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="password" 
          placeholder="Password"
          className=""
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        
        <button>Claim your free trial</button>
        By clicking the button, you are agreeing to our Terms and Services
      </form>
    </div>
  );
}

export default App;
