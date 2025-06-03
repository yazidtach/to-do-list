let toDoList = []

renderToDoList()

function renderToDoList(){
    let toDoHtml = ''

    for(let i =0; i < toDoList.length; i++){
        const toDo = toDoList[i]

        let html = `
        <p>${toDo}</p>
        <button class="delete" onclick="
        toDoList.splice(${i},1);
        renderToDoList();
        ">Delete</button>
        `
        toDoHtml+= html
    }

    document.querySelector('.js-div').innerHTML = toDoHtml
}

function addToDo(){
    let inputElement = document.querySelector('.js-input')
    let inputDateElement = document.querySelector('.js-date-input')
    toDoList.push(inputElement.value, inputDateElement.value)
   inputElement.value = ''
   renderToDoList()
}

