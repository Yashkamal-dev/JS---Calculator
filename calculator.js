let exp = document.querySelector(".exp");
let ans = document.querySelector(".ans");
let answerBox = document.querySelector(".answer");
let expAnsContainer = document.querySelector(".exp-ans-container");

let allClear = document.querySelector(".ac");
let clear = document.querySelector(".c");
let backSpace = document.querySelector(".bs");

let digits = document.querySelectorAll(".num"); // all digits and point

let add = document.querySelector(".add"); //addition button
let sub = document.querySelector(".sub"); //subtraction button
let mul = document.querySelector(".mul"); //multiplication button
let division = document.querySelector(".division"); //division button
let equal = document.querySelector(".equal"); // equals button

let answer, num1, num2, num;
let converter = null;
let op = null;
let firstOp = true;
let equalPress = false;

const cleanUp = () => {
  answer = null;
  num1 = null;
  num2 = null;
  num = null;
  converter = null;
  op = null;
  firstOp = true;
};

// the all clear button to clean exp and ans
allClear.addEventListener("click", () => {
  ans.innerText = "";
  exp.innerText = "";
  answer = null;
  num1 = null;
  num2 = null;
  converter = null;
  op = null;
  firstOp = true;
  answerBox.innerText = "";
});

// the clear button to just clean the working exp
clear.addEventListener("click", () => {
  ans.innerText = "";
  // answer = null;
  // num1 = null;
  // num2 = null;
  // op = null;
});

// the backspace button
backSpace.addEventListener("click", () => {
  let answer = ans.innerText;
  answer = answer.slice(0, -1);
  ans.innerText = answer;
});

// function to print button value in exp box and assiging values to num1 and num2
digits.forEach((button) => {
  button.addEventListener("click", () => {
    // button is each button

    if (equalPress == true) {
      expAnsContainer.classList.remove("exp-ans-container-eq");
      exp.classList.remove("eqexp");
      answerBox.innerText = "";
      exp.innerText = "";
      ans.innerText = "";
      equalPress = false;
    }
    num = button.innerText; // actual digits to be printed
    if (firstOp == true) {
      if (exp.innerText == "") {
        exp.innerText = num;
        num1 = Number(exp.innerText); // assiging number 1
      } else {
        let expValue = exp.innerText;
        exp.innerText = expValue + num;
        num1 = Number(exp.innerText); // assiging number 1
      }
    } else {
      // let count = 1;
      let expNum = exp.innerText;

      if (converter == null) {
        converter = num;
      } else {
        converter = converter + num;
      }
      exp.innerText = expNum + num;
    }
    num2 = Number(converter);

    eachPressCalculator();
  });
});

// function to print answer at each input
const eachPressCalculator = () => {
  if (op == "+") {
    answer = num1 + num2;
    ans.innerText = answer;
  } else if (op == "-") {
    answer = num1 - num2;
    ans.innerText = answer;
  } else if (op == "*") {
    answer = num1 * num2;
    ans.innerText = answer;
  } else if (op == "/") {
    answer = num1 / num2;
    ans.innerText = answer;
  }
};

// the calculator function that is performing tast
const calculator = (currentOperator) => {
  if (op == "+") {
    answer = num1 + num2;
    converter = null;
    // firstOp = false;
    num1 = answer;
    exp.innerText = answer + ` ${currentOperator} `; // currnet operator;
    ans.innerText = "";
  } else if (op == "-") {
    answer = num1 - num2;
    converter = null;
    // firstOp = false;
    num1 = answer;
    exp.innerText = answer + ` ${currentOperator} `; // currnet operator;
    ans.innerText = "";
  } else if (op == "*") {
    answer = num1 * num2;
    converter = null;
    // firstOp = false;
    num1 = answer;
    exp.innerText = answer + ` ${currentOperator} `; // currnet operator;
    ans.innerText = "";
  } else if (op == "/") {
    answer = num1 / num2;
    converter = null;
    // firstOp = false;
    num1 = answer;
    exp.innerText = answer + ` ${currentOperator} `; // currnet operator;
    ans.innerText = "";
  } else {
    // if the operations is just started and no other operator has been used.
    exp.innerText = exp.innerText + ` ${currentOperator} `;
    ans.innerText = "";
  }
};

// function to execute -add(+) calculation
const AddPerformFunction = () => {
  let currentOperator = "+";

  calculator(currentOperator);
  firstOp = false;
  op = "+";
};

// function to execute -subtract(-) calculation
const SubPerformFunction = () => {
  let currentOperator = "-";

  calculator(currentOperator);
  firstOp = false;

  op = "-";
};

// function to execute -multiply(*) calculation
const MulPerformFunction = () => {
  let currentOperator = "*";

  calculator(currentOperator);
  firstOp = false;

  op = "*";
};

// function to execute -division(/) calculation
const DivisionPerformFunction = () => {
  let currentOperator = "/";

  calculator(currentOperator);
  firstOp = false;

  op = "/";
};

// function to execute when -enter or equal(0)
const eqaulPerformFunction = () => {
  if (op == "+") {
    // answer = num1 + num2;
    answerBox.innerText = answer;
    ans.innerText = "";
    expAnsContainer.classList.add("exp-ans-container-eq");
    exp.classList.add("eqexp");
    equalPress = true;
    cleanUp();
  } else if (op == "-") {
    // answer = num1 - num2;
    answerBox.innerText = answer;
    ans.innerText = "";
    expAnsContainer.classList.add("exp-ans-container-eq");
    exp.classList.add("eqexp");
    equalPress = true;
    cleanUp();
  } else if (op == "*") {
    // answer = num1 * num2;
    answerBox.innerText = answer;
    ans.innerText = "";
    expAnsContainer.classList.add("exp-ans-container-eq");
    exp.classList.add("eqexp");
    equalPress = true;
    cleanUp();
  } else if (op == "/") {
    // answer = num1 / num2;
    answerBox.innerText = answer;
    ans.innerText = "";
    expAnsContainer.classList.add("exp-ans-container-eq");
    exp.classList.add("eqexp");
    equalPress = true;
    cleanUp();
  }
};

// addition button event listener
add.addEventListener("click", AddPerformFunction);

// subtraction button event listener
sub.addEventListener("click", SubPerformFunction);

// multiplication button event listener
mul.addEventListener("click", MulPerformFunction);

// division button event listener
division.addEventListener("click", DivisionPerformFunction);

equal.addEventListener("click", eqaulPerformFunction);

// keyBoard input
document.addEventListener("keypress", (evt) => {
  if (
    evt.key == "1" ||
    evt.key == "2" ||
    evt.key == "3" ||
    evt.key == "4" ||
    evt.key == "5" ||
    evt.key == "6" ||
    evt.key == "7" ||
    evt.key == "8" ||
    evt.key == "9" ||
    evt.key == "0" ||
    evt.key == "."
  ) {
    if (equalPress == true) {
      expAnsContainer.classList.remove("exp-ans-container-eq");
      exp.classList.remove("eqexp");
      answerBox.innerText = "";
      exp.innerText = "";
      ans.innerText = "";
      equalPress = false;
    }

    num = evt.key; // actual digits to be printed
    if (firstOp == true) {
      if (exp.innerText == "") {
        exp.innerText = num;
        num1 = Number(exp.innerText); // assiging number 1
      } else {
        let expValue = exp.innerText;
        exp.innerText = expValue + num;
        num1 = Number(exp.innerText); // assiging number 1
      }
    } else {
      // let count = 1;
      let expNum = exp.innerText;

      if (converter == null) {
        converter = num;
      } else {
        converter = converter + num;
      }
      exp.innerText = expNum + num;
    }
    num2 = Number(converter);

    eachPressCalculator();
  } else if (evt.key == "+") {
    // addition funtion
    AddPerformFunction();
  } else if (evt.key == "-") {
    // subtract function
    SubPerformFunction();
  } else if (evt.key == "*") {
    // multiply function
    MulPerformFunction();
  } else if (evt.key == "/") {
    // division function
    DivisionPerformFunction();
  } else if (evt.key == "Enter") {
    // equal function
    eqaulPerformFunction();
  }
});
