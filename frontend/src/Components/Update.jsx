import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'

//Vista para editar un producto
const Update= () =>{
    //Obtención de la IP local
    const IP = process.env.REACT_APP_IP_FRONTEND

    const {id} = useParams(); //Obtención de la URL

    //Variables de estado para actualizar un producto
    const [name, setName] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [description, setDescription] = useState("");

    //Función que permite redirigir hacia una URL específica
    const navigate = useNavigate();
    

    //useEffect para cargar la información del backend
    useEffect(()=>{
        axios.get('http://'+IP+':5000/api/video/'+id)
        .then(res=>{setName(res.data.name); setVideoURL(res.data.videoURL); setDescription(res.data.description)})
        .catch(err => console.log(err))
    },[IP,id])

    //Función para realizar una petición PUT y actualizar un producto
    const handlerUpdateVideo = e => {
        e.preventDefault();
        axios.put('http://'+IP+':5000/api/video/'+id, {name, videoURL, description})
        .then(res => {console.log(res); navigate('/video/'+id);})
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            <h1>Updating a video publication</h1>
            <form onSubmit={handlerUpdateVideo} className='seccion_video'>
                <div className='fondo'>
                    <label>Name: </label>
                    <input className='val_input' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <br/>
                <div className='fondo'>
                    <label>Video URL: </label>
                    <input className='val_input' type="text" onChange={(e)=>setVideoURL(e.target.value)} value={videoURL}/>
                </div>
                <br/>
                <div className='fondo'>
                    <label>Description: </label>
                    <input className='val_input' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br/>
                <input className='btn_detail' type="submit" value="Update"/>
                <button className='btn_delete' onClick={e=>navigate('/')}>Home</button>
            </form>
        </div>
    );
}

export default Update;