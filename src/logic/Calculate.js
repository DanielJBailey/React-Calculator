export default function Calculate(obj, buttonName) {

    //if user input is AC
    if(buttonName === "AC") {
        return {
            result:  0,
            input:  [],
            calc: []
        };
    }

    //Numeric inputs
    //test if button is numeric
    if(!isNaN(buttonName)) {
        //return updated string
        return {
            input: obj.input + buttonName
        }
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
            let square = Math.sqrt(number).toPrecision(3);
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
            let percent = number /100;
            
            return {
                input: percent,
                result: percent
            }
        }
    }


};