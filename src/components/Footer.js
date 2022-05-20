import styled from "styled-components"

export default function Footer() {
    return (
        <Container>
           <h1>CINEFLEX</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }
`;