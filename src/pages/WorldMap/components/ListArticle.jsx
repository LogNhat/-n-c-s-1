import { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ListView from "../json/listviews.json";

function ListArticle({ visible }) {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [visible]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalItems = ListView.length;
  const totalPages =
    itemsPerPage === "All" ? 1 : Math.ceil(totalItems / itemsPerPage);

  const currentItems =
    itemsPerPage === "All"
      ? ListView
      : ListView.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div
      className={`w-full absolute transition-all duration-500 ease-linear
        ${visible ? "top-[20%]" : "top-[100%]"}
        z-50
      `}
    >
      <div className="w-2/3 h-[90%] m-auto relative flex flex-col bg-white p-10 rounded-md shadow-2xl">
        <div className="h-full flex items-center justify-between mt-12 mb-4">
          <select
            className="border border-gray-300 rounded-md p-1"
            value={itemsPerPage}
            onChange={(e) =>
              setItemsPerPage(
                e.target.value === "All" ? "All" : parseInt(e.target.value)
              )
            }
          >
            <option value={5}>5</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value="All">Tất cả</option>
          </select>
        </div>

        <div className="w-full overflow-y-auto h-[50vh]">
          {currentItems.map((list, index) => (
            <div
              key={index}
              className="w-full border-b border-gray-200 mb-5 pb-2"
            >
              <div className="text-xl font-medium text-blue-500">
                {list.title}
              </div>
              <div className="text-lg font-thin">{list.date}</div>
              <div className="text-md font-normal">{list.aside_content}</div>
              <div className="text-md font-normal">{list.article}</div>
            </div>
          ))}
        </div>

        {itemsPerPage !== "All" && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 bg-blue-200 rounded hover:bg-blue-300 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Trang trước
            </button>

            <button
              onClick={() => handlePageChange(1)}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              1
            </button>

            {currentPage > 3 && <span className="px-2">...</span>}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page !== 1 &&
                page !== totalPages &&
                Math.abs(currentPage - page) <= 1
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                );
              }
              return null;
            })}

            {currentPage < totalPages - 2 && <span className="px-2">...</span>}

            {totalPages > 1 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 bg-blue-200 rounded hover:bg-blue-300 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Trang sau
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListArticle;
