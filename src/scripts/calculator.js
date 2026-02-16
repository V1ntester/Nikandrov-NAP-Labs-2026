window.onload = function() {
    let a = '';
    let b = '';
    let expressionResult = '';
    let selectedOperation = null;

    const outputElement = document.getElementById("result");
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }
    });

    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return;
        selectedOperation = 'x';
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return;
        selectedOperation = '+';
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return;
        selectedOperation = '-';
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return;
        selectedOperation = '/';
    }

    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    document.getElementById("btn_op_sign").onclick = function() { 
        if (!selectedOperation) {
            a = (-parseFloat(a)).toString();
            expressionResult = a;
        } else {
            b = (-parseFloat(b)).toString();
            expressionResult = b;
        }

        outputElement.innerHTML = expressionResult
    }

    document.getElementById("btn_op_percent").onclick = function() { 
        if (!selectedOperation) {
            expressionResult = (parseFloat(a) / 100).toString();
            a = expressionResult;
        } else {
            const percentOfA = (parseFloat(a) * parseFloat(b)) / 100

            switch(selectedOperation) {
                case '+':
                    expressionResult = (parseFloat(a) + percentOfA).toString();
                    break;
                case '-':
                    expressionResult = (parseFloat(a) - percentOfA).toString();
                    break;
                case 'x':
                    expressionResult = (parseFloat(a) * (parseFloat(b) / 100)).toString();
                    break;
                case '/':
                    expressionResult = (parseFloat(a) / (parseFloat(b) / 100)).toString();
                    break;
            }
        }

        a = expressionResult;
        b = '';
        selectedOperation = null;
        
        outputElement.innerHTML = expressionResult
    }

    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        let isBinaryOperator = true;
        switch(selectedOperation) { 
            case 'x':
                expressionResult = parseFloat(+a) * parseFloat(+b)
                break;
            case '+':
                expressionResult = parseFloat(+a) + parseFloat(+b)
                break;
            case '-':
                expressionResult = parseFloat(+a) - parseFloat(+b)
                break;
            case '/':
                expressionResult = parseFloat(+a) / parseFloat(+b)
                break;
            default:
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit;
            }
            outputElement.innerHTML = a;
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit;
                outputElement.innerHTML = b;        
            }
        }
    }
}
