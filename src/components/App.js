
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"; 

export default function App() {
    return(
        <BrowserRouter>
            <Footer />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
} 