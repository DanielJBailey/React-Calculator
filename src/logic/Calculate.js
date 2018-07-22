import Operator from './Operator';
import LastOperator from './LastOperator';

export default function Calculate(obj, buttonName) {

    //if user input is AC
    if(buttonName === "AC") {
        return {
            result:  0,
            input:  [],
            calc: []
        };
    }

    //DELETE BUTTON
    if(buttonName === "DEL") {
        if(obj.input.length > 0) {
            //get current input
            let number = obj.input;
            //remove last digit from string
            number = number.substring(0, number.length - 1);
            //return new number
            return {
                input: number
            }
        }
    }

    //SQUARE ROOT BUTTON
    if(buttonName === "√") {
        if(obj.input.length > 0) {
            let number = obj.input;
            let square = Math.sqrt(number).toPrecision(3).toString();
            return {
                input: square,
                result: square
            }
        }
    }

    //PERCENTAGE BUTTON
    if(buttonName === "%") {
        if(obj.input.length > 0) {
            let number = obj.input;
            let percent = (number /100).toString();
            
            return {
                input: percent,
                result: percent
            }
        }
    }

    //Numeric inputs
    //test if button is numeric
    if(!isNaN(buttonName)) {
        //return updated string
        return {
            input: obj.input + buttonName
        }
    }

    //BASIC OPERATOR BUTTONS /, +, -, x
    if(Operator(buttonName) && obj.input.length !== 0) {
        //get user input
        let input = obj.input;

        switch(buttonName) {
            case "/":
                //if last operator includes operator
                if(LastOperator(input)){
                    //remove operator from last position
                    input = input.substring(0, input.length - 1);
                    return {
                        //append new operator to string
                        input: input + "/"
                    }
                //if string doesn't contain operator add operator
                } else if (!LastOperator(input)) {
                    return {
                        input: input + "/"
                    }
                }
                break;
            case "x":
                //if last operator includes operator
                if(LastOperator(input)){
                    //remove operator from last position
                    input = input.substring(0, input.length - 1);
                    return {
                        //append new operator to string
                        input: input + "x"
                    }
                //if string doesn't contain operator add operator
                } else if (!LastOperator(input)) {
                    return {
                        input: input + "x"
                    }
                }
                break;
            case "-":
                //if last operator includes operator
                if(LastOperator(input)){
                    //remove operator from last position
                    input = input.substring(0, input.length - 1);
                    return {
                        //append new operator to string
                        input: input + "-"
                    }
                //if string doesn't contain operator add operator
                } else if (!LastOperator(input)) {
                    return {
                        input: input + "-"
                    }
                }
                break;
            case "+":
                //if last operator includes operator
                if(LastOperator(input)){
                    //remove operator from last position
                    input = input.substring(0, input.length - 1);
                    return {
                        //append new operator to string
                        input: input + "+"
                    }
                //if string doesn't contain operator add operator
                } else if (!LastOperator(input)) {
                    return {
                        input: input + "+"
                    }
                }
                break;
            default:
                //don't do anything
                break;
        }
    }


};