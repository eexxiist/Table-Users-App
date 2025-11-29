import React from "react";
import "./TablePagination.css";

const TablePagination = ({
    currentVisibleUser,
    setCurrentVisibleUser,
    currentPage,
    setCurrentPage,
    usersData,
}) => {
    const lastPage = Math.ceil(usersData.length / currentVisibleUser);
    return (
        <div className="pagination-wrapper">
            <button
                onClick={() =>
                    setCurrentPage(currentPage != 1 ? currentPage - 1 : 1)
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
                    className="page-input"
                    onChange={(e) => setCurrentPage(+e.target.value)}
                />
                <span>of {lastPage}</span>

                <select
                    onChange={(e) => setCurrentVisibleUser(e.target.value)}
                    className="limit-select"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>

            <button
                onClick={() =>
                    setCurrentPage(
                        currentPage === lastPage ? lastPage : currentPage + 1
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
