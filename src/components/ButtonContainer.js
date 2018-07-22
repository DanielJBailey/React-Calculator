import React from 'react';
import Button from './Button';
import '../styles/ButtonContainer.css';

const ButtonContainer = (props) => {
    return(
        <div className="button-container">
            <div className="button-row">
                <Button name = "AC"/>
                <Button name = "DEL"/>
                <Button name = "√"/>
                <Button name = "%"/>
            </div>
            <div className="button-row">
                <Button name = "7"/>
                <Button name = "8"/>
                <Button name = "9"/>
                <Button name = "/"/>
            </div>
            <div className="button-row">
                <Button name = "4"/>
                <Button name = "5"/>
                <Button name = "6"/>
                <Button name = "x"/>
            </div>
            <div className="button-row">
                <Button name = "1"/>
                <Button name = "2"/>
                <Button name = "3"/>
                <Button name = "-"/>
            </div>
            <div className="button-row">
                <Button name = "0" id="bottom-left"/>
                <Button name = "."/>
                <Button name = "="/>
                <Button name = "+" id="bottom-right"/>
            </div>
        </div>
    );
};


export default ButtonContainer;