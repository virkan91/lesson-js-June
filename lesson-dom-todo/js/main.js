



// let box =document.querySelector('.box')


// let data = [

//    {
//     id: 1,
//     avatar: "",
//     name: "Jamshed Halimov",
//     gmail: "google@gmail.com",
//     city: "Dushanbe",
//     status: "activ",
//     phone: 99999999,
//    }
// ];

// let modalDialog=document.querySelector('.modalAdd')

// let openModal=document.querySelector('.openModal')


// openModal.onclick =()=>{
//     modalDialog.showModal()

//   }

// function get(){
//     box.innerHTML=""
//     data.forEach((elem)=>{
//         //let conteiner=document.createElement('conteiner')

//         let tr = document.createElement('tr')
//         let tdName=document.createElement('td')
//         tdName.innerHTML=elem.avatar

//         let image = document.createElement('img')
//         image.src  = 'img/22.jpg'


//         let FirstName = document.createElement('td')
//         FirstName.innerHTML=elem.name

//         let gMail = document.createElement('td')
//         gMail.innerHTML=elem.gmail

//         let cityName = document.createElement('td')
//         cityName.innerHTML=elem.city

//         let statusName = document.createElement('td')
//         statusName.innerHTML=elem.status

//         let phoneNamber = document.createElement('td')
//         phoneNamber.innerHTML=elem.phone

        
//         tr.appendChild(image)
//         tr.appendChild(FirstName)
//         tr.appendChild(tdName)
//         tr.appendChild(gMail)
//         tr.appendChild(cityName)
//         tr.appendChild(statusName)
//         tr.appendChild(phoneNamber)

//         box.appendChild(tr)

        
//     })
// }
// get()


// function promiseData(url){
//     return new Promise ((resolve,reject)=>{
//         fetch(url)
//         .then((response)=>response.json())
//         .then((data)=>resolve(data))
//         .catch((erorr)=>resolve(erorr))
//     })
// }

// promiseData('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department')
// .then((data)=>console.log(data))


let box=document.querySelector(".box")

async function getData (){
    try {
        let response = await fetch(
            "https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department"
        );
        let data = await response.json();
        get(data)
    } catch (erorr){
      console.log(error)
    }
}
getData();

function get(data){
    data.forEach((el)=>{
        let div=document,createElement("div")
        div.innerHTMl=el.title
        box.appenChild(div)
        console.log(el)
    })
}
