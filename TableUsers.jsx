import React, { useEffect, useState } from "react";
import Styles from "./TableUsers.module.css";

const TableUsers = () => {
    const [usersData, setUsersData] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });
    const [newUser, setNewUser] = useState({
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
            if (editUserId) {
                const response = await fetch(
                    `https://68da4f7323ebc87faa2faa7c.mockapi.io/users/${editUserId}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                    }
                );
                const result = await response.json();
                setUsersData(
                    usersData.map((user) =>
                        user.id === editUserId ? result : user
                    )
                );
                setEditUserId(null);
            } else {
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
            }
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
                <thead>
                    <tr>
                        <th>name</th>
                        <th>surName</th>
                        <th>age</th>
                        <th>email</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {usersData.map((el) => (
                        <tr key={el.id}>
                            {el.id === editUserId ? (
                                <>
                                    <td>
                                        <input
                                            className={Styles.input}
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className={Styles.input}
                                            name="surName"
                                            value={formData.surName}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className={Styles.input}
                                            name="age"
                                            type="number"
                                            value={formData.age}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className={Styles.input}
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className={`${Styles.button} ${Styles.saveButton}`}
                                            onClick={handleAddUser}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className={`${Styles.button} ${Styles.cancelButton}`}
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{el.name}</td>
                                    <td>{el.surName}</td>
                                    <td>{el.age}</td>
                                    <td>{el.email}</td>
                                    <td>
                                        <button
                                            className={`${Styles.button} ${Styles.editButton}`}
                                            onClick={() => handleEditUser(el)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className={`${Styles.button} ${Styles.deleteButton}`}
                                            onClick={() =>
                                                handleDeleteUser(el.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>

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
                </tfoot>
            </table>
        </div>
    );
};

export default TableUsers;
