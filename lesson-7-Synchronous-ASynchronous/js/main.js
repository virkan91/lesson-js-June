


// SYNCHRONOUS code 

// let box =document.querySelector('box') // 1 step



console.log("one")  // SYNCHRONOUS code  


setTimeout(()=>{ 
    console.log('salom')   // ASYNCHRONOUS code 
  }, 2000)



console.log("two") // SYNCHRONOUS code 





   //ansy  code

setTimeout(()=>{   // setTimeout - 2 параматр мегира (1.callbacks(функция) 2-юмш Ожидание минисикунд мегира) 
  console.log('salom')
}, 2000)

setTimeout - мтоды dom-ай


//Метод setInterval имеет такой же синтаксис как setTimeout:

//Oтличие этого метода от setTimeout в том, что функция запускается не один раз, а периодически через указанный интервал времени.

//Чтобы остановить дальнейшее выполнение функции, необходимо вызвать clearInterval(timerId).


// повторить с интервалом 2 секунды

let timerId = setInterval(() =>{
    console.log('tick')
}, 2000);


// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); 
    console.log('stop'); 
}, 5000);











