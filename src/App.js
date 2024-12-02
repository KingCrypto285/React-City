import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import React from "react";
import Pages from './components/Pages';

function App() {

  return(
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );

}



export default App;
