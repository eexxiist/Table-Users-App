import React from "react";

import User from "./User";

const TableBody = ({
    usersData,
    editUserId,
    formData,
    setFormData,
    handleAddUser,
    handleCancelEdit,
    handleEditUser,
    handleDeleteUser,
}) => {
    return (
        <tbody>
            {usersData.map((user) => (
                <User
                    user={user}
                    editUserId={editUserId}
                    formData={formData}
                    setFormData={setFormData}
                    handleAddUser={handleAddUser}
                    handleCancelEdit={handleCancelEdit}
                    handleEditUser={handleEditUser}
                    handleDeleteUser={handleDeleteUser}
                />
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
