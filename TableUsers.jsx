import React, { useEffect, useState } from "react";
import Styles from "./TableUsers.module.css";

const TableUsers = () => {
    const [usersData, setUsersData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        age: "",
        email: "",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    "https://68da4f7323ebc87faa2faa7c.mockapi.io/users"
                );
                const data = await res.json();
                console.log(data);
                setUsersData(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        getData();
    }, []);

    const handleAddUser = () => {
        setUsersData([...usersData, formData]);
        setFormData({
            name: "",
            surName: "",
            age: "",
            email: "",
        });
    };

    return (
        <div>
            <table className={Styles.mainTable}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>surName</th>
                        <th>age</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData &&
                        usersData.map((el) => (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.surName}</td>
                                <td>{el.age}</td>
                                <td>{el.email}</td>
                                <td>
                                    <button>edit</button>
                                    <button>delit</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <input
                                name="name"
                                placeholder="имя"
                                value={formData.name}
                                type="text"
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
                                name="surName"
                                placeholder="фамилия"
                                value={formData.surName}
                                type="text"
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
                                name="age"
                                placeholder="возраст"
                                value={formData.age}
                                type="number"
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
                                name="email"
                                placeholder="почта"
                                value={formData.email}
                                type="text"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </td>
                        <button onClick={() => handleAddUser()}>add</button>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableUsers;

//добавление нового юзера в футере
//добавить столбик actions
//редактирование и удаление
