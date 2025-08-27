import React, { useState, useEffect } from 'react';

function StarWarsAPI() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://swapi.info/api/")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Star Wars API Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default StarWarsAPI;