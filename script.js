//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let square = +prompt('Введите число для возведения в квадрат');
let cube = +prompt('Введите число для возведения в куб');
let result = 0;

function squarePlusCube(x, y) {
   result = (x ** 3) + (y ** 3);
   console.log(result)
}
squarePlusCube(square, cube);