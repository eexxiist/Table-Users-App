import React, { useState } from "react";

const SearchInputs = ({ search, setSearch }) => {
    const handleSearchInputs = (e) => {
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value });
    };
    return (
        <tr>
            <td>
                <input
                    name="name"
                    value={search.name}
                    onChange={handleSearchInputs}
                    type="text"
                    placeholder="name"
                />
            </td>
            <td>
                <input
                    name="surName"
                    value={search.surName}
                    onChange={handleSearchInputs}
                    type="text"
                    placeholder="surName"
                />
            </td>
            <td>
                <input
                    name="age"
                    value={search.age}
                    onChange={handleSearchInputs}
                    type="text"
                    placeholder="age"
                />
            </td>
            <td>
                <input
                    name="email"
                    value={search.email}
                    onChange={handleSearchInputs}
                    type="text"
                    placeholder="email"
                />
            </td>
            <td>
                <button>search</button>
            </td>
        </tr>
    );
};

export default SearchInputs;
