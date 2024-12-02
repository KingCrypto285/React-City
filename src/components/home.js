import React from "react";
import styled from "styled-components";
import ReactTitle from '../img/React.png';
import CityTitle from '../img/City.png';
import ReactCityLogo from '../img/ReactCityLogo.png';

const Home =()=>{

    return(
        <div style={{backgroundColor:'white',display:'flex',width:'100%',height:'90vh'}}>
            <HomeHolder>
                <ImageHolder src={ReactCityLogo} alt="ReactCityLogo"/>
            </HomeHolder>
        </div>
    );
}

const HomeHolder = styled.div`
background-color: white;
display: flex;
justify-content: center; /* Center horizontally */
align-items: center; 
text-align: center;
padding:10px;
width: 100vw; /* Use viewport width for full width */
`;

const ImageHolder = styled.img`
margin: 10px; /* Add margin between images */
display: inline-block; /* Display images side by side */
`;

const HomeImage = styled.img`

`;

export default Home;

              {/* <ImageHolder src={ReactTitle} alt="reactTitle"/>
                <ImageHolder src={CityTitle} alt="cityTitle"/> */}