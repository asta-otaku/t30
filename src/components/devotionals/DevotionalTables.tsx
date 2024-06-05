import candice from "../../assets/candice.svg";
import cloud from "../../assets/download-cloud.svg";
import copy from "../../assets/copy.svg";
import edit from "../../assets/edit-2.svg";
import emptydevotional from "../../assets/emptydevotional.svg";
import plus from "../../assets/plus.svg";
import trash from "../../assets/trash-2.svg";

function DevotionalsTable({
  data,
  displayedData,
  setData,
}: {
  data: any;
  displayedData: any;
  setData: any;
}) {
  return (
    <div>
      {data.length === 0 ? (
        <div className="flex w-full min-h-[300px] items-center justify-center">
          <div className="flex flex-col items-center max-w-sm w-full">
            <img src={emptydevotional} />
            <h1 className="font-medium text-[#101828] text-lg">
              Empty state title
            </h1>
            <p className="text-[#667085] text-sm w-[280px] text-center mb-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus.
            </p>
            <button className="flex gap-1 items-center justify-center py-3 px-4 rounded-lg border bg-black text-white font-medium text-sm">
              <img src={plus} alt="" />
              Create new devotional
            </button>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-xs border-collapse">
            <thead className="text-black bg-[#F9FAFB] font-semibold border-0 border-b">
              <tr className="text-[#667085]">
                <th scope="col" className="p-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="quizzes"
                      className="accent-black"
                    />
                    <label htmlFor="quizzes" className="ml-2">
                      Devotional title
                    </label>
                  </div>
                </th>
                <th scope="col" className="p-4 whitespace-nowrap">
                  Uploaded by
                </th>
                <th scope="col" className="p-4 whitespace-nowrap">
                  Status
                </th>
                <th scope="col" className="p-4 whitespace-nowrap">
                  Upload date
                </th>
                <th scope="col" className="p-4 whitespace-nowrap">
                  Last updated
                </th>
                <th scope="col" className="p-4 whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody className="bg-white font-medium">
              {displayedData.map((boost: any) => (
                <tr key={boost.id} className="text-[#667085] border-b">
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`boost-${boost.id}`}
                        className="accent-black"
                      />
                      <label htmlFor={`boost-${boost.id}`} className="ml-2">
                        {boost.title}
                      </label>
                    </div>
                  </td>
                  <td className="whitespace-nowrap p-4 flex items-center">
                    <div className="flex gap-2 items-center">
                      <img src={candice} alt="candice" />
                      <div>
                        <h4 className="text-sm text-[#101828]">
                          {boost.uploadedBy}
                        </h4>
                        <h4 className="text-sm max-w-[200px] overflow-hidden truncate">
                          candice@untitledui.com
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div
                      className={`py-1 px-2 w-fit rounded-full text-xs flex items-center gap-2 ${
                        boost.status === "Live"
                          ? "bg-[#E6F3EC] text-[#0E9F6E]"
                          : "bg-[#F2F4F7] text-[#344054]"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          boost.status === "Live"
                            ? "bg-[#0E9F6E]"
                            : "bg-[#344054]"
                        }`}
                      />
                      <span>{boost.status}</span>
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">{boost.uploadDate}</td>
                  <td className="p-4 whitespace-nowrap">{boost.lastUpdated}</td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex md:gap-4 items-center w-full">
                      <button>
                        <img src={copy} alt="copy" />
                      </button>
                      <button>
                        <img src={cloud} alt="cloud" />
                      </button>
                      <button
                        onClick={() => {
                          setData(
                            data.filter((item: any) => item.id !== boost.id)
                          );
                        }}
                      >
                        <img src={trash} alt="trash" />
                      </button>
                      <button>
                        <img src={edit} alt="edit" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DevotionalsTable;
