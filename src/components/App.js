import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Habits from "./Habits/Habits";
import Login from "./Login/Login"
import Signup from "./Signup/Signup";

export default function App() {

    const [habitsList, setHabitsList] = useState([
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ]);
    
    const [loginObj, setLoginObj] = useState({});

    const [userToken, setUserToken] = useState({});

    return (
        <BrowserRouter>
            <UserContext.Provider value={{userToken, setUserToken, loginObj, setLoginObj, habitsList, setHabitsList}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/habits" element={<Habits />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}