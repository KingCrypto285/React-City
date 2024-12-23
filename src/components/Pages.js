import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./NavBar/index";
import Gallery from "./gallery";
function Pages (){

    return(
        <div>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            </Routes>
        </div>
    );
}
export default Pages;