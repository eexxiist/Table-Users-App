import React, { useState } from "react";
import User from "./User";
import SearchInputs from "./searchInputs";

const TableBody = ({ usersData, setUsersData }) => {
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

    return (
        <tbody>
            <SearchInputs setSearch={setSearch} search={search} />
            {searchData.map((user) => (
                <User user={user} setUsersData={setUsersData} />
            ))}
        </tbody>
    );
};

export default TableBody;

// const response = await fetch(
//     `https://68da4f7323ebc87faa2faa7c.mockapi.io/users/${editUserId}`,
//     {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//     }
// );
// const result = await response.json();
// setUsersData(
//     usersData.map((user) =>
//         user.id === editUserId ? result : user
//     )
// );
// setEditUserId(null);
