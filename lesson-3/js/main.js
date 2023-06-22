

// let sum = 5+5 
// console.log(`sum=${(sum)}`)
  
  
// function sum(a, b) {
//     return a + b;
//   }
  
//   console.log(`1 + 2 = ${sum(1, 2)}`);// 1+2=3

// var x = new String('Привет, мир');

// console.log(x.toString()); // Отобразит 'Привет, мир'


// let string = "Keftema barhtni";
// console.log(string.at(-1))
// console.log(string.at(4))
// console.log(string.at(5))





/* Task -1 */

// function isEmpty(str){
//     if(str == ""){
//         return true
//     }
//     return false
// }
// console.log(isEmpty(""))
// console.log(isEmpty("a"))


/* Task - 2 */

// function concatName(firstName, lastName) {
// 	return lastName.concat(', ', firstName)
// }
// console.log(concatName("First", "Last"))




///////////  Home -task//////////


/*  task -1 
Создайте функцию, которая заставляет последний символ
строки повторяться n раз.*/

	// function modifyLast (s,n){

	// 	return s + s.slice(-1).repeat(n - 1)
	// }
	// console.log(modifyLast("Hello", 3))
	// console.log(modifyLast("hey", 6))
			



/* task -2
Создайте функцию, которая принимает строку и возвращает
объединенные первый и последний символ.*/
		
		// function firstLast(name) {
		// let first = name.charAt(0);
		// let last = name.charAt(name.length - 1)
				
		// 		return first + last
		// }
		// console.log(firstLast("ganesh"))
	
/* Task - 3
 Напишите две функции: 1.toInt() : функция для
преобразования строки в целое число. 2.toStr() : функция для
преобразования целого числа в строку.*/

// function toInt(string){
//   return Number(str)
// }
// function toStr(number){
//    return num.toString()
// }
// console.log(toInt("77"))
// console.log(toStr(77))



/* Task -4  
Создайте функцию, которая принимает слово и определяет,
является ли оно множественным или нет. Слово во
множественном числе - это то, которое заканчивается на "s" */


// function isPlural(str){
//    if(str.at(-1)== "s"){
// 	return true
//    }
//    return false
// }
// console.log(isPlural("changes"))
// console.log(isPlural("change"))

/* Task -5 
Создайте функцию, которая принимает строку из символов
нижнего регистра и возвращает эту строку в обратном порядке и в
верхнем регистре.*/

// function reverseCapitalize(str){
// return str.toUpperCase().split("").reverse().join("")
// }
// console.log(reverseCapitalize("abc"))
// console.log(reverseCapitalize("hellothere"))


/* task - 6 
Создайте функцию, которая принимает строку (имя и
фамилию человека) и возвращает строку с заменой имени и
фамилии*/

// function checkEnding(str1,str2){
//    return str1.slice(str2.length*(-1))==str2
// }
// console.log(checkEnding("abc", "bc"))
// console.log(checkEnding("abc", "d"))
// console.log(checkEnding("feminine", "nine"))


/* Task -8 
Создайте функцию, которая принимает две строки в качестве
аргументов и возвращает количество раз, когда первая строка
(одиночный символ) встречается во второй строке.*/

// function charCount(str1, str2) {
// 	let count = 0;
// 	for (let i=0; i<str2.length; i++) {
// 	if (str2.charAt(i) === str1) {
// 	count++;
// 	}
// 	}
// 	return count;
// }
// console.log(charCount("a", "edabit"))
// console.log(charCount("c", "Chamber of secrets"))
// console.log(charCount("b", "big fat bubble"))


/* Task - 9*/