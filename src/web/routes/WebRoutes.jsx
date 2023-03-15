import {Navigate,Route,Routes} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import {Conferences} from '../pages/Conferences'
import {Workshops} from '../pages/Workshops'
import {Contest} from '../pages/Contest'


export const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/Semana_EyM/"  element={<HomePage/>}/>
            <Route path="/Semana_EyM/conferences"  element={<Conferences/>}/>
            <Route path="/Semana_EyM/workshops"  element={<Workshops/>}/>
            <Route path="/Semana_EyM/contest"  element={<Contest/>}/>
            <Route path='*' element={<Navigate to="/Semana_EyM/"/>}/>
        </Routes>
    )
}