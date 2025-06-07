let toDoList =  JSON.parse(localStorage.getItem('todolist')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}];


renderToDoList()

function renderToDoList(){
    let toDoHtml = ''

    for(let i =0; i < toDoList.length; i++){
        const toDoObject = toDoList[i]
        const {name,dueDate} = toDoObject;
        let html = `
        <p class=" spacing">${name} ${dueDate}</p>
        <button class="delete" onclick="
        toDoList.splice(${i},1);
        renderToDoList();
        removeItem()
        ">Delete</button>
        `
        toDoHtml+= html
    }
    document.querySelector('.js-div').innerHTML = toDoHtml
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
    saveToStrage()
}

function saveToStrage(){
    localStorage.setItem('todolist',JSON.stringify(toDoList))
}

function removeItem(){
    localStorage.removeItem('todolist')
}
