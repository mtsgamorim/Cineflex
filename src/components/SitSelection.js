import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import FooterFinal from './FooterFinal';




function Seat({id, name, isAvailable, setComprar, comprar, setNameSeats, nameSeats}) {
    const [selecionei, setSelecionei] = useState(false);
    function marcarAscento(){
        let aux = [...comprar];
        let auxName = [...nameSeats]
        if(!isAvailable) {
            alert("Esse assento não está disponível");
        }
        if(isAvailable && !selecionei){
            setSelecionei(true);
            aux.push(id);
            auxName.push(name);
            setComprar(aux);
            setNameSeats(auxName);
        }else {
            setSelecionei(false);
            aux = aux.filter((f) => f !== id);
            auxName = auxName.filter((f) => f !== name);
            setComprar(aux);
            setNameSeats(auxName);
        }
    }

    return(
        <Assento onClick={marcarAscento} isAvailable = {isAvailable} selecionei = {selecionei}>
            {name.length >= 2 ? <p>{name}</p> : <p>0{name}</p>}
        </Assento>
    )
}



export default function SitSelection() {
    const {idSessao} = useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [comprar, setComprar] = useState([]);
    const [nameSeats, setNameSeats] = useState([]);
    const [horario, setHorario] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(resposta => {
            setSeats(resposta.data.seats);
            setMovie(resposta.data.movie);
            setDay(resposta.data.day)
            setHorario(resposta.data.name)
        });
        
    }, []);
    
    function comprarLugares(){
        if(nome.length > 0 && cpf.length > 0 && comprar.length > 0){
            const objeto = {
                ids: comprar,
                name: nome,
                cpf: cpf
            }
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", objeto);
            promise.then(r => {
            navigate("/sucesso", {state:{nameSeats:nameSeats, movie:movie, nome:nome, cpf:cpf, day:day, horario:horario}});
            });
        }else if(nome.length === 0){
            alert("Digite o seu nome");
        }else if(cpf.length === 0){
            alert("Digite o seu cpf");
        }else if(comprar.length === 0){
            alert("Você não selecionou nenhum assento!")
        }
    }
   
    return(
        <>
            <Title>
                <h2>Selecione o(s) assento(s)</h2>
            </Title> 
            <SeatsLocation>  
                {seats.map((sit, index) => <Seat key={index} nameSeats={nameSeats} setNameSeats={setNameSeats} comprar={comprar} setComprar={setComprar} id={sit.id} name={sit.name} isAvailable={sit.isAvailable} />)}
            </SeatsLocation>
            <Info>
                <div><AssentoS></AssentoS><span>Selecionado</span></div>
                <div><AssentoD></AssentoD><span>Disponivel</span></div>
                <div><AssentoI></AssentoI><span>Indisponivel</span></div>
            </Info>
            <Comprador>
                <h2>Nome do comprador:</h2>
                <input onChange={e => setNome(e.target.value)} type="text" placeholder="Digite seu nome..." />
            </Comprador>
            <CPFcamp>
                <h2>CPF do comprador:</h2>
                <input onChange={e => setCpf(e.target.value)} type="text" placeholder="Digite seu CPF..." />
            </CPFcamp>
            <Botao onClick={comprarLugares}>
                <span>Reservar assento(s)</span>
            </Botao>
            <FooterFinal title={movie.title} img={movie.posterURL} weekday={day.weekday} date={day.date}/>
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
    background-color: ${(props) => (props.isAvailable && props.selecionei && "#8DD7CF") || (props.isAvailable && !(props.selecionei) && "#C3CFD9") || !(props.isAvailable) && "#FBE192"};

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

const CPFcamp = styled.div`
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

const Botao = styled.div `
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 140px;
    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }

`;