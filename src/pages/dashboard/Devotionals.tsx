import { DownloadIcon, SearchIcon } from "../../assets/icons";
import DashboardLayout from "../../layouts/DashboardLayout";
import arrow from "../../assets/arrow-right.svg";
import filter from "../../assets/filter.svg";
import plus from "../../assets/plus.svg";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { BOOST_DATA as data } from "../../store/data";
import DevotionalModal from "../../components/devotionals/Modal";
import useStore from "../../store";
import DevotionalsTable from "../../components/devotionals/DevotionalTables";

function Devotionals() {
  const [boostData, setBoostData] = useState(data);
  const [search, setSearch] = useState("");

  const { setModal } = useStore();

  //pagination logic
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(boostData.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };
  const displayedData = boostData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <DashboardLayout>
      <div>
        <div className="p-4 md:p-8">
          <div className="flex gap-2 items-center">
            <h1 className="font-medium text-3xl">Devotionals</h1>
            <h6 className="bg-[#F5F6F7] py-0.5 px-2 font-medium text-xs rounded-full">
              Badge
            </h6>
          </div>
          <p className="text-[#667085] text-sm">
            Sed ut perspiciatis unde omnis iste natus
          </p>
        </div>

        <div className="px-4 md:px-8 py-4 flex flex-wrap lg:flex-nowrap justify-between gap-8 w-full items-center border border-l-0">
          <div
            className={`flex items-center w-1/2 grow lg:grow-0 gap-4 ${
              boostData.length === 0 ? "invisible" : "visible"
            }`}
          >
            <div className="border rounded-lg p-3 flex items-center w-full gap-2">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none bg-transparent placeholder-[#667085] text-[#667085] w-full"
              />
            </div>
            <button className="flex gap-2 items-center justify-center py-3 px-5 rounded-lg border font-semibold text-sm">
              <img src={filter} alt="filter" />
              Filters
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              disabled={boostData.length === 0}
              className="flex gap-2 items-center justify-center py-3 px-5 rounded-lg border font-medium text-sm disabled:text-[#D0D5DD] disabled:border-[#D0D5DD] disabled:cursor-not-allowed"
            >
              <DownloadIcon
                color={boostData.length === 0 ? "#D0D5DD" : "#000000"}
              />
              Export
            </button>
            <button
              onClick={() => setModal(<DevotionalModal />)}
              className="flex gap-1 items-center justify-center py-3 px-4 rounded-lg border bg-black text-white font-medium text-sm"
            >
              <img src={plus} alt="" />
              Create new devotional
            </button>
          </div>
        </div>

        <DevotionalsTable
          displayedData={displayedData.filter(
            (boost: any) =>
              boost.title.toLowerCase().includes(search.toLowerCase()) ||
              boost.uploadedBy.toLowerCase().includes(search.toLowerCase())
          )}
          data={boostData}
          setData={setBoostData}
        />

        <div
          className={`relative py-4 border-b mb-8 ${
            boostData.length === 0 ? "invisible" : "visible"
          }`}
        >
          <ReactPaginate
            previousLabel={
              <button className="flex gap-2 items-center justify-center font-medium text-sm">
                <img src={arrow} alt="arrow" className="rotate-180" />
                <span className="hidden md:block">Previous</span>
              </button>
            }
            nextLabel={
              <button className="flex gap-2 items-center justify-center font-medium text-sm">
                <span className="hidden md:block">Next</span>
                <img src={arrow} alt="arrow" />
              </button>
            }
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            previousClassName="block border border-primary rounded-lg py-2 px-3 cursor-pointer left-1 md:left-8 absolute"
            nextClassName="block border border-primary rounded-lg py-2 px-3 cursor-pointer right-1 md:right-8 absolute"
            pageClassName="block border bg-white text-[#667085] hover:bg-[#F5F6F7] hover:text-[#667085] border-primary rounded-lg px-3 py-1.5 cursor-pointer"
            containerClassName="flex justify-center items-center font-medium gap-5"
            activeClassName="text-black"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Devotionals;
