import React from 'react'
import '../styles/Screen.css';

const Screen = (props) => {

    return(
        <div className = "screen">
            <div className = 'user-input-screen'>
                <h1 className = "input">{props.input}</h1><div className="ticker">|</div>
            </div>
            <div className = 'result-screen'>
                <h1 className = "result">{props.result}</h1>
            </div>
        </div>
    );
}

export default Screen;