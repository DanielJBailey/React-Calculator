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
        return {
            input: obj.input + buttonName
        }
    }

    //BASIC OPERATOR BUTTONS /, +, -, x
    if(Operator(buttonName) && obj.input.length !== 0) {
        //get user input
        let input = obj.input;
        let calc = obj.calc;

        switch(buttonName) {
            case "/":
                if(LastOperator(input)) {
                    input = "";
                    input += "/";
                    return {
                        input: input
                    }
                } else if(!LastOperator(input)) {
                    calc += input;
                    input = "";
                    input += "/"
                    return {
                        input: input,
                        calc: calc
                    }
                }
                break;
            case "x":
                if(LastOperator(input)) {
                    input = "";
                    input += "x";
                    return {
                        input: input
                    }
                } else if(!LastOperator(input)) {
                    calc += input;
                    input = "";
                    input += "x"
                    return {
                        input: input,
                        calc: calc
                    }
                }
                break;
            case "-":
                if(LastOperator(input)) {
                    input = "";
                    input += "-";
                    return {
                        input: input
                    }
                } else if(!LastOperator(input)) {
                    calc += input;
                    input = "";
                    input += "-"
                    return {
                        input: input,
                        calc: calc
                    }
                }
                break;
            case "+":
                if(LastOperator(input)) {
                    input = "";
                    input += "+";
                    return {
                        input: input
                    }
                } else if(!LastOperator(input)) {
                    calc += input;
                    input = "";
                    input += "+"
                    return {
                        input: input,
                        calc: calc
                    }
                }
                break;
            default:
                //don't do anything
                break;
        }
    }

    //PERIOD BUTTON
    if(buttonName === ".") {
        let input = obj.input;
        if(input.length > 0) {
            if(!input.includes(".")) {
                return {
                    input: obj.input + "."
                }
            }
        }
    }


};