const firstnum = 0;
const operator = '';
const secondnum = 0;
let displayValue = ''

const container = document.getElementById('container')
const calcDisplay = document.createElement('div')
const calcBody = document.createElement('div')
const digitsCont = document.createElement('div')
const operCont = document.createElement('div')

calcBody.className = 'calcBody'
calcDisplay.className = 'display'
digitsCont.className ='digitsContainer'
operCont.className ='operContainer'

numBtns = ['7','8','9','4','5','6','1','2','3','0','.']

numBtns.forEach((number) => {
  const button = document.createElement('button');
  button.textContent = number;
  button.addEventListener('click', function() {
    displayValue += number;
    calcDisplay.textContent = displayValue;
  });
  digitsCont.appendChild(button);
});

const clearBtn = document.createElement('button');
clearBtn.textContent = 'C';
clearBtn.addEventListener('click', function() {
  displayValue = '';
  calcDisplay.textContent = displayValue;
})
digitsCont.appendChild(clearBtn)

operBtns = ['+','-','x','/']

operBtns.forEach((operator) => {
  const button = document.createElement('button');
  button.textContent = operator;
  button.addEventListener('click', function() {
    displayValue += ` ${operator} `;
    calcDisplay.textContent = displayValue;
  });
  operCont.appendChild(button);
});

const equalBtn = document.createElement('button');
equalBtn.textContent = '=';
equalBtn.addEventListener('click', function() {
  displayValue = getResult()
  calcDisplay.textContent = displayValue;

})
operCont.appendChild(equalBtn);


calcBody.appendChild(digitsCont);
calcBody.appendChild(operCont)
container.appendChild(calcDisplay);
container.appendChild(calcBody);




// Functions

function operate(operator, num1, num2) {
    let first = parseInt(num1);
    let second = parseInt(num2)
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '*') {
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    }
}

function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function sum(numArray) {
  return numArray.reduce((total, currentVal) => total + currentVal, 0);
  
  /*
  let total = 0;
	numArray.forEach((num, index) => {
    total += num;
  });
  return total;
  */
};

function multiply(num1, num2) {
    return num1 * num2;
}

function multiplyMulti(numArray) {
  return numArray.reduce((product, currentVal) => product * currentVal, 0);
  /*
  let product = 1;
	numArray.forEach((num, index) => {
    product *= num;
  });
  return product;
  */
};

function divide(num1, num2) {
    return num1 / num2;
}

function power(base, exponent) {
	return base**exponent;
};

function factorial(num) {
	if (num === 0) {
    return 1;
  } else if (num < 0) {
    return 'undefined'
  }
  result = 1
  for (i = num; i > 0; i--) {
    result *= i
  }
  return result
};

function pressButton(x) {
  displayValue += x;
}

function getResult() {
    spltVal = displayValue.split(' ');
    return operate(spltVal[1], spltVal[0], spltVal[2])
}

function clearDisplay() {
    displayValue = '';
}