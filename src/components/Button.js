import React from 'react';
import '../styles/Button.css';

const Button = (props) => {

    return(
    <div>
        <button className="button" id={props.id}>{props.name}</button>
    </div>
    );
    
};

export default Button;