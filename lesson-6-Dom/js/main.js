

// let box = document.querySelector(".box");

// let h1 = document.createElement("h1");
// h1.innerHTML="Lets Go";


//  let btn = document.createElement("button")
//  btn.innerHTML = "Заказать";

// btn.onclick = () =>{
//     let p = document.createElement("p")
//     p.innerHTML = "Заказ добавлено"
//     box.appendChild(p)
//     h1.classList.toggle("p")
// }
//  box.appendChild(h1);
//  box.appendChild(btn);




// let data = [

//     {
//         id: 1,
//         name: "Salmon",
//         age: 30,
//         cursi: "js"
//     },
//     {
//         id: 2,
//         name: "Farid",
//         age: 30,
//         cursi: "js"
//     },
//     {
//         id: 3,
//         name: "Virkan",
//         age: 30,
//         cursi: "js"
//     }
// ]
// //console.log(data)

//   let box = document.querySelector(".box");
//   let inpnName = document.querySelector('.name')
//   let inpaAge = document.querySelector('.age')
//   let inpCurs = document.querySelector('.curs')
//   let btnAdd = document.querySelector('.btnAdd')

//   btnAdd.onclick=()=>{

//     let newUser = {
//      id: new Date().getTime(),
//     name: inpnName.value,
//     age: inpaAge.value,
//     curs: inpCurs.value,
//     }
//     data.push(newUser)
//     get()

//     inpnName.value=''
//     inpaAge.value=''
//     inpCurs.value=''


    
//   };


//   function deleteUser(id){
//    data=data.filter((el)=>{   // logics delete
//     return el.id!=id
//    })
//    get()
//   }

// function get(){
//     box.innerHTML=""
//     data.forEach((elem)=>{   // elem baroy objecta giriftan 
//         let conteiner = document.createElement('div')
//         conteiner.classList.add('conteiner')

//      let name = document.createElement('h1') // teg sohtem
//      name.innerHTML=elem.name  // soderjimi tega giriftem
     
//      let age = document.createElement('p')
//      age.innerHTML=elem.age 

//      btnDelete = document.createElement('button')
//      btnDelete.innerHTML= "Delete";
//      btnDelete.onclick =()=>{
//         deleteUser(elem.id)
//      }

//      conteiner.appendChild(name) // tega da brayzer nishon dodan
//      conteiner.appendChild(age)
//      conteiner.appendChild(btnDelete)
//      box.appendChild(conteiner) 
     
//     });
// }
// get()



