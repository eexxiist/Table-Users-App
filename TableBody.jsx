import React, { useState } from "react";
import User from "./User";
import SearchInputs from "./searchInputs";

const TableBody = ({
    usersData,
    setUsersData,
    currentVisibleUser,
    currentPage,
}) => {
    const [search, setSearch] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });

    const searchData = usersData.filter((user) => {
        if (
            user.name.includes(search.name.toLowerCase()) &&
            user.surName.toLowerCase().includes(search.surName.toLowerCase()) &&
            String(user.age).includes(search.age) &&
            user.email.toLowerCase().includes(search.email.toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    });

    console.log(currentPage, currentVisibleUser);

    const sliceUsers = searchData.slice(
        currentVisibleUser * currentPage - currentVisibleUser,
        currentVisibleUser * currentPage
    );

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
