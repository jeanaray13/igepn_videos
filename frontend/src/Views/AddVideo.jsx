import React from 'react';
import Add from '../Components/Add';
import {useNavigate} from 'react-router-dom';
import '../App.css'

const AddVideo = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div>
            <h1>Add Video</h1>
            <button className='btn_add' onClick={e=>navigate('/')}>Dashboard</button>
        </div>
        <br/>
        <div>
           <Add/>
        </div>
        </>
    );
}

export default AddVideo;