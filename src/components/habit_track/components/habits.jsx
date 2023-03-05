import Habit from "./habit";

const Habits = (props) => {

    return (
        <>
            <ul>
                {props.habits.map( habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        countIncrement={props.countIncrement}
                        countDecrement={props.countDecrement}
                        habitDelete={props.habitDelete}
                    />
                ))}
            </ul>
            <button className={"habits-reset"} onClick={props.countReset}>Count Reset</button>
        </>
    )
}

export default Habits;