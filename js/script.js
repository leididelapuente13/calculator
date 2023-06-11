let buttons = document.querySelectorAll(".calculator__button");
let display = document.querySelector(".calculator__total");
let values = document.querySelector(".calculator__values");
let btnEquals = document.querySelector(".calculator__button--equals");
let btnReset = document.querySelector(".calculator__button--reset");
let btnDel = document.querySelector(".calculator__button--delete");
let btnPoint = document.querySelector(".calculator__button--point");
let themesContainer = document.querySelector(".header__container-themes");
let arrayValues = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let array = displayValues(button);
        let res = operate(button, array, btnEquals);
    });
});

btnReset.addEventListener("click", reset);

btnPoint.addEventListener("click", () => {
    let clicked = false;
    if (!clicked) {
        btnPoint.disabled = true;
        clicked = true;
    }
});

function reset() {
    arrayValues = [];
    array = [];
    if (clicked === true) {
        btnPoint.disabled = false;
        clicked = false;
    }
    display.innerHTML = "";
    values.innerHTML = "";
}

function displayValues(button) {
    if (button.textContent !== "DEL" && button.textContent !== "RESET") {
        display.innerHTML = button.textContent;
        arrayValues.push(display.innerHTML);
        values.textContent = arrayValues.join("");
    }

    return arrayValues;
}

btnDel.addEventListener("click", () => {
    arrayValues.pop();
    if (arrayValues.length === 0) {
        display.innerHTML = "";
    }
    values.innerHTML = arrayValues.join("");
});

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
    let result = 0;
    let contS = 0;
    let arrayRes;
    if (button.innerHTML === "+") {
        contS++;
        clicked = false;
        btnPoint.disabled = false;
        arrayRes = sliceArray(array, "+");
        btnEquals.addEventListener("click", () => {
            arrayRes = sliceArray(array, "+");
            result = add(arrayRes[0], arrayRes[1]);
            validate(result);
            arrayValues = [];
            arrayValues.push(result);
        });
    } else if (button.innerHTML === "-") {
        clicked = false;
        btnPoint.disabled = false;
        btnEquals.addEventListener("click", () => {
            arrayRes = sliceArray(array, "-");
            result = subtract(arrayRes[0], arrayRes[1]);
            validate(result);
            arrayValues = [];
            arrayValues.push(result);
        });
    } else if (button.innerHTML === "/") {
        clicked = false;
        btnPoint.disabled = false;
        btnEquals.addEventListener("click", () => {
            arrayRes = sliceArray(array, "/");
            if (arrayRes[1] === 0) {
                result = "∞";
            } else {
                result = division(arrayRes[0], arrayRes[1]);
            }
            displayResult(result);
            arrayValues = [];
            arrayValues.push(result);
        });
    } else if (button.innerHTML === "*") {
        clicked = false;
        btnPoint.disabled = false;
        btnEquals.addEventListener("click", () => {
            arrayRes = sliceArray(array, "*");
            result = multiplication(arrayRes[0], arrayRes[1]);
            validate(result);
            arrayValues = [];
            arrayValues.push(result);
        });
    }

    return arrayValues;
}

function performAddition(num1, num2) {
    result = add(num1, num2);
    validate(result);
    arrayValues = [];
    arrayValues.push(result);
}

function displayResult(result) {
    values.innerHTML = "";
    display.innerHTML = result;
}

function afterResult(array, result) {
    array = [];
    array.push(result);
}

function validate(result) {
    if (isNaN(result)) {
        values.innerHTML = "";
        display.innerHTML = "invalid expression";
    } else {
        displayResult(result)
    }
}
let linkStyle = document.querySelector(".link-style")
let counter = 1;
themesContainer.addEventListener("click", () => {

    if (counter === 2) {
        themesContainer.style.justifyContent = "center";
        linkStyle.href = "css/theme2.css";
    } else if (counter === 3) {
        themesContainer.style.justifyContent = "flex-end";
        linkStyle.href = "css/theme3.css";
    } else if (counter > 3) {
        counter = 1;
        themesContainer.style.justifyContent = "flex-start";
        linkStyle.href = "css/theme1.css";
    }

    counter++;
});


