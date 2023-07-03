


let box = document.querySelector(".box")

let data = [

    {
        id: 1,
        title: "The first task tittle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        completed: false,
    },
    {
        id: 2,
        title: "The first task tittle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet euismod nulla.",
        completed: false,

    }
]

// Logic input / booton / 

let modalDialog=document.querySelector('.modalAdd')
let inpTitl=document.querySelector('.inpTitl')
let inpDisc=document.querySelector('.inpDisc')
let btnAdd=document.querySelector('.btnAdd')
let btnClose=document.querySelector('.btnClose')

let openModal=document.querySelector('.openModal')// botton for modal
let closeModal=document.querySelector('.closeModal')// CloseModal X



// get for Edit
let modalEdit=document.querySelector('.modalEdit')
let inpTitEdit=document.querySelector('.inpTitEdit')
let inpDecEdit=document.querySelector('.inpDecEdit')
let btnEdit=document.querySelector('.btnEdit')
let btnCloseEdit=document.querySelector('.btnCloseEdit')


// onclick for Add ///
openModal.onclick =()=>{
    modalDialog.showModal()
  }
// onclick for Close /// 
btnClose.onclick=()=>{
    modalDialog.close()
}

closeModal.onclick=()=>{
    modalDialog.close()
}




// function Add usser
function addUser(){
    let newUser={
        id: new Date().getTime(),
        title: inpTitl.value,
        description: inpDisc.value,
        completed: false,

    }
    data.push(newUser)
    get()
    modalDialog.close()
    inpTitl.value=''
    inpDisc.value=''  
}
btnAdd.onclick=addUser



// function delete usser
function deleteUser(id){
  data=data.filter((el)=>{
    return el.id!=id
  })
  get()
} 

// function Chackbox  

function completedUser(id){
  data=data.map((el)=>{
    if(el.id==id){
        el.completed=!el.completed
    }
    return el;
  })
  get()
}


// Functirn Edit
let idEdit=null
function openEdit(id){
    idEdit=id
    modalEdit.showModal()
    let user= data.find((el)=>el.id==id)
    console.log(user)
    inpTitEdit.value=user.title
    inpDecEdit.value=user.description

}

btnCloseEdit.onclick=()=>(
 modalEdit.close()

)
function editUser(){
    data=data.map((el)=>{
     if(el.id==idEdit){
        el.title=inpTitEdit.value
        el.description=inpDecEdit.value
     }
     return el
    })
    get()
    modalEdit.close()
}
btnEdit.onclick=editUser



function get(){
    box.innerHTML=""
    data.forEach((elem)=>{ 
         let conteiner = document.createElement('div')
         conteiner.classList.add('conteiner')

     let title = document.createElement('h2') 
     title.innerHTML=elem.title
     if(elem.completed==true){
        title.classList.toggle("change")
     }
     let description = document.createElement('p') 
     description.innerHTML=elem.description


    //button Edit 
    let edit = document.createElement("i")
    edit.innerHTML="<i class='bx bxs-edit-alt'></i>"
    edit.onclick=()=>{
        openEdit(elem.id)
    }




    // button Delete  //
    let Delete = document.createElement('i')
    Delete.innerHTML= "<i class='bx bxs-trash-alt'></i>";
    Delete.onclick =()=>{
        deleteUser(elem.id)
        
     }

      // button checkbox
     let check = document.createElement("input")
     check.type ="checkbox";
     check.checked=elem.completed;
     check.onclick=()=>{
       completedUser(elem.id)
     }
    
     conteiner.appendChild(title)
     conteiner.appendChild(description)
     conteiner.appendChild(edit)
     conteiner.appendChild(Delete)
     conteiner.appendChild(check)

     box.appendChild(conteiner)



    })
}
get()

