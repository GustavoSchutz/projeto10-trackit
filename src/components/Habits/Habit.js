import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext";
import "./Habit.css";




export default function Habit({ habitsList }) {



    const [classDaysArr, setClassDaysArr] = useState([0, 1, 2, 3, 4, 5, 6]);

    const daysArr = [{
        day: "D", i: 0, class: "day"
    }, { day: "S", i: 1, class: "day" }, { day: "T", i: 2, class: "day" }, { day: 'Q', i: 3, class: "day" }, { day: 'Q', i: 4, class: "day" }, { day: 'S', i: 5, class: "day" }, { day: 'S', i: 6, class: "day" }];

    console.log(habitsList.length)

    if (habitsList.length === 0) {
        return <h5 className="noHabits">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h5>
    }
    function isInside(arr) {
        const arr2 = [0, 1, 2, 3, 4, 5, 6];
        let newArr = [];
        for (let i = 0; i < arr2.length; i++) {
            let item = i;
            for (let z = 0; z < arr.length; z++) {
                if (arr[z] === item) {
                    newArr.push(item + " x");
                    item++
                    i++
                }
            }
            newArr.push(i);
        }
        newArr.splice(7);
        console.log(newArr)
        return (newArr);

    }



    return (
        <div className="habits">
            {habitsList.map((habit) => {
                return <div key={habit.id} className="habit"><p className="habitP">{habit.name}</p><div className="weekHabit">{isInside(habit.days).map((hd) => {
                    console.log(hd);
                    return <div key={hd} className={"day "+hd} ><p>{daysArr[(hd.toString()).replace(" x", "")].day}</p></div>
                })}</div></div>
            })}
        </div>

        // {habitsList.map((hl) => {
        //     return <Seat selectedIds={selectedIds} setSelectedIds={setSelectedIds} ss={ss} />
        // })}
    )

}