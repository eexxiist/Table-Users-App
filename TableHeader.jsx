import React from "react";
import { FaSortAlphaUp } from "react-icons/fa";
import { BsSortDown } from "react-icons/bs";

const TableHeader = () => {
    const changeIcon = () => {
        const closeIcon = true;
        closeIcon;
    };

    return (
        <thead>
            <tr>
                <th>
                    name <FaSortAlphaUp />
                </th>
                <th>
                    surName <FaSortAlphaUp />
                </th>
                <th>
                    age <BsSortDown />
                </th>
                <th>
                    email <FaSortAlphaUp />
                </th>
                <th>actions</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
