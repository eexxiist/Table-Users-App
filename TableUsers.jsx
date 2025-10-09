import React, { useEffect, useState } from "react";
import Styles from "./TableUsers.module.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const TableUsers = () => {
    const [usersData, setUsersData] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });

    const getData = async () => {
        try {
            const res = await fetch(
                "https://68da4f7323ebc87faa2faa7c.mockapi.io/users"
            );
            const data = await res.json();
            setUsersData(data);
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddUser = async () => {
        try {
            const response = await fetch(
                "https://68da4f7323ebc87faa2faa7c.mockapi.io/users",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser),
                }
            );
            const result = await response.json();
            setUsersData([...usersData, result]);
            setNewUser({ name: "", surName: "", age: "", email: "" });
        } catch (error) {
            console.log(error);
        }

        setNewUser({
            name: "",
            surName: "",
            age: "",
            email: "",
        });
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(
                `https://68da4f7323ebc87faa2faa7c.mockapi.io/users/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                setUsersData(usersData.filter((user) => user.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditUser = (el) => {
        setEditUserId(el.id);
        setFormData({ ...el });
    };

    const handleCancelEdit = () => {
        setEditUserId(null);
        setFormData({
            name: "",
            surName: "",
            age: "",
            email: "",
        });
    };

    return (
        <div className={Styles.wrapper}>
            <table className={Styles.mainTable}>
                <TableHeader />

                <TableBody
                    usersData={usersData}
                    editUserId={editUserId}
                    formData={formData}
                    setFormData={setFormData}
                    handleAddUser={handleAddUser}
                    handleCancelEdit={handleCancelEdit}
                    handleEditUser={handleEditUser}
                    handleDeleteUser={handleDeleteUser}
                />

                <TableFooter
                    usersData={usersData}
                    setUsersData={setUsersData}
                />
            </table>
        </div>
    );
};

export default TableUsers;

//над таблицей инпуты с поиском над каждым столбцом*
//редактирование нескольких пользователей
//сортировка*

