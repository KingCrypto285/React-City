// Navbar.js
import { Link } from "react-router-dom";
import ReactCityLogo from '../../img/ReactCityLogo.png';

function Navbar() {
  return (
    <nav style={{ 
        padding: "10px", 
        height:'7.5vh',
        backgroundColor: "white", 
        borderBottomColor:"#e15c00", 
        borderBottomWidth:'2px',
        borderBottomStyle:'solid', 
        display: 'flex',          // Use flexbox to align children on the same row
        alignItems: 'center',     // Align items vertically in the center
        justifyContent: 'space-between',  // Optional: spread out content (image on left, links on right)
      }}>
    <img style={{height:'50px',width:'50px'}} src={ReactCityLogo} alt='ReactCityLogo'/>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ color: "#e15c00", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/about" style={{ color: "#e15c00", textDecoration: "solid" }}>About</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/tool" style={{ color: "#e15c00", textDecoration: "solid" }}>Tools</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#e15c00", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
