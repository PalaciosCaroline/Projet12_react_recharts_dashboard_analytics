
import ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navhorizontale from './components/Navhorizontale';
import Navverticale from './components/Navverticale';
import Router from './Router';
import './App.css';

function App() {
  ReactDOM.render(
    <BrowserRouter>
      <Navhorizontale />
      <Router />
      <Navverticale />
    </BrowserRouter>,
    document.getElementById("root")
  ); 
}

export default App;

