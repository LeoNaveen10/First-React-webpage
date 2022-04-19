import React from 'react';
import ReactDOM from 'react-dom';
import messi from './images/messi.jpg';
import maradona from './images/maradona.png';
import pele from './images/pele.jpg';
import './style.css';
import App from './App';


const Page = ( <h1 style={{textAlign : 'center', fontSize : '60px'}}> Best players of all time</h1> );

const Yes =()=>{

    return(
        <div>
            <App/>
            <ul style={{ fontSize : '100px' }}>
                <li> Messi</li>
                <a href='https://en.wikipedia.org/wiki/Lionel_Messi' target={'blank'}>
                <img src = {messi} alt = "no:1"/>                    
                    </a>

                <li> Maradona</li>
                <a href='https://en.wikipedia.org/wiki/Diego_Maradona' target={'blank'}>
                <img src = {maradona} alt="no:2"/>
                </a>
                
                <li> Pele</li>
                <a href='https://en.wikipedia.org/wiki/Pel%C3%A9' target={'blank'}>
                <img src = {pele} alt="no.3" />
                </a>
                
            </ul>
                
        </div>
    )
}

ReactDOM.render(Page,document.getElementById("ok"));
ReactDOM.render(<Yes/> ,document.getElementById("root"));


