import './App.css';
import {useState} from "react";
import HabitTrack from "./components/habit_track/habitTrack";
import Youtube from "./components/youtube/youtube";

const App = ({youtube}) => {
    const [page, setPage] = useState("home")
    const pages = [
        {id: 1, name: "habitTrack"},
        {id: 2, name: "youtube"}
    ]

    let content;

    if (page === 'habitTrack') {
        content = <HabitTrack/>
    } else if (page === 'youtube') {
        content = <Youtube youtube={youtube}/>
    }

    return (
        <div className={"wrap"}>
            <div className={"main-nav"}>
                {pages.map(item => (
                    <nav
                        key={item.id}
                        onClick={() => {
                            setPage(item.name);
                        }}
                    >
                        {item.name}
                    </nav>
                ))}
            </div>
            {content}
        </div>
    );
}

export default App;
