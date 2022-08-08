import Footer from "../Footer";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import "./Habits.css";


export default function Habits() {
    
    const authObj = {};
    const [getHabitsListObj, setGetHabitsListObj] = useState({})
    const { loginObj, setLoginObj } = useContext(UserContext);
    const [profilePicture, setProfilePicture] = useState("../assets/images/genericProfile.png")
    function renderHabitsList() {
        authObj.header = {};
        authObj.header.authorization = "bearer " + loginObj.token
        console.log(authObj)
        // getHabitsListObj()

    }
    renderHabitsList();
    
    useEffect(() => {
            setProfilePicture(loginObj.image);
            console.log(loginObj)
        }, [profilePicture])
    

    return(
        <>
            <Header setProfilePicture={setProfilePicture} profilePicture={profilePicture} />
            <div className="backgroundHabits">
                <div className="myHabits">
                    <h2 className="myHabitsTitle">Meus hábitos</h2>
                    <div className="addHabit"><p className="iconPlus">+</p></div>
                </div>
            </div>
            <Footer />
        </>
    )
}