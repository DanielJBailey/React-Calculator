export default function Calculate(obj, buttonName) {

    //if user input is AC
    if(buttonName === "AC") {
        return {
            result:  0,
            input:  [],
            calc: []
        }
    }

    //Numeric inputs
    if(!isNaN(buttonName)) {
        return {
            input: obj.input + buttonName
        }
    }

    if(buttonName === "DEL") {
    }


};