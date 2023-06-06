let buttons = document.querySelectorAll(".calculator__button");
let display = document.querySelector(".calculator__total");
let values = document.querySelector(".calculator__values");
let btnAdd = document.querySelector(".calculator__button--add");
let arrayn1 = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent !== "DEL" && button.textContent !== "RESET") {
            display.innerHTML = button.textContent;
            let n1;
            let n2;
            arrayn1.push(display.textContent);
            values.textContent = arrayn1.join("");
            
            if (button.innerHTML === "+") {
                arrayn1.pop();
                n1 = arrayn1.toString().replace(/[, ]/g, "");
                arrayn1 = [];
                arrayn1.push(n1);
                arrayn1.push("+");
            } else if (button.innerHTML === "=") {
                arrayn1.pop();
                n2 = arrayn1.slice(2);
                n2 = n2.map(String);
                n2 = n2.join("");
                let cantEle = arrayn1.length - 2;
                arrayn1.splice(2, cantEle);
                arrayn1.push(n2);
            }

        } else {
            display.innerHTML = "";
            if (button.textContent === "DEL") {

            } else if (button.textContent === "RESET") {


            } else if (button.textContent === "=") {

            }
        }
    });
});

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


