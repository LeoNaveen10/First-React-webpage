import React from "react";
import Webcam from "react-webcam";
import { useRef , useState } from "react";


export default function App(){
   const webRef = useRef(null);
     
  let [img,setImage] = useState('');

    const showimage=()=>{
         setImage(webRef.current.getScreenShot());  
    }

    return(
        <div>
            <h1> React webcam usuage</h1>
            <Webcam ref={webRef}/>
            <br/>
            <button onClick={showimage}>
                click to take image
            </button>
            
        <img src={img} alt = "selfie"/>  
        </div>
    );
}