import DashboardLayout from "../../layouts/DashboardLayout";
import candice from "../../assets/candice.svg";
import morning from "../../assets/morning.png";
import night from "../../assets/night.png";
import { DAILY_CHECKLIST as data } from "../../store/data";

import { Calendar } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";

function Dashboard() {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const [dailyChecklist, setDailyChecklist] = useState<
    {
      name: string;
      status: string;
    }[]
  >(data);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-4 md:m-12">
        <div className="h-[400px] border rounded-lg p-3 bg-white">
          <div
            style={{
              // backgroundImage should be morning or night based on the time
              backgroundImage: `url(${
                new Date().getHours() < 18 ? morning : night
              })`,
            }}
            className="bg-cover bg-no-repeat bg-center h-full rounded-lg p-4 flex flex-col justify-between"
          >
            <h1 className="text-4xl text-white font-medium text-right">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h1>
            <h4 className="text-4xl text-white font-medium">
              Good{" "}
              {new Date().getHours() < 12
                ? "morning"
                : new Date().getHours() < 16
                ? "afternoon"
                : "evening"}
              <br />
              Olivia
            </h4>
          </div>
        </div>

        <div className="h-[400px] border rounded-lg p-3 bg-white">
          <div className="w-full h-full">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>

        <div className="max-h-[300px] border rounded-lg bg-white overflow-y-auto no-scrollbar">
          <h3 className="font-medium text-lg p-3">Daily Checklist</h3>
          <hr className="w-full" />
          {dailyChecklist.length > 0 ? (
            dailyChecklist.map((item, index) => (
              <div
                key={index}
                className="p-3 grid grid-cols-3 border-0 border-b last:border-b-0"
              >
                <div className="flex items-center">
                  <h3 className="text-sm">{item.name}</h3>
                </div>
                <div
                  className={`flex items-center ${
                    item.status === "Done" ? "col-span-2 justify-end" : ""
                  }`}
                >
                  <span
                    style={{
                      color: item.status === "Done" ? "#027A48" : "#344054",
                      backgroundColor:
                        item.status === "Done" ? "#ECFDF3" : "#F2F4F7",
                    }}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {item.status}
                  </span>
                </div>
                <div
                  style={{
                    display: item.status === "Done" ? "none" : "flex",
                  }}
                  className="flex items-center justify-end"
                >
                  <button
                    onClick={() => {
                      const newDailyChecklist = dailyChecklist.map(
                        (item, i) => {
                          if (i === index) {
                            return {
                              ...item,
                              status: "Done",
                            };
                          }
                          return item;
                        }
                      );
                      setDailyChecklist(newDailyChecklist);
                    }}
                    className="font-semibold text-sm text-[#344054] border-[#D0D5DD] border p-1.5 rounded-lg"
                  >
                    Mark as done
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[#667085] text-2xl text-center">
                No daily checklist available
              </p>
            </div>
          )}
        </div>

        <div className="max-h-[300px] border rounded-lg bg-white overflow-y-auto no-scrollbar">
          <h3 className="font-medium text-lg p-3">Activity</h3>
          <hr className="w-full" />
          <table className="min-w-full text-left text-xs border-collapse">
            <thead className="text-black bg-[#F9FAFB] font-semibold border-0 border-b">
              <tr className="grid grid-cols-8 text-[#667085]">
                <th scope="col" className="p-4 whitespace-nowrap col-span-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="activities"
                      className="accent-black"
                    />
                    <label htmlFor="activities" className="ml-2">
                      Activity
                    </label>
                  </div>
                </th>
                <th scope="col" className="p-4 whitespace-nowrap col-span-4">
                  User
                </th>
                <th scope="col" className="p-4 whitespace-nowrap col-span-2">
                  Last updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white font-medium">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="grid grid-cols-8 p-3 text-[#667085] border-0 border-b last:border-b-0"
                  >
                    <td className="whitespace-nowrap col-span-2 flex items-center">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`activity-${index}`}
                          className="accent-black"
                        />
                        <label htmlFor={`activity-${index}`} className="ml-2">
                          Activity {index + 1}
                        </label>
                      </div>
                    </td>
                    <td className="whitespace-nowrap col-span-4 flex items-center">
                      <div className="flex gap-2 items-center">
                        <img src={candice} alt="candice" />
                        <div>
                          <h4 className="text-sm text-[#101828]">Candice Wu</h4>
                          <h4 className="text-sm max-w-[200px] overflow-hidden truncate">
                            candice@untitledui.com
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap col-span-2 flex items-center">
                      Feb 5, 2024
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
