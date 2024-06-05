import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/register");
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#FCFCFC]">
      <h3 className="text-2xl">Hello, World!</h3>
    </div>
  );
}

export default App;
