
// start here: Greeting scripts
let currentHr = new Date().getHours();
let promptName = document.getElementById("promptName")
let bgAskName = document.getElementById("bgAskName")
let rowItem = document.querySelectorAll(".row-item")
let welcomeName = document.getElementById("welcomeName")

promptName.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    promptName = promptName.value;
    bgAskName.style.visibility = "hidden";

    for (i = 0; i < rowItem.length; i++) {
      rowItem[i].style.transition = "opacity 0.5s linear 0s";
      rowItem[i].style.opacity = 10;

    }

    if (currentHr < 12) {
      welcomeName.innerHTML = `Good Morning, ${promptName} .`;
    } else if (currentHr < 18) {
      welcomeName.innerHTML = `Good Afternoon, ${promptName} .`;
    } else {
      welcomeName.innerHTML = `Good Evening, ${promptName} .`;
    }
  }
});
// End here: Greeting scripts



// start here : quote scripts
let quoteToday = document.getElementById("quoteToday")
let quotesToday = [
  `"Just one small positive thought in the morning can change your whole day."`,
  `"Opportunities don't happen, you create them."`,
  `“Love your family, work super hard, live your passion.”`,
  `“It is never too late to be what you might have been.”`
];

getQuote()
function getQuote() {
  quoteToday.innerHTML = quotesToday[0];
}

let btnAddQuote = document.getElementById("btnAddQuote")
let taNewQuote = document.getElementById("newQuote")
btnAddQuote.addEventListener('click', AddQuoteForm)

function AddQuoteForm() {
  quotesToday.push(taNewQuote.value)
  console.log(quotesToday.length)
  quoteToday.innerHTML = quotesToday[quotesToday.length - 1]
  taNewQuote.value = ""
}

let closeModalQuote = document.getElementById("closeModalQuote")
closeModalQuote.addEventListener("click", xModalQuote)

function xModalQuote() {
  taNewQuote.value = "";
}

let btnNextQuote = document.getElementById("btnNextQuote")
btnNextQuote.addEventListener('click', nextQuote)
let count = 0;
function nextQuote() {
  let y = quotesToday.length - 1;
  count += 1;
  if (count <= y) {
    quoteToday.innerHTML = quotesToday[count];
  } else {
    count = 0;
    quoteToday.innerHTML = quotesToday[count];
  }
}
// end here :quote scripts


// todo app start here
let inputTodo = document.getElementById("inputTodo")
let todoListArr = [document.getElementById("todoListWrapper")]

inputTodo.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    let y = todoListArr[0].children.length + 1;

    let rowTodoList = document.createElement("div")
    rowTodoList.style.height = "30px";
    rowTodoList.setAttribute("class", "row col-12 d-flex align-items-center justify-content-start")
    rowTodoList.setAttribute("id", `rowTodoList_${y}`)
    // inside row todo list
    // create checkbox
    let todoCBdiv = document.createElement("div")
    todoCBdiv.setAttribute("class", "col-2")
    let todoCB = document.createElement("input")
    todoCB.setAttribute("type", "checkbox")
    todoCB.setAttribute("id", `todoCB_${y}`)
    todoCB.setAttribute("onchange", "cbTodoFn(this.id)")

    // create taskName
    let todoTaskdiv = document.createElement("div")
    todoTaskdiv.setAttribute("class", "col-8")
    todoTaskdiv.style.textAlign = "initial";
    let h6 = document.createElement("h6")
    h6.setAttribute("id", `h6${y}`)
    h6.innerHTML = inputTodo.value;

    // create buttonx
    let xDiv = document.createElement("div")
    xDiv.setAttribute("class", "col-2 xdiv")
    let btnX = document.createElement("button")
    btnX.setAttribute("class", "btn  text-white ")
    btnX.setAttribute("id", `btnX_${y}`)
    btnX.innerHTML = "x"
    btnX.setAttribute("onclick", "btnXFn(this.id)")

    let todoListWrapper = document.getElementById("todoListWrapper")
    todoListWrapper.appendChild(rowTodoList)
    // append checkbox
    rowTodoList.appendChild(todoCBdiv)
    todoCBdiv.appendChild(todoCB)

    // append taskName
    rowTodoList.appendChild(todoTaskdiv)
    todoTaskdiv.appendChild(h6)

    // append btnx
    rowTodoList.appendChild(xDiv)
    xDiv.appendChild(btnX)

    inputTodo.value = "";

  }
});

function cbTodoFn(id) {
  let cbtodo = document.getElementById(`${id}`)
  let splitID = String(id).split("_")
  let x = splitID[1]
  let h6cb = document.getElementById(`h6${x}`)
  if (cbtodo.checked) {
    console.log(h6cb)
    h6cb.style.textDecoration = "line-through";
  } else {
    h6cb.style.textDecoration = "none";
  }
}

function btnXFn(btnid) {
  let splitID = String(btnid).split("_")
  let x = splitID[1]
  console.log(splitID)
  let y = document.getElementById(`rowTodoList_${x}`)
  y.remove()
}

let btnToDoShow = document.getElementById("btnToDoShow")
let todoApp = document.getElementById("todoApp")
btnToDoShow.addEventListener('click', function() {
  todoApp.classList.toggle("todoAppShow")
})
// todo app end here



//start her: Change background and realtime start when onload
let bglist = ["images/bg3.jpg", "images/bg4.jpg", "images/bg5.jpg", "images/bg6.jpg", "images/bg7.jpg"]

function bgChange() {
  startTime()
  let bgx = bglist[Math.floor(Math.random() * bglist.length)];

  bg.style.backgroundImage = `url("${bgx}")`;
  console.log(bgx)
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
// end