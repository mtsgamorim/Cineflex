import styled from "styled-components"
export default function FooterFinal({title, img, weekday, date}) {
    return (
        <Container>
            <Movie>
                <img src={img} alt='Area filme'/>
            </Movie>
            <Colunm>
                <h1>{title}</h1>
                <h1>{weekday} - {date}</h1>
            </Colunm>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    h1 {
        margin-left: 5px;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        font-family: 'Roboto', sans-serif;
        word-break: break-word;
    }
`;

const Movie = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    img {
        width: 48px;
        height: 72px;
        
    }
`;

const Colunm = styled.div`
    display: flex;
    flex-direction: column;
`;