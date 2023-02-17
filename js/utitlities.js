// get input value
function getInputValue(id){
    return document.getElementById(id).value;
}

// set input value

function setInputValue(id, value) {
    const targetElement = document.getElementById(id);
    targetElement.value = value;
}