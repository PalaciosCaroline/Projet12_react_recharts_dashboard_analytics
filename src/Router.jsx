
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Dashboard from './pages/Dashboard'
import Erreur404 from './pages/Erreur404'

export default function Router() {
    return(
        <Routes>
            <Route index element={<Accueil/>}/>
            <Route path="/user/:id" end="true" element={<Dashboard/>} />
            <Route path="*" element={<Erreur404 />} />
        </Routes>        
        )

}