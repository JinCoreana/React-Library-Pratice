import React, { useState } from 'react'

const Item = ({ name, age }) => {
    return (
        <li>
            name: {name} / age: {age}</li >)

}
const url = 'https://github.com/techoi/raw-data-api/blob/main/simple-api.json'

export default function Examples() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const handleClick = () => {
        fetch(url)
            .then(
                (response) => {
                    return (response.json())
                })
            .then((json) => setData(data.json))
            .catch(
                (error) => setError(`Something is wrong : ${error}`)
            )
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <>
            <button onClick={handleClick}>Load Data</button>
            {
                data && <ul>{data.people.map((people) => (<Item key={`${people.name}-${people.age}`} name={people.name} age={people.age} />))}</ul>
            }
        </>
    );

}