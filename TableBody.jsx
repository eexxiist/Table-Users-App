import React, { useState } from "react";
import User from "./User";
import SearchInputs from "./searchInputs";

const TableBody = ({ setUsersData, setSearch, search, sliceUsers }) => {
    return (
        <tbody>
            <SearchInputs setSearch={setSearch} search={search} />
            {sliceUsers.map((user) => (
                <User user={user} setUsersData={setUsersData} />
            ))}
        </tbody>
    );
};

export default TableBody;
