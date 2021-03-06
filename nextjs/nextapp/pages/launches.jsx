import React, { useEffect, useState } from 'react'

export default function Launches({ data }) {
    //     const [data, setData] = useState(null);
    //     useEffect(() => {
    //         const fetchLaunches = async () => {
    //             const res = await fetch("https://api.spacexdata.com/v3/launches")
    //             const data = await res.json();
    //             setData(data)
    //         }
    //         fetchLaunches();
    //     // }, [])
    if (data == null) {
        return 'null';
    }

    return (
        <div>
            <ul>
                {data.map((launch, index) => (
                    <li key={index}> {index + 1}. {launch.mission_name} </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://api.spacexdata.com/v3/launches")
    const data = await res.json();
    console.log("Check where ")
    return {
        props: { data }, // will be passed to the page component as props
    }
}
