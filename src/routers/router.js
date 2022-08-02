import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Health from "../pages/health/Health"
import Dental from "../pages/dental/Dental"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/saude" element={<Health/>}/>
                <Route path="/dental" element={<Dental/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router