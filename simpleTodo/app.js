//date display
const inputLabel = document.querySelector('.label')

const today = new Date();
const yaer = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = weekday[today.getDay()];

inputLabel.innerText = yaer + '/' + month + '/' + date + '/' + day;
// inputLabel.innerText = today.toLocaleDateString();


//formTag auto submit prohibit
const formWrap = document.querySelector('.input-wrap')

formWrap.addEventListener("submit", (e) => {
  e.preventDefault()
})


//✅toDo list add
const listInput = document.querySelector('#list')
const toDoList = document.querySelector('#todo-list')
const listCount = document.querySelector('.list-count')
const submitBtn = document.querySelector('.submit')

const updatedListCount = () => {
  const listCountValue = toDoList.querySelectorAll("li").length
  listCount.innerText = `${listCountValue}`
}

const addToDoList = () => {
  const listInputValue = listInput.value

  if(listInputValue === "") {
    alert("입력해주세요")
    return
  }

  //list add
  const listTemplate = (listInputValue) => {
    return `
    <li class="todo-item">
      <span class="item-name">${listInputValue}</span>
      <div class="item-btn">
        <button type="button" class="done-btn">완료</button>
        <button type="button" class="edit-btn">수정</button>
        <button type="button" class="remove-btn">삭제</button>
      </div>
    </li>`
  }

  toDoList.insertAdjacentHTML("beforeend", listTemplate(listInputValue))

  //list count
  updatedListCount()

  //inputValue reset
  listInput.value = ""
}

submitBtn.addEventListener("click", addToDoList)

listInput.addEventListener("keydown", (e) => {
  if(e.key !== "Enter") {
    return
  }
  addToDoList()
})


//✅toDo list modify & toDo list delete
const editToDoList = (e) => {
  const itemName = e.target.closest('li').querySelector('.item-name') 
  //list modify
  const updatedItemName = prompt("수정하세요", itemName.innerText)
  itemName.innerText = updatedItemName
}

const removeToDoList = (e) => {
  //list delete
  e.target.closest('li').remove()
  //list count
  updatedListCount()
}

toDoList.addEventListener("click", (e) => {
  if(e.target.classList.contains("edit-btn")) {
    editToDoList(e)
  }

  if(e.target.classList.contains("remove-btn")) {
    removeToDoList(e)
  }
})