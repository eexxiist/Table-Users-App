import React from "react";
import "./TablePagination.css";

const TablePagination = () => {
    return (
        <div className="pagination-wrapper">
            <button className="nav-btn">Previous</button>

            <div className="page-controls">
                <span>Page</span>
                <input type="number" className="page-input" />
                <span>of</span>

                <select className="limit-select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>

            <button className="nav-btn">Next</button>
        </div>
    );
};

export default TablePagination;
