import {Route, Routes } from "react-router-dom";
import FirstPage from "./Pages/firstPage";
import SecondPage from "./Pages/secondPages";
import '../src/styles/_main.scss';


export default function App () {
    return (
    <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/music" element={<SecondPage />} /> 
    </Routes>
    )
}