import React, { useState, useEffect } from 'react';
import Movies from "../config/movie";
import List from "../components/List";

function Popular() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        Movies.popular.then((response) => {
            setpost(response.results);
        });
    }, []);

    return <List movieList={post} title="Popular" />;
}

export default Popular