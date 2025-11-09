import React, { useEffect, useState } from "react";
import Styles from "./TableUsers.module.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const TableUsers = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "https://68da4f7323ebc87faa2faa7c.mockapi.io/users"
                );
                const data = await res.json();
                setUsersData(data);
            } catch (error) {
                console.log("Error", error);
            }
        })();
    }, []);

    return (
        <div className={Styles.wrapper}>
            <table className={Styles.mainTable}>
                <TableHeader
                    usersData={usersData}
                    setUsersData={setUsersData}
                />

                <TableBody usersData={usersData} setUsersData={setUsersData} />

                <TableFooter
                    setUsersData={setUsersData}
                    usersData={usersData}
                />
            </table>
        </div>
    );
};

export default TableUsers;

//над таблицей инпуты с поиском над каждым столбцом*

//сортировка*
