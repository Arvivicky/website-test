import React, { useState } from "react";
import './Upload.css'

const Upload=()=>{
    const [imageid,setImageUrl]=useState('');
    
    return(
        <div className="uploadcontainer">
        <div className="upload">
            {imageid && <img className="posterimg" src={imageid}/>}
            <div className="uploadcontent">
            <form className="imgform">
                <p className="imagetag">Upload Poster to display
                </p>
                <input className='imglink'
                type="text" 
                name="image"
                value={imageid}
                onChange={(event)=>{setImageUrl(event.target.value)}}
                />
                <button type="submit">Upload</button>
            </form>
            </div>
        </div>
    </div>
    )
}
export default Upload;