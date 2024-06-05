import React, { useEffect, useState } from "react";
import cloudboost from "../../assets/cloudboost.svg";
import dots from "../../assets/dots.svg";

type BoostItemType = {
  id: number;
  image: string;
  description: string;
};

type BoostItemProps = {
  boost: BoostItemType[];
  setBoost: React.Dispatch<React.SetStateAction<BoostItemType[]>>;
  index: number;
};

function BoostItem({ boost, setBoost, index }: BoostItemProps) {
  const [upload, setUpload] = useState<{
    image: string;
    description: string;
  }>({
    image: boost[index].image || "",
    description: boost[index].description,
  });

  useEffect(() => {
    setBoost((prevBoost) =>
      prevBoost.map((item, idx) =>
        idx === index ? { ...item, ...upload } : item
      )
    );
  }, [upload]);

  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setUpload((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUpload((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      (fileInput as HTMLInputElement).click();
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full rounded-xl border items-center">
        <div className="w-12 flex items-center justify-center">
          <img src={dots} alt="dots" />
        </div>
        <div className="border-l w-full">
          <div
            className={`border rounded-xl border-dashed cursor-pointer max-w-[97%] mx-auto w-full m-2 mb-4 flex flex-col items-center justify-center h-40 p-0.5 ${
              dragOver ? "bg-gray-200" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <input
              id={`fileInput-${index}`}
              type="file"
              accept=".svg, .png, .jpg, .gif"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {upload.image ? (
              <img
                src={upload.image}
                alt="Uploaded"
                className="max-h-full max-w-full w-full rounded-xl"
              />
            ) : (
              <>
                <img src={cloudboost} alt="cloudboost" />
                <h4 className="text-sm text-[#475367] text-center">
                  <span className="text-black font-medium">
                    Click to upload
                  </span>{" "}
                  or drag and drop media
                </h4>
                <p className="text-xs text-[#98A2B3] text-center">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </>
            )}
          </div>

          <div className="border-t p-4">
            <textarea
              rows={3}
              value={upload.description}
              onChange={(e) =>
                setUpload((prev) => ({ ...prev, description: e.target.value }))
              }
              className="outline-none bg-transparent w-full resize-none"
              placeholder="Enter description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostItem;
