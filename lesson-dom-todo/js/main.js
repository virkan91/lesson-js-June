

let box =document.querySelector('box')

let data = [

   {
    id: 1,
    avatar: "img",
    name: "Jamshed Halimov",
    city: "Dushanbe",
    status: "activ",
    phone: 99999999,
   }
]



function get(){
    data.forEach((elem)=>{
console.log(elem)
    })
}
get()