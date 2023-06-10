let buttons = document.querySelectorAll(".calculator__button");
let display = document.querySelector(".calculator__total");
let values = document.querySelector(".calculator__values");
let btnAdd = document.querySelector(".calculator__button--add");
let btnEquals = document.querySelector(".calculator__button--equals");
let arrayValues = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let array = displayValues(button);
        operate(button, array, btnEquals)
    });
});

function displayValues(button) {
    if (button.textContent !== "DEL" && button.textContent !== "RESET") {
        display.innerHTML = button.textContent;
        arrayValues.push(display.innerHTML);
        values.textContent = arrayValues.join("");
    }

    return arrayValues;
}

function sliceArray(array, ref) {
    let index = array.indexOf(ref);
    let firstHalf = array.slice(0, index);
    let secondHalf = array.slice(index + 1);
    firstHalf = firstHalf.join("");
    secondHalf = secondHalf.join("");
    firstHalf = parseFloat(firstHalf);
    secondHalf = parseFloat(secondHalf);
    let newArray = [firstHalf, secondHalf];
    return newArray;
}

function round(result) {
    let res = result.toString();
    if (res.includes(".")) {
        result = parseFloat(result.toFixed(2));
    }
    return result;
}

function add(num1, num2) {
    let result = 0;
    result = num1 + num2;
    result = round(result);
    return result;
}


function subtract(num1, num2) {
    let result = 0;
    result = num1 - num2;
    result = round(result);
    return result;
}

function division(num1, num2) {
    let result = 0;
    result = num1 / num2;
    result = round(result);
    return result;
}

function multiplication(num1, num2) {
    let result = 0;
    result = num1 * num2;
    result = round(result);
    return result;
}

function operate(button, array, btnEquals) {
    if (button.innerHTML === "+") {
        console.log("sumando...");
        btnEquals.addEventListener("click", ()=>{
            let arrayRes = sliceArray(array, "+");
            console.log(add(arrayRes[0], arrayRes[1]));
        });
    }else if (button.innerHTML === "-") {
        console.log("restando...");
        btnEquals.addEventListener("click", ()=>{
            let arrayRes = sliceArray(array, "-");
            console.log(subtract(arrayRes[0], arrayRes[1]));
        });
    }else if (button.innerHTML === "/") {
        console.log("dividiendo...");
        btnEquals.addEventListener("click", ()=>{
            let arrayRes = sliceArray(array, "/");
            console.log(division(arrayRes[0], arrayRes[1]));
        });
    }else if (button.innerHTML === "*") {
        console.log("multiplicando...");
        btnEquals.addEventListener("click", ()=>{
            let arrayRes = sliceArray(array, "*");
            console.log(multiplication(arrayRes[0], arrayRes[1]));
        });
    }
}




