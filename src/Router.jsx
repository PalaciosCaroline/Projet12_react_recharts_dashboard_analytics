
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Erreur404 from './pages/Erreur404'

export default function Router() {
    return(
        <>
         <Routes>
            <Route index element={<Dashboard/>} />
            <Route path="*" element={<Erreur404 />} />
        </Routes>
      
        
        </>
        
        )

}