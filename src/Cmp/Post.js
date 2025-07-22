import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        const api = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data1 = await res.json();
                setData(data1);

                // Convert id and filter right after setting data
                const postId = parseInt(id);
                const filteredPost = data1.filter((item) => item.id === postId);
                setFilter(filteredPost); // ✅ Set filtered data here

            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        api();
    }, [id]);

    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td style={{ whiteSpace: 'pre-line' }}>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
};

export default Post;
