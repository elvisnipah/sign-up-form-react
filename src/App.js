import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    submitted: false,
  });

  const firstNameValidation = (firstName) => {
    if (!firstName && formData.submitted) {
      return "First Name is required";
    }
    return "";
  };

  function lastNameValidation(lastName) {
    if (!lastName && formData.submitted) {
      return "Last Name is required";
    }
    return "";
  }

  function emailValidation(email) {
    if (!email && formData.submitted) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email) && formData.submitted) {
      return "Incorrect email format";
    }
  }

  function passwordValidation(password) {
    if (!password && formData.submitted) {
      return "Password is required";
    }
    return "";
  }

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        //if the type of input is a checkbox, change the checked field. else change the value field
        [name]: type === "checkbox" ? checked : value,
        submitted: false,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstNameValidation(formData.firstName));
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        submitted: true,
      };
    });
  }

  return (
    <div
      className={`bg-[url('../public/images/bg-intro-mobile.png')] sm:bg-[url('../public/images/bg-intro-desktop.png')] flex flex-col  grow justify-around items-center p-5 bg-red-400 text-white sm:p-10 sm:flex-row sm:justify-center sm:gap-8`}
    >
      <div className="flex flex-col items-center justify-center sm:w-1/3">
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
        <button className="mt-10 bg-purple-700 py-6 rounded-2xl px-12 shadow-[0px_7px_0px_0px_rgba(0,0,0,0.2)] text-center cursor-default w-full ">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </button>
        <form
          action=""
          className="mt-10 flex flex-col items-center gap-5 justify-center bg-white p-5 rounded-xl shadow-[0px_9px_0px_0px_rgba(0,0,0,0.2)]"
          noValidate
          onSubmit={handleSubmit}
        >
          <span className="w-full flex flex-col items-center ">
            <input
              id="first_name"
              required
              type="text"
              placeholder="First Name"
              className={
                lastNameValidation(formData.firstName) && formData.submitted
                  ? "border-red-500 border-solid border-[1px] text-black p-3 rounded-lg w-[95%] bg-[url('../public/images/icon-error.svg')] bg-no-repeat bg-[right_0.5rem_top_0.8rem]"
                  : "border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
              }
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />

            <p
              className="italic 
             self-end pr-4 text-xs text-red-500"
            >
              {firstNameValidation(formData.firstName)}
            </p>
          </span>

          <span className="w-full flex flex-col items-center">
            <input
              required
              type="text"
              placeholder="Last Name"
              className={
                lastNameValidation(formData.lastName) && formData.submitted
                  ? "border-red-500 border-solid border-[1px] text-black p-3 rounded-lg w-[95%] bg-[url('../public/images/icon-error.svg')] bg-no-repeat bg-[right_0.5rem_top_0.8rem]"
                  : "border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
              }
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />

            <p className="italic self-end pr-4 text-xs text-red-500">
              {lastNameValidation(formData.lastName)}
            </p>
          </span>

          <span className="w-full flex flex-col items-center">
            <input
              required
              type="email"
              placeholder="Email address"
              className={
                lastNameValidation(formData.email) && formData.submitted
                  ? "border-red-500 border-solid border-[1px] text-black p-3 rounded-lg w-[95%] bg-[url('../public/images/icon-error.svg')] bg-no-repeat bg-[right_0.5rem_top_0.8rem]"
                  : "border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
              }
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <p className="italic self-end pr-4 text-xs text-red-500">
              {emailValidation(formData.email)}
            </p>
          </span>

          <span className="w-full flex flex-col items-center">
            <input
              required
              type="password"
              placeholder="Password"
              className={
                lastNameValidation(formData.password) && formData.submitted
                  ? "border-red-500 border-solid border-[1px] text-black p-3 rounded-lg w-[95%] bg-[url('../public/images/icon-error.svg')] bg-no-repeat bg-[right_0.5rem_top_0.8rem]"
                  : "border-gray-400 border-solid border-[1px] text-black p-3 rounded-lg w-[95%]"
              }
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            <p className="italic self-end pr-4 text-xs text-red-500">
              {passwordValidation(formData.password)}
            </p>
          </span>

          <button className="bg-green-400 p-5 rounded-lg font-bold w-[95%] shadow-[0px_5px_0px_0px_rgba(0,156,0,0.8)]">
            CLAIM YOUR FREE TRIAL
          </button>

          <p className="text-gray-400 text-center p-2">
            By clicking the button, you are agreeing to our{" "}
            <span className="font-bold text-red-500">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
