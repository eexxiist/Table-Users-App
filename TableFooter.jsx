import React, { useState } from "react";
import Styles from "./TableUsers.module.css";
import TablePagination from "./TablePagination";

const TableFooter = ({ usersData, setUsersData }) => {
    const [newUser, setNewUser] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });

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
            console.log([...usersData, result]);
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

    return (
        <tfoot>
            <tr>
                <td>
                    <input
                        className={Styles.input}
                        name="name"
                        placeholder="имя"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </td>
                <td>
                    <input
                        className={Styles.input}
                        name="surName"
                        placeholder="фамилия"
                        value={newUser.surName}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </td>
                <td>
                    <input
                        className={Styles.input}
                        name="age"
                        placeholder="возраст"
                        value={newUser.age}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </td>
                <td>
                    <input
                        className={Styles.input}
                        name="email"
                        placeholder="почта"
                        value={newUser.email}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </td>
                <td>
                    <button
                        className={`${Styles.button} ${Styles.addButton}`}
                        onClick={handleAddUser}
                    >
                        Add
                    </button>
                </td>
            </tr>
            <TablePagination />
        </tfoot>
    );
};

export default TableFooter;
