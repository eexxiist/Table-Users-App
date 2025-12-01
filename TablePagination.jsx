import React from "react";
import "./TablePagination.css";

const TablePagination = ({
    currentVisibleUser,
    setCurrentVisibleUser,
    currentPage,
    setCurrentPage,
    usersData,
    searchData,
}) => {
    const returnFirstPage = (e) => {
        setCurrentVisibleUser(e.target.value);
        setCurrentPage(1);
    };

    const lastPage = Math.ceil(searchData.length / currentVisibleUser);

    const maxPage = (e) => {
        let numPage = +e.target.value;

        if (numPage <= lastPage) {
            setCurrentPage(numPage);
        }
    };
    return (
        <div className="pagination-wrapper">
            <button
                onClick={() =>
                    setCurrentPage(+(currentPage != 1 ? currentPage - 1 : 1))
                }
                disabled={currentPage === 1}
                className="nav-btn"
            >
                Previous
            </button>

            <div className="page-controls">
                <span>Page</span>
                <input
                    type="number"
                    value={currentPage}
                    min={1}
                    max={lastPage}
                    className="page-input"
                    onChange={maxPage}
                />
                <span>of {lastPage}</span>

                <select onChange={returnFirstPage} className="limit-select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>

            <button
                onClick={() =>
                    setCurrentPage(
                        +(currentPage === lastPage ? lastPage : currentPage + 1)
                    )
                }
                disabled={currentPage === lastPage}
                className="nav-btn"
            >
                Next
            </button>
        </div>
    );
};

export default TablePagination;
