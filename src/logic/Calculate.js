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
        //get current input string
        let newInput = obj.input;
        //remove last character from string
        newInput = newInput.substring(0, newInput.length -1);
        //return new string once last character has been removed
        return {
            input: newInput
        };
    }

    //SQUARE ROOT BUTTON
    if(buttonName === "√") {
        let number = obj.input;
        let square = Math.sqrt(number).toPrecision(3);

        return {
            input: square,
            result: square
        }
    }


};