import React, {useState} from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';
import '../App.css'

const Add = () => {
    //Obtención de la IP local
    const IP = process.env.REACT_APP_IP_FRONTEND
    
    //Variables de estado
    const [name, setName] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [description, setDescription] = useState("");

    //Variables de estado para la validación
    const [nameError, setNameError] = useState("");
    const [videoURLError, setVideoURLError] = useState("");
    const [statusCreation, setStatusCreation] = useState("");

    const navigate = useNavigate();

    const onSubmitHandler = e => {
        //Manejador de Submit
        e.preventDefault();
        console.log(name)
        console.log(videoURL)
        console.log(description)
        axios.post('http://'+IP+':5000/api/video/new',{name, videoURL, description})
        .then(res => {
            console.log(res);
            setName("");
            setVideoURL("");
            setDescription("");
            setStatusCreation("Video has been successfully published");
            navigate('/');
        })
        .catch(err => {
            console.log("Petición fallida",err);
            const errorResponse = err.response.data.errors;
            console.log('ERROR RESPONSE',errorResponse)

            if(Object.keys(errorResponse).includes('name')){
                setNameError(errorResponse['name'].message);
            }
            else{
                setNameError("");
            }
            
            if(Object.keys(errorResponse).includes('videoURL')){
                setVideoURLError(errorResponse['videoURL'].message);
            }
            else{
                setVideoURLError("");
            }

        })
    }

    return(
        <form className='seccion_video' onSubmit={onSubmitHandler}>
            <br/>
            <label><b>City: </b></label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <p className='error'>{nameError}</p>
            <br/>
            <label><b>Video URL: </b></label>
            <input type="text" onChange={(e)=>setVideoURL(e.target.value)} value={videoURL}/>
            <p className='error'>{videoURLError}</p>
            <br/>
            <label><b>Description: </b></label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>

            <p className='creation'>{statusCreation}</p>
            <input className='btn_delete' type="submit" value="Add Video"/>
        </form>
    )
}

export default Add;