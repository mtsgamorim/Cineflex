
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Head from "./Head"
import Home from "./Home"; 
import TimeSelection from "./TimeSelection";


export default function App() {
    return(
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<TimeSelection />} />
            </Routes>
        </BrowserRouter>
    )
} 