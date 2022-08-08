import { useState } from "react";
import { getHabitsList } from "../../services/trackit";
import "./NewHabit.css";



export default function NewHabit({displayAddHabit, setDisplayAddHabit, userToken}) {


    const [dayClassName, setDayClassName] = useState("day")

    const daysArr = [{
        day: "D", i: 0
    }, {day: "S", i: 1}, {day: "T", i: 2}, {day: 'Q', i: 3}, {day: 'Q', i: 4}, {day: 'S', i: 5}, {day: 'S', i: 6}];

    function handleCancelButton() {
        setDisplayAddHabit("newHabit hidden")
    }

    function handleSaveButton() {
        // construir um obj com nome do hábito e dias do háb
        const newHabitObj = {};

    }
    function handleClickDay(days) {
        if  (dayClassName === "day") {
            setDayClassName("day selected");
        }else {
            setDayClassName("day");
        }
        console.log(days.i);
    }
    

    return (
        <div className={displayAddHabit}>
            <div className="margin">
                <input placeholder="Nome do hábito" required disabled={false} ></input>
                <div className="week">
                    {daysArr.map((days) => {
                return <div key={days.i} onClick={() => handleClickDay(days)} className="day"><p>{days.day}</p></div>
            })}
                </div>
                <div className="newHabitButtons">
                    <div onClick={handleCancelButton} className="cancelHabitButton"><p>Cancelar</p></div>
                    <div onClick={handleSaveButton} className="saveHabitButton"><p>Salvar</p></div>

                </div>
            </div>
        </div>
    )
}