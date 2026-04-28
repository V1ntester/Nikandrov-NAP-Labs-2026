# Лабораторная работа №3 ("Простое веб-приложение. Верстка")

## Содержание 
1. [Цель](#цель)
2. [План](#план-выполнения)
3. [Структура](#структура-проекта)
4. [Защита](#защита)

## Цель
Цель данной лабораторной работы - знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS, JavaScript. В ходе выполнения работы, вам предстоит продолжить реализовывать простой калькулятор, и затем выполнить задания по варианту.

## План выполнения
1. Инструменты для работы
2. Что такое node, npm и package.json
3. Как работать с html в JS
4. Инициализация проекта
5. Создание главной страницы, подключение bootstrap
6. Простая кнопка на JavaScript
7. Структурирование проекта
8. Верстка главной страницы
9. Верстка страницы продукта

## Структура проекта
```
Nikandrov-NAP-Labs-2026
├─ README.md
└─ src
   ├─ assets
   │  ├─ images
   │  │  ├─ card-4.jpeg
   │  │  ├─ card-5.jpeg
   │  │  ├─ card-6.jpeg
   │  │  └─ card-7.jpeg
   │  └─ models
   │     └─ red-car.glb
   ├─ components
   │  ├─ alert
   │  │  └─ index.js
   │  ├─ back-button
   │  │  └─ index.js
   │  ├─ button
   │  │  └─ index.js
   │  ├─ product
   │  │  └─ index.js
   │  └─ product-card
   │     └─ index.js
   ├─ index.html
   ├─ main.js
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ main
   │  │  └─ index.js
   │  └─ product
   │     └─ index.js
   └─ styles
      └─ style.css

```

## Защита
При защите лабораторной работы было необходимо добавить слайдер для карточек на главной странице и реализовать бегущую строку в alert 

```
<div id="main-page" class="mt-4">
  <div class="container">
    <div id="alert-container"></div>
    <div 
      id="cards-carousel" 
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="hover"
    >
    <div class="carousel-inner" id="cards-row-container"></div>

    <button class="carousel-control-prev" type="button" data-bs-target="#cards-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#cards-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
      </div>

  </div>
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
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
}
```

```
<div class="alert alert-primary alert-marquee" role="alert">
  <div class="scrolling-text">
    ${message}
  </div>
</div>
```

```
.scrolling-text {
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;
  animation: scrollText 15s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
```
