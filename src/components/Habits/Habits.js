import Footer from "../Footer";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import "./Habits.css";


export default function Habits() {
    
    const { loginObj, setLoginObj } = useContext(UserContext);
    const [profilePicture, setProfilePicture] = useState("../assets/images/genericProfile.png")
    
    useEffect(() => {
            setProfilePicture(loginObj.image);
            console.log(loginObj)
        }, [profilePicture])
    

    return(
        <>
            <Header setProfilePicture={setProfilePicture} profilePicture={profilePicture} />
            <div className="backgroundHabits">
                <div className="myHabits">
                    <h2 className="myHabits">Meus hábitos</h2>
                    <div className="addHabit"><p className="iconPlus">+</p></div>
                </div>
            </div>
            <Footer />
        </>
    )
}