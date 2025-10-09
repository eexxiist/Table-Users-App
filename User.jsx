import React from "react";
import Styles from "./TableUsers.module.css";

const User = ({
    user,
    editUserId,
    formData,
    setFormData,
    handleAddUser,
    handleCancelEdit,
    handleEditUser,
    handleDeleteUser,
}) => {
    return (
        <tr key={user.id}>
            {user.id === editUserId ? (
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
                    <td>{user.name}</td>
                    <td>{user.surName}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>
                        <button
                            className={`${Styles.button} ${Styles.editButton}`}
                            onClick={() => handleEditUser(user)}
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
