import {useLocation} from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Assentos({number}){
    return(
        <>
            <p>Assento {number}</p>
        </>
    )
}

export default function TelaFinal() {
    const location = useLocation();
    return(
        <>
           <AreaTitulo>
           <h1>Pedido feito</h1>
           <h2>com sucesso!</h2>
           </AreaTitulo>
           <Container>
                <h1>Filme e sessão</h1>
                <p>{location.state.movie.title}</p>
                <p>{location.state.day.date} {location.state.horario}</p>
                <h1>Ingressos</h1>
                {location.state.nameSeats.map((number, index) => <Assentos key={index} number={number}/>)}
                <h1>Comprador</h1>
                <p>Nome: {location.state.nome}</p>
                <p>CPF: {location.state.cpf}</p>
           </Container>
           <Link to={"/"} style={ {textDecoration: 'none'} }>
           <Button>
               <span>Voltar pra Home</span>
           </Button>
           </Link>
        </>
    )
}

const AreaTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    h1 {
        color:#247A6B;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
    h2 {
        color:#247A6B;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
`;

const Container = styled.div`
    h1{
        color:#293845;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-top: 50px;
        margin-bottom: 5px;
    }
    p{
        font-family: 'Roboto';
        color: #293845;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`;

const Button = styled.div`
    background-color: #E8833A;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    span{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`;

