

/* Task - 1 */

// function sum (num){
//      if(num === 0){
//         return 0
//      }
//      return num + sum(num -1)
// }
// console.log(sum(5))



/* Task -2 */

// function factarial(num){
//        if(num == 0){
//            return 1;
//        }
//        return num * factarial(num - 1)
//    }
//    console.log(factarial(5));
//    console.log(factarial(4));
//    console.log(factarial(2));


/* task - 3 */

// function doubleFactarial(num){
//    if(num < 2){
//    return 1;
//    }
//    return num * doubleFactarial(num - 2)
// }
// console.log(doubleFactarial(0))
// console.log(doubleFactarial(9))


/* Task - 4*/

//  function fibonacci(n){
//        if(n < 2){
//            return n;
//        }
   
//        return fibonacci(n - 1) + fibonacci(n - 2)
//    }
//    console.log(fibonacci(5));


/* task -5  */

// function sumDigit(n) {

//  if (n <= 0) {
//     return n;
//   } 
//   return n % 10 + sumDigit(Math.floor(n / 10));
  
// }
//  console.log(sumDigit(111));
//  console.log(sumDigit(222));


/* Task - 6
Учитывая число, вернуть общую сумму этого числа,
умноженную на каждое число от 1 до 10. */

// function summultiSumDigit(n) {
//  if (n <= 0) {
//     return n;
//   } 
//   
  
// }
//  console.log(multiSum(111));
//  console.log(multiSum(222));


/* task -7 length string */

// function length(str,num=0) {
// 	if(str === num){
//       return 0
//    } 
// 	return length(str,num + 1);
// }
// console.log(length(apple))




/* task -8  pow*/

//  function pow(x,n){
//   if(n == 1){
//    return x
//   }
//   return x * pow(x,n-1)
//  }
//  console.log(pow(2,3))



/* task 9 createMultiplier
Напишите функцию, которая возвращает другую функцию,
которая умножает аргумент на переданный при создании
замыкания множитель*/


// function createMultiplier(num){
//    return (num1)=>{
//       return num*num1
//    }
// }
// const double = createMultiplier(2)
// console.log(double(2))
// console.log(double(6))



/* task 10 Closure - addFive
Напишите функцию, которая принимает число и возвращает
функцию, которая при каждом вызове увеличивает аргумент на
заданное число*/


// function addFive(num){
//  return (num1) =>{
//      return num += num1
//  }
// }
// const five = addFive(5)
// console.log(five(10))
// console.log(five(10))
// console.log(five(30))


/* task 11 
Напишите функцию, которая принимает число и возвращает
новую функцию, которая принимает еще одно число и
возвращает сумму этих двух чисел. Используйте замыкание*/


// function createAdder(num){
//    return (num1)=>{
//       return num + num1
//    }
// }
// const add5 =createAdder(5)
// console.log(add5(3))
// console.log(add5(7))
// console.log(add5(-5))


/* task 12 */

// function product(n1,n2){
//    return function(m1,m2){
//       return function(s1,s2){
//          return n1*m1*s1+n2*m2*s2
//       }
//    }
// }
// console.log(product(1,2)(1,1)(2,3))
// console.log(product(10,2)(5,0)(2,3))
// console.log(product(1,2)(2,3)(3,4))



/*  PRACTIC - 16/06/2023*/

// TASK -1 

// function sumNambers(num1=0){
//    return (num2=0)=>{
//       return (num3=0)=>{
//          return(num4=0)=>{
//             return(num5=0)=>{
//                return(num6=0)=>{
//                   return num1+num2+num3+num4+num5+num6;
//                }
               
//             }
//          }
//       }
//    }
// }
// console.log(sumNambers(2)(3)(4)()()(6))
// console.log(sumNambers(1)(3)()()()(6))


///  Task -2 

// function OddishOrEvenish(num){
//    sum = 0;
//    for(let i = num; i > 0; i = Math.floor(i/10)){
//       sum += i%10;
//    }

//    //return sum;

//    if(sum % 2 == 0){
//       return "Evenish";
//    }
//    return "Oddish";
// }
// console.log(OddishOrEvenish(43))
//console.log(OddishOrEvenish(43))



/* Task -3 */

// function add_suffix(suffix) {
//   return function(suf){
//    return suf + suffix
//   }	
// }
// const addly = add_suffix("ly")
// console.log(addly("hopeless"))
// const addless = add_suffix("less")
// console.log (addless("fear"))


/* Task - 4*/

// function oddisOrEneish(num) {
//    let a=false
//  for (let i = num; i > 0; i = Math.floor(i / 10)) {
//    let remainder = i % 10;
//    if (remainder==7) {
//        a=true
//    }
//  }
//  return a?"Boom":"Relax"
// }
// console.log(oddisOrEneish(7));
// console.log(oddisOrEneish(56));
// console.log(oddisOrEneish(9874));

// function sumDigits(n) {
//    var count = 0;
//    if (n >= 1) ++count;
 
//    while (n / 10 >= 1) {
//      n /= 10;
//      ++count;
//    }
 
//    return count;
//  }
 
 

//  function sumDigits(num) {
// 	let cnt = 1;
// 	while (num >= 10) {
// 		num = num / 10;
// 		cnt++;
// 	}
// 	return cnt;
// }
// console.log(sumDigits(13434));




///  Home -task - 17/03/2023

function gasoline(x,y,z){
   let sum = Math.floor((x-z)/y)
    return sum
    /*return function(y){
      return function(z){
         return Math.floor((x-z)/y)
      }
    }*/
}
//const ga = gasoline(x,y,z)
console.log(gasoline(2000,53,72))