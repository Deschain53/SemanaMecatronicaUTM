import {Navigate,Route,Routes} from 'react-router-dom'
import { About } from '../pages/About'
import { HomePage } from '../pages/HomePage'
import { Program } from '../pages/Program'

export const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/"  element={<HomePage/>}/>
            <Route path="/program"  element={<Program/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}