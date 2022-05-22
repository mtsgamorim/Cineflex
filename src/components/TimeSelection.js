import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import Footer from './Footer';



function Times({weekday, date, showtimes}){

    return(
        <>
            <Container>
                <h3>{weekday} - {date}</h3>
                <Flex>
                {showtimes.map((show, index) =><Link to={`/assentos/${show.id}`} key={index} style={ {textDecoration: 'none'} }><Botton ><span>{show.name}</span></Botton> </Link>)}
                </Flex>
            </Container>
        </>
    )
}

export default function TimeSelection() {
    const {idFilme} = useParams();
    const [timeMovie, setTimeMovie] = useState([]);
    const [poster, setPoster] = useState("");
    const [title, setTitle] = useState("");


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(resposta => {
            setTimeMovie(resposta.data.days); 
            setPoster(resposta.data.posterURL);
            setTitle(resposta.data.title);
            console.log()
        });

    }, []);

    console.log(timeMovie);
    return(
        <>
            <Margin>
            <Title>
                <h2>Selecione o horário</h2>
            </Title> 
            {timeMovie.map((m, index) => <Times key={index}  weekday={m.weekday} date={m.date} showtimes={m.showtimes}/>)}
            </Margin>
            <Footer img={poster} title = {title}/>
        </>
    )
}

const Title = styled.div`
    background-color: #FFFFFF;
    display:flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;

    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        font-family: 'Roboto', sans-serif;
    }
`;

const Container = styled.div`
    h3 {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 5px;
        margin-left: 20px;
    }
`;

const Botton = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
    span {
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        font-size: 18px;
    }
`;

const Flex = styled.div`
    display: flex;
    margin-left: 20px;
`;

const Margin = styled.div`
    margin-bottom: 117px;

`;