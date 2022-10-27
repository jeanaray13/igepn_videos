import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const List = (props) =>{
    const IP = process.env.REACT_APP_IP_FRONTEND

    const {videos, removeFromDom} = props;
    const navigate = useNavigate();

    const deleteVideo = videoID =>{
        //Código para hacer una petición Delete que borre al usuario con identificador userID
        axios.delete('http://'+IP+':5000/api/video/'+videoID)
        .then(res => removeFromDom(videoID))
        .catch(err => console.log(err))
    }

    return(
        <div>
            {
                videos.map((video,idx)=> {
                    return(
                        <div className='seccion_video' key={idx}>
                            <h1>{video.name}</h1>
                            <video width="auto" height="auto" controls>
                                <source src={video.videoURL} type="video/mp4"/>
                            </video>
                            <br/>
                            <p>{video.description}</p>
                            <button className='btn_detail' onClick={e=> navigate('/video/'+video._id)}>View Detail</button>
                            <button className='btn_delete' onClick={e=>{deleteVideo(video._id)}}>Delete Video</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;