let toDoList = []

renderToDoList()
document.querySelector('.js-add-toDo').addEventListener('click', ()=>{addToDo()})





function renderToDoList(){
    let toDoHtml = ''
    
    //forEach is more preferable to be used in arrays    
    
    toDoList.forEach(function(toDoObject,i){
        const {name,dueDate} = toDoObject;
        let html = `
        <p class="spacing">${name} ${dueDate}</p>
        <button class="delete js-delete-button">Delete</button>
        `
        toDoHtml+= html

    })
    
    document.querySelector('.js-div').innerHTML = toDoHtml
    
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click',()=>{
                toDoList.splice(index,1);
                renderToDoList();
            })
        }
    )


    //     for(let i =0; i < toDoList.length; i++){
    //         const toDoObject = toDoList[i]
    //         const {name,dueDate} = toDoObject;
    //         let html = `
    //         <p class=" spacing">${name} ${dueDate}</p>
    //         <button class="delete" onclick="
    //         toDoList.splice(${i},1);
    //         renderToDoList();
    //         ">Delete</button>
    //         `
    //         toDoHtml+= html
    //     }
}

function addToDo(){
    let inputElement = document.querySelector('.js-input')
    let inputDateElement = document.querySelector('.js-date-input')
    let name = inputElement.value;
    let dueDate = inputDateElement.value
    toDoList.push(
        {
        name,
        dueDate
        }
    )
   inputElement.value = ''
   renderToDoList()
}

