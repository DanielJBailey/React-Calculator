import React from 'react'
import '../styles/Screen.css';

const Screen = (props) => {
    return(
        <div className = "screen">
            <div className = 'user-input-screen'>
                {props.input}
            </div>
            <div className = 'result-screen'>
                {props.result}
            </div>
        </div>
    );
}

export default Screen;