
const Habit = (props) => {


    return (
        <li className={"habit"}>
            <span className={"habit-name"}>{props.habit.name}</span>
            <span className={"habit-count"}>{props.habit.count}</span>
            <button className={"habit-button habit-increase"} onClick={() => {
                props.countIncrement(props.habit);
            }}>
                <i className={"fa-regular fa-square-plus"}></i>
            </button>
            <button className={"habit-button habit-decrease"} onClick={() => {
                props.countDecrement(props.habit);
            }}>
                <i className={"fa-regular fa-square-minus"}></i>
            </button>
            <button className={"habit-button habit-increase"} onClick={() => {
                props.habitDelete(props.habit);
            }}>
                <i className={"fa-solid fa-trash"}></i>
            </button>
        </li>
    )
}

export default Habit;