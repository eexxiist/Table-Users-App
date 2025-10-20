import React, { useState } from "react";
import Styles from "./TableUsers.module.css";

const User = ({ setUsersData, user, handleCancelEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(
                `https://68da4f7323ebc87faa2faa7c.mockapi.io/users/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                setUsersData((usersData) =>
                    usersData.filter((user) => user.id !== id)
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSaveUser = async (id) => {
        try {
            const response = await fetch(
                `https://68da4f7323ebc87faa2faa7c.mockapi.io/users/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            const result = await response.json();
            setUsersData((usersData) =>
                usersData.map((editUser) =>
                    editUser.id === id ? result : editUser
                )
            );
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <tr key={user.id}>
            {isEditing ? (
                <>
                    <td>
                        <input
                            className={Styles.input}
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
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
                                    [e.target.name]: e.target.value,
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
                                    [e.target.name]: e.target.value,
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
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </td>
                    <td>
                        <button
                            className={`${Styles.button} ${Styles.saveButton}`}
                            onClick={() => handleSaveUser(user.id)}
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
                    <td>
                        {user.name[0].toUpperCase() +
                            user.name.slice(1).toLowerCase()}
                    </td>
                    <td>
                        {user.surName[0].toUpperCase() +
                            user.surName.slice(1).toLowerCase()}
                    </td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>
                        <button
                            className={`${Styles.button} ${Styles.editButton}`}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button
                            className={`${Styles.button} ${Styles.deleteButton}`}
                            onClick={() => handleDeleteUser(user.id)}
                        >
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default User;
