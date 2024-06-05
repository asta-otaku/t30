import logo from "../../assets/logo.svg";
import profile from "../../assets/profilem.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChangeEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || "olivia@t30.com";
  const [otp, setOTP] = useState<string[]>(Array(4).fill(""));
  const inputs = Array(4)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null));

  const handleChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus on next input or previous if value is deleted
    if (value && index < 3) {
      inputs[index + 1].current?.focus();
    } else if (!value && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text/plain").trim().slice(0, 4);
    const newOTP = Array.from(pastedText.padEnd(4, " ").slice(0, 4));
    setOTP(newOTP);
    newOTP.forEach((char, index) => {
      if (char !== " ") {
        inputs[index].current!.value = char;
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (otp.includes("")) {
      return toast.error("Please enter a valid OTP");
    }
    toast.success("Email verified successfully!");
    setTimeout(() => {
      navigate("/login");
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
            Enter Verification Code
          </h4>
          <p className="text-[#52506D] text-center">
            We've sent a code to {email}
          </p>
          <hr className="my-3" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-center justify-between p-2 w-full">
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={inputs[index]}
                  className="w-16 h-12 text-center placeholder:text-black text-black bg-transparent outline-none rounded-md p-1 border border-[#667085] text-lg font-semibold"
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, e.target.value)
                  }
                  onPaste={handlePaste}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-black font-medium text-sm text-white rounded-lg py-3"
            >
              Submit code
            </button>
            <div className="text-center space-y-1">
              <h5 className="text-[#52506D] text-sm">
                Experiencing issues receiving the code?
              </h5>
              <p className="text-sm font-medium text-black cursor-pointer underline underline-offset-1">
                Resend code
              </p>
            </div>
          </form>
        </div>

        <p className="text-sm text-black">© 2024 T30 Devotional</p>
      </div>
    </div>
  );
}

export default Verify;
