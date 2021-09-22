let outputscreen = document.getElementById('output-screen');

function display(num){
    return outputscreen.value += num;
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value)
    }
    catch(err){
        outputscreen.value = "Math error"
    }
}

function clear(){
    return outputscreen.value = "";
}

function backspace(){
    // return outputscreen.value = outputscreen.value.substr(0, outputscreen.value.length-1)
    return outputscreen.value = outputscreen.value.slice(0,-1);
}