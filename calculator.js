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

// accessing each button individually for keyboard animation styling
// let btn = document.querySelectorAll(".btn")

let Zero = document.querySelector("#zero");
let One = document.querySelector("#one");
let Two = document.querySelector("#two");
let Three = document.querySelector("#three");
let Four = document.querySelector("#four");
let Five = document.querySelector("#five");
let Six = document.querySelector("#six");
let Seven = document.querySelector("#seven");
let Eight = document.querySelector("#eight");
let Nine = document.querySelector("#nine");
let Dot = document.querySelector("#dot");

let answer, num1, num2, num;
let converter = null;
let op = null;
let firstOp = true;
let equalPress = false;
let secondOperator = false;

const cleanUp = () => {
  answer = null;
  num1 = null;
  num2 = null;
  num = null;
  converter = null;
  op = null;
  firstOp = true;
};

let allClearFunction = () => {
  ans.innerText = "";
  exp.innerText = "";
  answer = null;
  num1 = null;
  num2 = null;
  converter = null;
  op = null;
  firstOp = true;
  answerBox.innerText = "";
  secondOperator = false;
};

// the all clear button to clean exp and ans
allClear.addEventListener("click", allClearFunction);

// clear button arrow function
const clearFunction = () => {
  let expression = exp.innerText;
  let statment = "";
  let n = expression.length;

  for (let i = 0; i < n; i++) {
    if (
      expression[i] == "+" ||
      expression[i] == "-" ||
      expression[i] == "*" ||
      expression[i] == "/"
    ) {
      op = null;
      ans.innerText = "";
      statment = statment + expression[i];
      converter = null;
      num2 = null;
      firstOp = true;
      secondOperator = false;
      break;
    } else {
      statment = statment + expression[i];
      exp.innerText = statment;
    }
  }
};

// the clear button to just clean the num2
clear.addEventListener("click", clearFunction);

// the backspace button event function
const backSpaceFunction = () => {
  if (secondOperator == false) {
    // the block for num1

    num1 = num1.toString();
    num1 = num1.slice(0, -1);
    num1 = Number(num1);

    // console.log)()
  } else {
    // the block for num2

    num2 = num2.toString();
    num2 = num2.slice(0, -1);
    num2 = Number(num2);
    converter = converter.slice(0, -1);

    eachPressCalculator();

    let tester = exp.innerText;
    let lastChar = tester[tester.length - 1];

    if (lastChar == "+") {
      op = null;
      ans.innerText = "";
      secondOperator = false;
      firstOp = true;
    } else if (lastChar == "-") {
      op = null;
      ans.innerText = "";
      secondOperator = false;
      firstOp = true;
    } else if (lastChar == "*") {
      op = null;
      ans.innerText = "";
      secondOperator = false;
      firstOp = true;
    } else if (lastChar == "/") {
      op = null;
      ans.innerText = "";
      secondOperator = false;
      firstOp = true;
    }
  }
  let expression = exp.innerText;
  expression = expression.slice(0, -1);
  exp.innerText = expression;
};

// the backspace button
backSpace.addEventListener("click", backSpaceFunction);

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
  secondOperator = true;

  calculator(currentOperator);
  firstOp = false;
  op = "+";
};

// function to execute -subtract(-) calculation
const SubPerformFunction = () => {
  let currentOperator = "-";
  secondOperator = true;

  calculator(currentOperator);
  firstOp = false;

  op = "-";
};

// function to execute -multiply(*) calculation
const MulPerformFunction = () => {
  let currentOperator = "*";
  secondOperator = true;

  calculator(currentOperator);
  firstOp = false;

  op = "*";
};

// function to execute -division(/) calculation
const DivisionPerformFunction = () => {
  let currentOperator = "/";
  secondOperator = true;

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

// adding the keyboard input animation styling
document.addEventListener("keydown", (evt) => {
  if (evt.key == "0") {
    Zero.classList.add("active");
  } else if (evt.key == "1") {
    One.classList.add("active");
  } else if (evt.key == "2") {
    Two.classList.add("active");
  } else if (evt.key == "3") {
    Three.classList.add("active");
  } else if (evt.key == "4") {
    Four.classList.add("active");
  } else if (evt.key == "5") {
    Five.classList.add("active");
  } else if (evt.key == "6") {
    Six.classList.add("active");
  } else if (evt.key == "7") {
    Seven.classList.add("active");
  } else if (evt.key == "8") {
    Eight.classList.add("active");
  } else if (evt.key == "9") {
    Nine.classList.add("active");
  } else if (evt.key == ".") {
    Dot.classList.add("active");
  } else if (evt.key == "Escape") {
    allClear.classList.add("active");

    // ac button input from keyboard
    allClearFunction();
  } else if (evt.key == "`") {
    clear.classList.add("active");

    // clear button input from keyboard
    clearFunction();
  } else if (evt.key == "/") {
    division.classList.add("active");
  } else if (evt.key == "Backspace") {
    backSpace.classList.add("active");

    // bs button input from keyboard
    backSpaceFunction();
  } else if (evt.key == "*") {
    mul.classList.add("active");
  } else if (evt.key == "-") {
    sub.classList.add("active");
  } else if (evt.key == "+") {
    add.classList.add("active");
  } else if (evt.key == "Enter") {
    equal.classList.add("active");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key == "0") {
    Zero.classList.remove("active");
  } else if (evt.key == "1") {
    One.classList.remove("active");
  } else if (evt.key == "2") {
    Two.classList.remove("active");
  } else if (evt.key == "3") {
    Three.classList.remove("active");
  } else if (evt.key == "4") {
    Four.classList.remove("active");
  } else if (evt.key == "5") {
    Five.classList.remove("active");
  } else if (evt.key == "6") {
    Six.classList.remove("active");
  } else if (evt.key == "7") {
    Seven.classList.remove("active");
  } else if (evt.key == "8") {
    Eight.classList.remove("active");
  } else if (evt.key == "9") {
    Nine.classList.remove("active");
  } else if (evt.key == ".") {
    Dot.classList.remove("active");
  } else if (evt.key == "Escape") {
    allClear.classList.remove("active");
  } else if (evt.key == "`") {
    clear.classList.remove("active");
  } else if (evt.key == "/") {
    division.classList.remove("active");
  } else if (evt.key == "Backspace") {
    backSpace.classList.remove("active");
  } else if (evt.key == "*") {
    mul.classList.remove("active");
  } else if (evt.key == "-") {
    sub.classList.remove("active");
  } else if (evt.key == "+") {
    add.classList.remove("active");
  } else if (evt.key == "Enter") {
    equal.classList.remove("active");
  }
});
