import eye from "../../assets/eye.svg";
import logo from "../../assets/logo.svg";
import lock from "../../assets/lock.svg";
import mail from "../../assets/email.svg";
import profile from "../../assets/profile+.svg";
import user from "../../assets/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const regex = /^(?=.*[A-Z])(?=.*\d)/;

  const handleChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      return toast.error("All fields are required");
    }
    if (!userDetails.email.includes("@")) {
      return toast.error("Invalid email address");
    }
    if (userDetails.password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }
    if (!userDetails.password.match(regex)) {
      return toast.error(
        "Password must contain at least 1 uppercase letter and 1 number"
      );
    }
    toast.success("Registration successful");
    setTimeout(() => {
      navigate("/verify", { state: { email: userDetails.email } });
    }, 2000);
  };

  return (
    <div className="bg-[#FCFCFC]">
      <Toaster />
      <div className="max-w-screen-2xl mx-auto min-h-screen flex flex-col gap-12 items-center justify-between p-2 md:p-4">
        <div className="w-full flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-sm text-black">
            Already have an account?{" "}
            <a href="/login" className="underline font-medium">
              Login
            </a>
          </p>
        </div>

        <div className="bg-white shadow-[#585C5F1A] shadow-sm rounded-3xl max-w-md w-full py-6 px-4 md:px-8">
          <img src={profile} alt="profile" className="mx-auto" />
          <h4 className="font-medium text-black text-2xl text-center">
            Create a new account
          </h4>
          <p className="text-[#52506D] text-center">
            Enter your details to register.
          </p>
          <hr className="my-3" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label
                htmlFor="name"
                className="text-[#344054] font-medium text-sm"
              >
                Full name
              </label>
              <div className="flex items-center gap-2 mt-1 p-2 border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-lg">
                <img src={user} alt="" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Olivia James"
                  onChange={handleChange}
                  className="w-full focus:outline-none h-8 bg-transparent text-[#101828] placeholder:text-[#667085]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#344054] font-medium text-sm"
              >
                Email
              </label>
              <div className="flex items-center gap-2 mt-1 p-2 border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-lg">
                <img src={mail} alt="" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="olivia@untitledui.com"
                  onChange={handleChange}
                  className="w-full focus:outline-none h-8 bg-transparent text-[#101828] placeholder:text-[#667085]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-[#344054] font-medium text-sm"
              >
                Password
              </label>
              <div className="flex items-center gap-2 my-1 p-2 border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-lg">
                <img src={lock} alt="" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="• • • • • • • • • •"
                  onChange={handleChange}
                  className="w-full focus:outline-none h-8 bg-transparent text-[#101828] placeholder:text-[#667085]"
                />
                <img
                  src={eye}
                  alt=""
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <p className="text-xs text-[#667085]">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-black font-medium text-sm text-white rounded-lg py-3 mt-5"
            >
              Register
            </button>
          </form>
        </div>

        <p className="text-sm text-black">© 2024 T30 Devotional</p>
      </div>
    </div>
  );
}

export default Register;
