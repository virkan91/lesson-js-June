


// SYNCHRONOUS code 

// let box =document.querySelector('box') // 1 step



// console.log("one")  // SYNCHRONOUS code  


// setTimeout(()=>{ 
//     console.log('salom')   // ASYNCHRONOUS code 
//   }, 2000)



// console.log("two") // SYNCHRONOUS code 





   //ansy  code

// setTimeout(()=>{   // setTimeout - 2 параматр мегира (1.callbacks(функция) 2-юмш Ожидание минисикунд мегира) 
//   console.log('salom')
// }, 2000)

// setTimeout - мтоды dom-ай


//Метод setInterval имеет такой же синтаксис как setTimeout:

//Oтличие этого метода от setTimeout в том, что функция запускается не один раз, а периодически через указанный интервал времени.

//Чтобы остановить дальнейшее выполнение функции, необходимо вызвать clearInterval(timerId).


// повторить с интервалом 2 секунды

// let timerId = setInterval(() =>{
//     console.log('tick')
// }, 2000);


// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); 
//     console.log('stop'); 
// }, 5000);



// function promiseData(url){
//     return new Promise ((resolve,reject)=>{ // Promise - 2 параматр мегира (1.callbacks(функция) 2-юмш resolte ва reject)
//         fetch(url) // методи js
//         .then((response)=>response.json()) // json ай стринг бай обект мегардона!
//         .then((data)=>resolve(data))
//         .catch((erorr)=>reject(erorr))
//     })
// }

// promiseData('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department')// ссылка ай бек

// .then((data)=>console.log(data)) //resolve
// .catch((erorr)=> console.log(erorr))// 404 (Not Found)



async function get (){
 try{
    let resonse = await fetch("https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department")
    let data = await resonse.json()
    console.log(data)

 } catch (error){
   console.log(error)
 }
}
get()

   // async - синтаксиси функцияи асинхроний
  //  await - ожидание!
  // fetch - API - ра да js шинос мекна (методи js)

// resonse - ответ (джавоб)
  








