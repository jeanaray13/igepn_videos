import React, {useState, useEffect} from 'react'
import List from '../Components/List'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../App.css'

const Dashboard = () =>{
    //Obtención de la IP local
    const IP = process.env.REACT_APP_IP_FRONTEND


    const [videos, setVideos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();
    useEffect(
        ()=>{
            axios.get('http://'+IP+':5000/api/videos')
            .then(res => {setVideos(res.data)});
            setLoaded(true);
    },[IP]);

    //Eleavación de estado para actualizar DOM
    const removeFromDom = videoId =>{
        setVideos(videos.filter(video => video._id !== videoId))
    }

    return(
        <>
        <div>
            <h1>IG EPN VIDEOS</h1>
            <button className='btn_add' onClick={e=>navigate('/video/new')}>Add Video</button>
        </div>
        <br/>
        <div>
           {loaded && <List videos={videos} removeFromDom={removeFromDom}/>}
        </div>
        </>
    )
} 

export default Dashboard;