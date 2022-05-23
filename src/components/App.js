
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Head from "./Head"
import Home from "./Home"; 
import TimeSelection from "./TimeSelection";
import SitSelection from "./SitSelection";
import TelaFinal from "./TelaFinal";


export default function App() {
    return(
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<TimeSelection />} />
                <Route path="/assentos/:idSessao" element={<SitSelection />}/>
                <Route path="/sucesso" element={<TelaFinal />} />
            </Routes>
        </BrowserRouter>
    )
} 