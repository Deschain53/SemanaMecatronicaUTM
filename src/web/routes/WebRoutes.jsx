import {Navigate,Route,Routes} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import {Conferences} from '../pages/Conferences'
import {Workshops} from '../pages/Workshops'
import {Contest} from '../pages/Contest'

export const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/"  element={<HomePage/>}/>
            <Route path="/conferences"  element={<Conferences/>}/>
            <Route path="/workshops"  element={<Workshops/>}/>
            <Route path="/contest"  element={<Contest/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}