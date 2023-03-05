import './App.css';
import {useState} from "react";
import HabitTrack from "./components/habit_track/habitTrack";

const App = () => {
    const [page, setPage] = useState("home")
    const pages = [{id: 1, name: "habitTrack"}]

    let content;

    if (page === 'habitTrack') {
        content = <HabitTrack/>
    }

    return (
        <>
            <div className={"main-nav"}>
                {pages.map(item => (
                    <nav
                        key={item.id}
                        className={"main-nav"}
                        onClick={() => {
                            setPage(item.name);
                        }}
                    >
                        {item.name}
                    </nav>
                ))}
            </div>
            {content}
        </>
    );
}

export default App;
