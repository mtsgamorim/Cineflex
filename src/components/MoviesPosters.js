import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MoviesPosters(){
    const [filmes, setFilmes] = useState(null);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(resposta => {
            setFilmes(resposta.data);
            
        });
    }, []);
    console.log(filmes);
    
    return (
        <>
        </>
    )
}