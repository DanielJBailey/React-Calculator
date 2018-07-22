export default function LastOperator(string) {
    //test last character for "/"
    if(string[string.length - 1] === "/") {
        return true;
    }
    //test last character from "x"
    else if(string[string.length - 1] === "x") {
        return true;
    }
    else if(string[string.length - 1] === "-"){
        return true;
    }
    else if(string[string.length - 1] === "+"){
        return true;
    }
}