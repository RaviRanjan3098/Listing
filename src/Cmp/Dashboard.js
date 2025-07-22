import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const api = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data1 = await res.json();
        setData(data1)
    };

    useEffect(() => {
        api();
    }, []);

    console.log(data, "data");

    return (
        <div className="container mt-3">
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.slice(0, 20).map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td style={{ whiteSpace: 'pre-line' }}>{item.body}</td>
                                <td onClick={() => navigate(`/post/${item.id}`)} style={{ cursor: "pointer" }} >
                                    <FaEdit />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >


    );
}

export default Dashboard;
