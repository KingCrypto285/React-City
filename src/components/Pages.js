import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./NavBar/index";
function Pages (){

    return(
        <div>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    );
}
export default Pages;