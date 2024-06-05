import { useState } from "react";
import uploadboost from "../../assets/uploadboost.svg";
import plus from "../../assets/plus.svg";
import BoostItem from "./BoostItem";

type BoostItemType = {
  id: number;
  image: string;
  description: string;
};

function BoostModal() {
  const [boost, setBoost] = useState<BoostItemType[]>([
    {
      id: 1,
      image: "",
      description: "",
    },
  ]);

  const handleAddBoost = () => {
    setBoost((prevBoost) => [
      ...prevBoost,
      {
        id: prevBoost.length + 1,
        image: "",
        description: "",
      },
    ]);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="z-[200] max-w-[90vw] md:max-w-7xl max-h-[80vh] w-full overflow-auto bg-white relative rounded-xl"
    >
      <div className="flex justify-between flex-wrap gap-4 items-center px-4 md:px-12 border-b py-4">
        <div className="flex gap-2 items-center">
          <h1 className="font-medium text-lg text-[#101828]">T30 Boost</h1>
          <h6 className="bg-[#F5F6F7] py-0.5 px-2 font-medium text-xs rounded-full">
            Auto-saved 1 minute ago
          </h6>
        </div>
        <div className="flex gap-2 items-center">
          <button className="border rounded-lg px-3 py-2 text-[#344054] font-medium text-xs">
            Save
          </button>
          <button
            onClick={() => console.log(boost)}
            className="border rounded-lg px-3 py-2 font-medium text-xs flex items-center gap-1 bg-black text-white"
          >
            <img src={plus} alt="plus" />
            Upload
          </button>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto w-full flex flex-col items-center gap-8 py-8">
        {boost.map((item, idx) => (
          <BoostItem
            boost={boost}
            setBoost={setBoost}
            key={item.id}
            index={idx}
          />
        ))}
        <button
          onClick={handleAddBoost}
          className="w-full flex items-center justify-center border border-dashed rounded-xl p-5 mt-8"
        >
          <img src={uploadboost} alt="" />
        </button>
      </div>
    </div>
  );
}

export default BoostModal;
