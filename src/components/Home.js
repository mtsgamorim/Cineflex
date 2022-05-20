import styled from "styled-components"
import MoviesPosters from "./MoviesPosters";

export default function Home() {
    return (
        <>
            <Title>
                <h2>Selecione o filme</h2>
            </Title> 
            <MoviesPosters/>
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