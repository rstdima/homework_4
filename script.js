//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let square = +prompt('Введите число для возведения в квадрат');
let cube = +prompt('Введите число для возведения в куб');
let result = 0;

function squarePlusCube(x, y) {
   result = (x ** 3) + (y ** 3);
   console.log(result)
}
squarePlusCube(square, cube);

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно

let numbers = +prompt('Введите число:');

function сheckingNumber() {
   if (numbers >= 0 || numbers < 0) {
      console.log(`Вы ввели число ${numbers}`)
   } else {
      console.log('Исправьте, значение задано неверно');
   }
}
сheckingNumber();

// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userMoney = +prompt('Введите вашу заработную плату:');

let salary = (money) => money = money * 0.87; // Вычитаем 13% налога
   

console.log(`Размер заработной платы за вычетом налогов равен ${salary(userMoney)}`);


//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numberOne = +prompt('Введите первое число:');
let numberTwo = +prompt('Введите второе число:');
let numberThree = +prompt('Введите третье число:');


function maxNumber(a, b, c) {
   if(a > b && b > c) {
      console.log(`максимально число ${max}`);
   } else if  (b > a && b > c){
      console.log(`максимальное число ${numberTwo}`);
   } else {
      console.log(`максимальное число ${numberThree}`);
   }
}
maxNumber();