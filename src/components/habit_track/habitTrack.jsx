import React, {useState} from 'react';
import Header from "./components/header";
import "./habitTrack.css"
import InputForm from "./components/inputForm";
import Habits from "./components/habits";

const HabitTrack = () => {

    const [habits, setHabits] = useState([
        {id: 1, name: "Coding", count: 0},
        {id: 2, name: "Running", count: 0},
        {id: 3, name: "Eating", count: 0}
    ])

    const countIncrement = (habit) => {
        const copyHabits = habits.map(item => {
            if (habit.id === item.id) {
                return {...habit, count: habit.count + 1};
            }
            return item;
        })
        setHabits(copyHabits);
    }

    const countDecrement = (habit) => {
        const copyHabits = habits.map(item => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return {...habit, count: count < 0 ? 0 : count};
            }
            return item;
        })
        setHabits(copyHabits);
    }

    const habitDelete = (habit) => {
        const copyHabits = habits.filter(item => item.id !== habit.id);
        setHabits(copyHabits);
    }

    const addHabit = (name) => {
        const copyHabits = [...habits, {id: Date.now(), name, count: 0}];
        setHabits(copyHabits);
    }

    const countReset = () => {
        const copyHabits = habits.map(item => {
            if (item.count !== 0) {
                return {...item, count: 0};
            }
            return item;
        })
        setHabits(copyHabits);
    }

    return (
        <div>
            <Header totalCount={habits.filter(habit => habit.count !== 0).length}/>
            <InputForm
                addHabit={addHabit}
            />
            <Habits
                habits={habits}
                countIncrement={countIncrement}
                countDecrement={countDecrement}
                habitDelete={habitDelete}
                countReset={countReset}
            />
        </div>
    )
}

export default HabitTrack;