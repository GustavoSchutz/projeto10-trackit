import { useContext } from "react"
import UserContext from "../../contexts/UserContext";
import "./Habit.css";




export default function Habit() {

    const { habitsList } = useContext(UserContext);
    console.log(habitsList.length)

    if (habitsList.length === 0) {
        return <h5 className="noHabits">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h5>
    }

    return (
        <div className="habit">o map
        </div>
    )

}