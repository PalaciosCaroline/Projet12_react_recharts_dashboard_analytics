import React from 'react'
import ReactDOM from 'react-dom'
import Choiceuser from './pages/choiceuser/Choiceuser'
import Dashboard from './pages/dashboard/Dashboard'
import Erreur404 from './pages/erreur404/Erreur404'
import Navhorizontale from './components/Navhorizontale'
import Navverticale from './components/navverticale/Navverticale'
import { BrowserRouter,Routes, Route} from "react-router-dom"
import './App.css'

export default function App() {
  ReactDOM.render(
    <BrowserRouter>
      <Navhorizontale />
      <main className='main_app'>
        <Navverticale />
        <Routes>
          <Route index path="/" element={<Choiceuser />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </main>
    </BrowserRouter>,
    document.getElementById('root')
  )
}




