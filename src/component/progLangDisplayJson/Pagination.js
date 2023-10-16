import React, { useEffect, useState } from "react";

function Pagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const displayButton = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <button
          className={i+1 === currentPage ? "active" : ""}
          onClick={() => {
            setCurrentPage(i+1);
            onPageChange(i+1);
          }}
        >
          {i+1}
        </button>
      );
    }
    return pageNumbers;
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };
   useEffect(() => {
   onPageChange(currentPage);
   }, [currentPage]);


  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* <span>{displayButton(currentPage, totalPages)}</span> */}
      {/* <span>
        Page {currentPage} of {totalPages}
      </span> */}
      {displayButton()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next``
      </button>
    </div>
  );
}

export default Pagination;
