

/* task -1 
Создайте функцию, которая принимает массив, содержащий
только числа, и возвращает первый элемент.*/

// function getFirstValue(arr){
//    return arr.at()
   
// }
// console.log(getFirstValue([1,2,3]))
// console.log(getFirstValue([80,5,100]))
// console.log(getFirstValue([-500,0,50]))


/* Task - 2
Учитывая два аргумента, верните массив, содержащий эти два
аргумента.*/

    // function makePair(num1, num2) {
    // 	let arr = ([num1,num2])
    // 	return arr
    // }
    // console.log(makePair(1,2))
    // console.log(makePair(51, 21))


/* Task -3 
Напишите функцию для обратного преобразования массива. */

// function reverse(arr){
//     return arr.reverse()

// }
// console.log(reverse([1, 2, 3, 4]))


/* Task -4 
Помогите исправить все ошибки в функции увеличения
элементов! Предполагается добавить 1 к каждому элементу в
массиве!*/

// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] += 1;
// 	}
// 	return arr;
// }
// console.log(incrementItems([0, 1, 2, 3]))
// console.log(incrementItems([-1, -2, -3, -4]))



/* Task - 5 
Создайте функцию, которая принимает массив и возвращает
последний элемент в массиве.*/

    // function getLastItem(arr){
    //     return arr.at(-1)
    // }
    // console.log(getLastItem([1,2,3]))
    // console.log(getLastItem(["cat", "dog", "duck"]))
    // console.log(getLastItem([true, false, true]))


/* task - 6 
Создайте функцию, которая принимает массив цифр или букв
и возвращает строку.*/

    // function arrayToString(arr){
    //     return arr.join("")
    // }
    // console.log(arrayToString([1, 2, 3, 4, 5, 6]))


/* Task -7
 Напишите функцию, чтобы проверить, содержит ли массив
определенное число. */

// function check(arr){
//     return arr.includes()
// }
// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))


/* Task - 8 
Создайте функцию, которая принимает массив и строку в
качестве аргументов и возвращает индекс строки.*/

// function findIndex(arr,str){
//    return arr.indexOf(str)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))


/* Task - 9 
Создайте функцию для объединения двух целочисленных
массивов.*/

// function concat(arr1,arr2){
//    return arr1.concat(arr2)
// }
// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))


/* Task - 10 
Создайте функцию, которая принимает в качестве параметра
массив "строковых" чисел и возвращает массив чисел.*/

// function toNumberArray(arr) {
// 	return arr.map(Number)
// }
// console.log(toNumberArray(["9.4", "4.2"]))


/* Task - 11
Создайте функцию, которая принимает массив целых чисел и
строк. Преобразуйте целые числа в строки и верните новый
массив. */

// function parseArray(arr){

// }

/* Task -12 
Исправьте код на вкладке "Код", чтобы пройти этот тест
(только синтаксические ошибки). Посмотрите на приведенные
ниже примеры, чтобы получить представление о том, что должна
делать функция.*/

    // function sumArray(arr){
    //   return arr.reduce((a,b) => a+b)
    // }
    // console.log(sumArray([1, 2, 3, 4, 5]))
    // console.log(sumArray([-1, 0, 1]))


/* Task - 13 
Создайте функцию, которая принимает два числа num1, num2
и массив arr и возвращает массив, содержащий все числа в arr,
которые больше num1 и меньше num2.*/


    // function arrBetween(num1,num2,arr){
    //     return arr.filter(arr => arr > num1 && arr < num2)
    // }
    // console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))
    // console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]))
    // console.log(arrBetween(7, 32, [1, 2, 3, 78]))


/* Task - 14 
Создайте функцию, которая принимает массив и возвращает
типы значений (типы данных) в новом массиве.*/

//    function arrayValuesTypes(arr){
//       return arr.map(n => typeof n)
//    }
//    console.log(arrayValuesTypes([1, 2, "null", []]))


/* Task 15 Создайте функцию, которая принимает массив слов и
преобразует его в массив длины каждого слова*/

// function wordLengths(arr){
//     return  arr.map(str => str.length)
// }
// console.log(wordLengths(["hello", "world"]))

// function checkSquareAndCube(arr) {
// 	return Math.cbrt(x)
// }
// checkSquareAndCube([4, 8])
// checkSquareAndCube([16, 48])
// checkSquareAndCube([9, 27])



/* Task - 16 
Создайте функцию, которая принимает массив из двух чисел и
проверяет, равен ли квадратный корень из первого числа
кубическому корню из второго числа.*/

// function checkSquareAndCube(){

// }
// console.log(checkSquareAndCube([4, 8]))

/* Task - 17 Создайте функцию, которая принимает массив с числами и
возвращает массив с элементами, умноженными на два*/

    // function getMultipliedArr(arr){
    //     return arr.map(num => num *2)
    // }
    // console.log(getMultipliedArr([2, 5, 3]))
    // console.log(getMultipliedArr([1, 86, -5]))

/* Task - 18 
Создайте функцию, которая принимает массив и возвращает
сумму всех чисел в массиве.*/

// function getSumOfItems(arr){
//     return arr.reduce((a,b) => a + b )
// }
// console.log(getSumOfItems([2, 7, 4]))
// console.log(getSumOfItems([45, 3, 0]))
// console.log(getSumOfItems([-2, 84, 23]))

/* task - 19 Учитывая букву и массив слов, верните, не появляется ли
буква ни в одном из слов*/

// function forbiddenLetter(arr1, arr2){


// }

/* Task 22 Учитывая массив целых чисел, определите, является ли сумма
его элементов четной или нечетной. Возвращаемое значение
должно быть строкой ("нечетное" или "четное"). Если входной
массив пуст, рассматривайте его как массив с нулем ([0]).*/


    // function evenOrOdd(arr){

    //     let sum =  arr.reduce((a,b)=> a + b, 0)
    //     if(sum%2==0){
    //     return "even"
    //     }
    //     return "odd"
    // }
    // console.log(evenOrOdd([1]))
    // console.log(evenOrOdd([]))
    // console.log(evenOrOdd([0,1,5]))




















///// HOME-TASK /////////


/* TASK 1  */


