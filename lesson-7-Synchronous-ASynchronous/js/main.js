


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




 let box =document.querySelector('.box')
 let form1 =document.querySelector('.form1')
 let form2 =document.querySelector('.form2')
 let modalEdit =document.querySelector('.modalEdit')

 const API = 'https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department'


   // Добавление 

 form1.onsubmit = (event)=>{
    event.preventDefault();
    console.log(event)

    let newUser={
        title:form1["title"].value,
        description:form1["desc"].value,
    }
    addUser(newUser)
 }


 // get Data 1-ый функция
async function getData (){
    try{
       let {data} = await axios.get(API)
       console.log(data)
       get(data)
   
    } catch (error){
      console.log(error);
    }
   }
 
 /// POSt  -
 async function addUser(newUser){
    try{
    let {data}= await axios.post(API,newUser);
    console.log(data)
    getData()

    }catch (error){
        console.log(error)
    }
 }






/// fn in buttom Delete
async function deleteUser(id){
  try{
    let {data} = await axios.delete(`${API}/${id}`);
  getData()
 }catch (error){
  console.log(error);
}
  
}
//____________________________


/// fn in buttom Edit

async function editUser(id, newUser){
    try{
      let = {data} = await axios.put(`${API}/${id}`, newUser)
      getData()
   
    }catch(error){}
   }
//_____________________________


let idNew=null

form2.onsubmit = (event)=>{
    event.preventDefault();
    let newUser={
        title:form2["title"].value,
        description:form2["desc"].value,
    }
    editUser(idNew,newUser)
    modalEdit.close()
}






function get(data){
    box.innerHTML=''
    data.forEach((elem)=>{
        let conteiner =document.createElement('div')
        let h1= document.createElement('h1');
        h1.innerHTML=elem.title
        if(elem.completed==true){
            h1.classList.toggle("change")
        }
        let h2= document.createElement('h2');
        h2.innerHTML=elem.description;


        let btnDelet = document.createElement('button')
        btnDelet.innerHTML="Del";
        btnDelet.onclick=()=>{
            deleteUser(elem.id)
        }

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML="Edit";
        btnEdit.onclick=()=>{
            idNew=elem.id
            form2["title"].value=elem.title
            form2["desc"].value=elem.description
            modalEdit.showModal()
            //(elem.id)
        }
     
        let input = document.createElement('input')
        input.type="checkbox"
        input.checked=elem.completed;
        input.onclick=()=>{
            elem.completed =! elem.completed;
            //console.log(elem)
            editUser(elem.id,elem)
        }


        conteiner.appendChild(h1)
        conteiner.appendChild(h2)
        conteiner.appendChild(btnDelet)
        conteiner.appendChild(btnEdit)
        conteiner.appendChild(input)


        box.appendChild(conteiner)



    })
}

getData()


















   // async - синтаксиси функцияи асинхроний
  //  await - ожидание!
  // fetch - API - ра да js шинос мекна (методи js)

// resonse - ответ (джавоб)
  





//  async function getUsers(){
//     try {
//     const response = await fetch("");
//     const data = await response.json();
//     console.log(data);
//     }
//     catch (error) {
//     console.log(error)
//     }
// }
