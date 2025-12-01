import React, { useEffect, useState } from "react";
import Styles from "./TableUsers.module.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import createUser from "../../utils/createUser";
import TablePagination from "./TablePagination";

const TableUsers = () => {
    const [usersData, setUsersData] = useState([]);
    const [currentVisibleUser, setCurrentVisibleUser] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "https://68da4f7323ebc87faa2faa7c.mockapi.io/users"
                );
                const data = await res.json();

                const mockUsersData = Array.from({ length: 10000 }, () =>
                    createUser()
                );

                setUsersData([...data, ...mockUsersData]);
            } catch (error) {
                console.log("Error", error);
            }
        })();
    }, []);


    const searchData = usersData.filter((user) => {
        if (
            user.name.toLowerCase().includes(search.name.toLowerCase()) &&
            user.surName.toLowerCase().includes(search.surName.toLowerCase()) &&
            String(user.age).includes(search.age) &&
            user.email.toLowerCase().includes(search.email.toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    });

    console.log(searchData);

    const sliceUsers = searchData.slice(
        currentVisibleUser * currentPage - currentVisibleUser,
        currentVisibleUser * currentPage
    );

    return (
        <div className={Styles.wrapper}>
            <table className={Styles.mainTable}>
                <TableHeader
                    usersData={usersData}
                    setUsersData={setUsersData}
                />

                <TableBody
                    setSearch={setSearch}
                    search={search}
                    sliceUsers={sliceUsers}
                    setUsersData={setUsersData}
                />

                <TableFooter
                    setUsersData={setUsersData}
                    usersData={usersData}
                />
            </table>
            <TablePagination
                currentVisibleUser={currentVisibleUser}
                setCurrentVisibleUser={setCurrentVisibleUser}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                usersData={usersData}
                searchData={searchData}
            />
        </div>
    );
};

export default TableUsers;

//менять коли
