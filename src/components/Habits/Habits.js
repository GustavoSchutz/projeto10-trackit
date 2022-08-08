import Footer from "../Footer";
import Header from "../Header";
import NewHabit from "./NewHabit";
import { useContext, useState, useEffect } from "react";
import { getHabitsList } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";
import "./Habits.css";
import Habit from "./Habit";


export default function Habits() {
    


    const [displayAddHabit, setDisplayAddHabit] = useState("newHabit hidden")
    const authObj = {};
    const [getHabitsListObj, setGetHabitsListObj] = useState({})
    const { loginObj, setLoginObj, setUserToken, setHabitsList, habitsList, userToken } = useContext(UserContext);
    const [profilePicture, setProfilePicture] = useState("../assets/images/genericProfile.png")

    function renderHabitsList() {
        authObj.headers = {};
        authObj.headers.Authorization = "Bearer " + loginObj.token;
        setUserToken(authObj);
        console.log(authObj);
        getHabitsList(authObj).then( (res) => {
            console.log(res.data);
            setHabitsList(res.data);
        })

    }

    useEffect(() => {
            renderHabitsList();
        }, [])
    // function renderHabitsList() {
    //     authObj.headers = {};
    //     authObj.headers.Authorization = "Bearer " + loginObj.token;
    //     setUserToken(authObj);
    //     console.log(authObj);
    //     getHabitsList(authObj).then( (res) => {
    //         console.log(res.data)
    //     })

    // }
    // renderHabitsList();
    
    useEffect(() => {
            setProfilePicture(loginObj.image);
            console.log(loginObj);
        }, [profilePicture])
    

    const handleClickAddHabit = () => {
        setDisplayAddHabit("newHabit");
    }

    function renderHabits() {

    }

    useEffect(() => {
        
    }, [habitsList])

    return(
        <>
            <Header setProfilePicture={setProfilePicture} profilePicture={profilePicture} />
            <div className="backgroundHabits">
                <div className="myHabits">
                    <h2 className="myHabitsTitle">Meus hábitos</h2>
                    <div onClick={handleClickAddHabit} className="addHabit"><p className="iconPlus">+</p></div>
                </div>
                <NewHabit userToken={userToken} displayAddHabit={displayAddHabit} setDisplayAddHabit={setDisplayAddHabit} />
                <Habit habitsList={habitsList} />
            </div>
            <Footer />
        </>
    )
}