import './youtube.css'
import Header from "./components/header";
import {useEffect, useState} from "react";
import VideoList from "./components/video_list/video_list";

function Youtube(props) {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(
            "https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=25&key=AIzaSyAhpg8-NSkeU-V2Ms9SCBozkCVzKrjkQzQ&part=snippet"
            , requestOptions
        )
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return (
        // <Header/>
        <VideoList
            videos={videos}
        />
    )

}

export default Youtube;