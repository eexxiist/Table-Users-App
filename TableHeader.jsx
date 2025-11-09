import React, { useState } from "react";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";
import Styles from "./TableUsers.module.css";
import bubleSortUsers from "../../utils/sortFunctions";

const TableHeader = ({ usersData, setUsersData }) => {
    const [sortColumn, setSortColumn] = useState("");
    const [changeSort, setChangeSort] = useState("");

    const changeIcon = (sortColumnName) => {
        setUsersData(bubleSortUsers(usersData, sortColumnName, changeSort));
        setSortColumn(sortColumnName);
        setChangeSort((currentSort) =>
            currentSort === "" ? "asc" : currentSort === "asc" ? "desc" : ""
        );
    };

    return (
        <thead>
            <tr>
                <th
                    className={Styles.tableHeaderCeil}
                    name="name"
                    onClick={() => changeIcon("name")}
                >
                    name{" "}
                    {sortColumn === "name" ? (
                        changeSort === "asc" ? (
                            <FaSortAlphaDown size={20} color={"blue"} />
                        ) : (
                            <FaSortAlphaUp size={20} color={"blue"} />
                        )
                    ) : (
                        <FaSortAlphaUp />
                    )}
                </th>
                <th name="surName" onClick={() => changeIcon("surName")}>
                    surName{" "}
                    {sortColumn === "surName" ? (
                        <FaSortAlphaUp size={20} color={"blue"} />
                    ) : (
                        <FaSortAlphaUp />
                    )}
                </th>
                <th name="age" onClick={() => changeIcon("age")}>
                    age{" "}
                    {sortColumn === "age" ? (
                        <FaSortAmountUp size={20} color={"blue"} />
                    ) : (
                        <FaSortAmountUp />
                    )}
                </th>
                <th name="email" onClick={() => changeIcon("email")}>
                    email{" "}
                    {sortColumn === "email" ? (
                        <FaSortAlphaUp size={20} color={"blue"} />
                    ) : (
                        <FaSortAlphaUp />
                    )}
                </th>
                <th>actions</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
