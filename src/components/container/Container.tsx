import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Loader } from "../../pages/loader/Loader"
import { Home } from "../../pages/home/Home"
import { Profile } from '../../pages/profile/Profile'
import { Projects } from '../../pages/projects/Projects'

export const Container : React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Loader />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/works" element={<Home />} />
                <Route path="/mail-me" element={<Home />} />
                <Route path="/connect" element={<Home />} />
            </Routes>
        </Router>
    )
}