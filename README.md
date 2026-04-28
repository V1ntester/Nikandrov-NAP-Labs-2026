# Лабораторная работа №2 ("Calculator. JavaScript")

## Содержание 
1. [Цель](#цель)
2. [План](#план-выполнения)
3. [Структура](#структура-проекта)
4. [Защита](#защита)

## Цель
 Цель данной лабораторной работы - знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS, JavaScript. В ходе выполнения работы, вам предстоит продолжить реализовывать простой калькулятор, и затем выполнить задания по варианту.

## План выполнения
1. Программирование логики с помощью JavaScript
2. Доступ к HTML-элементам из JavaScript
3. Программирование кнопок калькулятора
4. Запуск калькулятора с помощью LiveServer
5. Задание

## Структура проекта
```
Nikandrov-NAP-Labs-2026
├─ README.md
└─ src
   ├─ assets
   │  └─ background.png
   ├─ calculator.html
   ├─ index.html
   ├─ info.html
   ├─ scripts
   │  └─ calculator.js
   └─ styles
      └─ style.css

```

## Защита
При защите лабораторной работы было необходимо добавить в калькулятор поддержку множественных операций и отображение предыдущей операции, что было реализовано добавлением нового блока в калькулятор и функционала в JS скрипт
```
<div class="result-panel">
  <div id="expression" class="expression"></div>
  <div id="result" class="result">0</div>              
</div>
```

```
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
```

```
expressionElement.innerHTML = firstNumber + ' ' + selectedOperation + ' ' + secondNumber;
firstNumber = expressionResult.toString();
secondNumber = '';
selectedOperation = null;
resultElement.innerHTML = firstNumber;
```
