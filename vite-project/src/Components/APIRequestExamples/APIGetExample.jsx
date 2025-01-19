import { useEffect, useState } from "react";
import axios from 'axios';




function APIGetExample() {


    const [posts, setData] = useState([]);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false);
        setLoading(true);
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
        ])
            .then(axios.spread((posts, todos) => {
                setData(posts.data);
                setTodos(todos.data);
                setLoading(false);
            })).catch((error) => {
                setError("Failed to fetch data. Contact your system administrator.");
                console.error(error);
                setLoading(false);
            })
        // Single API Reques using axios
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         setData(response.data);
        //         setLoading(false);
        //     }).catch((error) => {
        //         setError("Failed to fetch data. Contact your system administrator.");
        //         console.error(error);
        //         setLoading(false);
        //     })

    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }

    else if (error) {
        return <h1>{error}</h1>
    }

    else {
        return (
            <div>
                <div>TEST API CALL</div>
                <ul>
                    {posts.map((item) => (
                        <li key={item.id}>
                            <strong>{item.title}</strong>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>

                <div>TODO</div>
                <div>
                    <p><strong> Title: {todos.title}</strong></p>
                </div>
            </div>
        )
    };

}

export default APIGetExample;