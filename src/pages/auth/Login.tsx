import eye from "../../assets/eye.svg";
import logo from "../../assets/logo.svg";
import lock from "../../assets/lock.svg";
import mail from "../../assets/email.svg";
import profile from "../../assets/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      return toast.error("All fields are required");
    }
    if (!userDetails.email.includes("@")) {
      return toast.error("Invalid email address");
    }
    if (userDetails.password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }
    toast.success("Login successful");
    setTimeout(() => {
      navigate("/dashboard");
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
            Don't have an account?{" "}
            <a href="#" className="underline font-medium">
              Contact Admin
            </a>
          </p>
        </div>

        <div className="bg-white shadow-[#585C5F1A] shadow-sm rounded-3xl max-w-md w-full py-6 px-4 md:px-8">
          <img src={profile} alt="profile" className="mx-auto" />
          <h4 className="font-medium text-black text-2xl text-center">
            Login to your account
          </h4>
          <p className="text-[#52506D] text-center">
            Enter your details to login.
          </p>
          <hr className="my-3" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
              <div className="flex items-center gap-2 mt-1 p-2 border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-lg">
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
            </div>

            <div className="w-full flex justify-between items-center my-3">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="accent-black" />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-[#344054]"
                >
                  Keep me logged in
                </label>
              </div>
              <a
                href="#"
                className="text-sm underline underline-offset-4 text-[#667085] font-medium"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black font-medium text-sm text-white rounded-lg py-3"
            >
              Login
            </button>
          </form>
        </div>

        <p className="text-sm text-black">© 2024 T30 Devotional</p>
      </div>
    </div>
  );
}

export default Login;
