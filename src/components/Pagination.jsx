import { GrNext, GrPrevious } from "react-icons/gr";
import { PAGESIZE } from "../helpers/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ total }) => {
  // Calculate total pages based on total items and page size
  const possiblePages = Math.ceil(total / PAGESIZE);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get initial page from url or default to page 1
  const page = searchParams.get("page") ?? 1;
  const [currentPage, setCurrentPage] = useState(+page);

  // Keeping page in sync with url and pagination state
  useEffect(() => {
    if (currentPage === 1) {
      searchParams.delete("page");
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams, searchParams]);

  function handleNext() {
    if (currentPage >= possiblePages) return;
    setCurrentPage((currP) => currP + 1);
  }

  function handlePrevious() {
    if (currentPage <= 1) return;
    setCurrentPage((currP) => currP - 1);
  }

  return (
    <div className="flex items-center justify-center gap-4 p-4 md:p-3">
      <button
        className="disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200 border border-gray-200 h-[30px] w-[30px] flex items-center justify-center rounded  bg-[#206862] text-white hover:bg-[#174d43] hover:cursor-pointer dark:border-[#3A3A55]"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        <GrPrevious />
      </button>
      <p className="dark:text-white">
        page {currentPage} of {possiblePages}
      </p>
      <button
        className="disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200 border border-gray-200 h-[30px] w-[30px] flex items-center justify-center rounded  bg-[#206862] text-white hover:bg-[#174d43] hover:cursor-pointer dark:border-[#3A3A55]"
        disabled={currentPage === possiblePages}
        onClick={handleNext}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
