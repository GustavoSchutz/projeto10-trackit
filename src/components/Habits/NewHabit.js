import { getHabitsList } from "../../services/trackit";
import "./NewHabit.css";



export default function NewHabit({displayAddHabit, setDisplayAddHabit, userToken}) {

    const daysArr = [{
        day: "D"
    }, {day: "S"}, {day: "T"}, {day: 'Q'}, {day: 'Q'}, {day: 'S'}, {day: 'S'}];

    function handleCancelButton() {
        setDisplayAddHabit("newHabit hidden")
    }

    function handleSaveButton() {
        // construir um obj com nome do hábito e dias do háb
        const newHabitObj = {};

    }
    

    return (
        <div className={displayAddHabit}>
            <div className="margin">
                <input placeholder="Nome do hábito" required disabled={false} ></input>
                <div className="week">
                    {daysArr.map((days) => {
                return <div className="day"><p>{days.day}</p></div>
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