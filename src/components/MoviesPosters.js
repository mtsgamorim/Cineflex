import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom";

function Movie({id, img}) {
    return(
        <Link to={`/sessoes/${id}`}>
        <MovieSelection>
            <img src={img} alt='Area filme'/>
        </MovieSelection>
        </Link>
    )
}

export default function MoviesPosters(){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(resposta => {
            setFilmes(resposta.data);
            
        });
    }, []);
    console.log(filmes);
    
    
    return (
        <Container>
            {filmes.map(filme => <Movie key={filme.id} id={filme.id} img={filme.posterURL} />)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const MovieSelection = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    img {
        width: 129px;
        height: 193px;
    }
`;