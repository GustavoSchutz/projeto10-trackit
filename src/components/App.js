import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Signup from "./Signup/Signup";

export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}