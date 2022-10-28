import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate } from 'react-router-dom';
import '../App.css'

//Vista del detalle del producto
const UpdateVideo = () => {
    //Obtención de la IP local
    const IP = process.env.REACT_APP_IP_FRONTEND
    
    const {id} = useParams(); //Obtención de la URL
    const [video, setVideo] = useState({}); //Variable de estado para obtener el video
    const navigate = useNavigate(); //Función que permite redirigir hacia una URL específica

    //useEffect para cargar la información del backend
    useEffect(()=>{
        axios.get('http://'+IP+':5000/api/video/'+id)
        .then(res => setVideo({...res.data}))
        .catch(err => console.log(err));
    },[IP,id]);

    return(
        <div className='seccion_video'>
            <h1>{video.name}</h1>
            <p><b>Video URL:</b> <a href={video.videoURL} target="_blank" rel='noreferrer'>{video.videoURL}</a></p>
            <p><b>Description:</b> {video.description}</p>
            <br/>
            <button className='btn_detail' onClick={e=>navigate('/video/'+video._id+'/edit')}>Edit</button>
            <br/>
            <br/>
            <button className='btn_delete' onClick={e=>navigate('/')}>Dashboard</button>
        </div>
    );
}

export default UpdateVideo;
