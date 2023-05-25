import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <>
      <ReactPaginate
        className="pagination d-flex justify-content-between"
        pageClassName="page-item"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageLinkClassName="page-link text-dark"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link text-dark"
        nextLinkClassName="page-link text-dark"
        activeClassName="active bg-dark text-light"
        breakLabel="..."
        nextLabel=">"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={10}
        previousLabel="<"
      />
    </>
  );
};

export default Pagination;
