window.onload = function() {
    let firstNumber = '';
    let secondNumber = '';
    let expressionResult = '';
    let selectedOperation = null;

    const expressionElement = document.getElementById("expression");
    const resultElement = document.getElementById("result");
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    document.getElementById("btn_op_mult").onclick = function() { 
        if (firstNumber === '') return;

        if (selectedOperation === '') selectedOperation = 'x';

        if (firstNumber !== '' && secondNumber !== '') {
            expressionResult = calculateExpression(firstNumber, secondNumber, selectedOperation);

            expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
            firstNumber = expressionResult.toString()
            secondNumber = '';
            resultElement.innerHTML = firstNumber;
        }

        selectedOperation = 'x';
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (firstNumber === '') return;

         if (selectedOperation === '') selectedOperation = '+';

        if (firstNumber !== '' && secondNumber !== '') {
            expressionResult = calculateExpression(firstNumber, secondNumber, selectedOperation);

            expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
            firstNumber = expressionResult.toString()
            secondNumber = '';
            resultElement.innerHTML = firstNumber;
        }

         selectedOperation = '+';
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (firstNumber === '') return;

        if (selectedOperation === '') selectedOperation = '-';

        if (firstNumber !== '' && secondNumber !== '') {
            expressionResult = calculateExpression(firstNumber, secondNumber, selectedOperation);

            expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
            firstNumber = expressionResult.toString()
            secondNumber = '';
            resultElement.innerHTML = firstNumber;
        }

        selectedOperation = '-';   
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (firstNumber === '') return;

        if (selectedOperation === '') selectedOperation = '/';

        if (firstNumber !== '' && secondNumber !== '') {
            expressionResult = calculateExpression(firstNumber, secondNumber, selectedOperation);

            expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
            firstNumber = expressionResult.toString()
            secondNumber = '';
            resultElement.innerHTML = firstNumber;
        }

        selectedOperation = '/';
    }

    document.getElementById("btn_op_clear").onclick = function() { 
        firstNumber = '';
        secondNumber = '';
        selectedOperation = '';
        expressionResult = '';
        expressionElement.innerHTML = '';
        resultElement.innerHTML = 0;
    }

    document.getElementById("btn_op_sign").onclick = function() { 
        if (!selectedOperation) {
            firstNumber = (-parseFloat(firstNumber)).toString();
            expressionResult = firstNumber;
        } else {
            secondNumber = (-parseFloat(secondNumber)).toString();
            expressionResult = secondNumber;
        }

        resultElement.innerHTML = expressionResult;
    }

    document.getElementById("btn_op_percent").onclick = function() { 
        if (!selectedOperation) {
            expressionResult = (parseFloat(firstNumber) / 100).toString();

            firstNumber = expressionResult;
        } else {
            let percentOfA = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;

            switch(selectedOperation) {
                case '+':
                    expressionResult = (parseFloat(firstNumber) + percentOfA).toString();
                    break;
                case '-':
                    expressionResult = (parseFloat(firstNumber) - percentOfA).toString();
                    break;
                case 'x':
                    expressionResult = (parseFloat(firstNumber) * (parseFloat(secondNumber) / 100)).toString();
                    break;
                case '/':
                    expressionResult = (parseFloat(firstNumber) / (parseFloat(secondNumber) / 100)).toString();
                    break;
            }
        }

        firstNumber = expressionResult;
        secondNumber = '';
        selectedOperation = null;
        resultElement.innerHTML = expressionResult;
    }

    document.getElementById("btn_op_equal").onclick = function() { 
        if (firstNumber === '' || secondNumber === '' || !selectedOperation)
            return;

        expressionResult = calculateExpression(firstNumber, secondNumber, selectedOperation);

        expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
        firstNumber = expressionResult.toString();
        secondNumber = '';
        selectedOperation = null;
        resultElement.innerHTML = firstNumber;
    }

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !firstNumber.includes(digit))) { 
                firstNumber += digit;
            }
            resultElement.innerHTML = firstNumber;
        } else {
            if ((digit != '.') || (digit == '.' && !secondNumber.includes(digit))) { 
                secondNumber += digit;
                resultElement.innerHTML = secondNumber;        
            }
        }
    }

    function calculateExpression(firstValue, secondValue, operation) {
        switch(operation) { 
            case 'x':
                return parseFloat(firstValue) * parseFloat(secondValue);
            case '+':
                return parseFloat(firstValue) + parseFloat(secondValue);
            case '-':
                return parseFloat(firstValue) - parseFloat(secondValue);
            case '/':
                return parseFloat(firstValue) / parseFloat(secondValue);
            default:
                return -1;
        }
    }
}
