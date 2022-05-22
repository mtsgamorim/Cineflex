import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styled from "styled-components"

function Seat({id, name, isAvailable}) {
    return(
        <Assento isAvailable = {isAvailable}>
            {name.length >= 2 ? <p>{name}</p> : <p>0{name}</p>}
        </Assento>
    )
}

export default function SitSelection() {
    const {idSessao} = useParams();
    const [seats, setSeats] = useState([]);
    const seats1 = [];

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => {
            setSeats(resposta.data.seats) ;
            
        });
        
    }, []);
    console.log(seats)
    
    

    return(
        <>
            <Title>
                <h2>Selecione o(s) assento(s)</h2>
            </Title> 
            <SeatsLocation>  
                {seats.map((sit, index) => <Seat key={index} id={sit.id} name={sit.name} isAvailable={sit.isAvailable} />)}
            </SeatsLocation>
            <Info>
                <div><AssentoS></AssentoS><span>Selecionado</span></div>
                <div><AssentoD></AssentoD><span>Disponivel</span></div>
                <div><AssentoI></AssentoI><span>Indisponivel</span></div>
            </Info>
            <Comprador>
                <h2>Nome do comprador:</h2>
                <input type="text" placeholder="Digite seu nome..." />
            </Comprador>
            <CPF>
                <h2>CPF do comprador:</h2>
                <input type="text" placeholder="Digite seu CPF..." />
            </CPF>
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

const Assento = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.isAvailable ? "#C3CFD9" : "#FBE192"};

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }
`;

const SeatsLocation = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            span {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 13px;
                color: #4E5A65;
            }
    }
`;

const AssentoS = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 5px;
    background-color: #8DD7CF;
    
    
`;

const AssentoD = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 5px;
    background-color: #C3CFD9;
`;

const AssentoI = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 5px;
    background-color: #FBE192;
`;

const Comprador = styled.div`
    width: 327px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    h2{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
    input {
        width: 327px;
        height: 50px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
`;

const CPF = styled.div`
    margin-top: 40px;
    width: 327px;
    margin-left: auto;
    margin-right: auto;
    h2{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
    input{
        width: 327px;
        height: 50px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
`;