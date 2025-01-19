import axios from "axios";



function APIPostExample() {

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: 'foo',
                body: 'bar',
                userId: 1
            }).then(response => {
                console.log(response);
            }).catch(error => console.log(error));
    };

    return (

        <div>
            <div><h1>Post request Example</h1></div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default APIPostExample;