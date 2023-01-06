
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


import './App.css';

function App() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  ); 
}

export default App;
