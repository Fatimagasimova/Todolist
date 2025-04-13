let xIcon = document.querySelector(".x-icon");
let alphabetIcon = document.querySelector(".alphabet-icon");
let isUp = false;
let plusBtn = document.querySelector(".plus-button");
let addBtn = document.querySelector(".add-button");

let taskList = document.querySelector(".task-list");
let input = document.querySelector("input");

let tasks = [];

document.querySelector(".input-part").style.display = "flex";
taskList.style.display = "none";
plusBtn.style.display = "block";

plusBtn.addEventListener("click", () => {
  document.querySelector(".input-part").style.display = "flex";
});

addBtn.addEventListener("click", () => {
  let value = input.value.trim();

  if (value !== "") {
    let li = document.createElement("li");
    li.textContent = value;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./Photos/x-icon.svg";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-icon");

    deleteIcon.addEventListener("click", () => {
      li.remove();
      tasks = tasks.filter(task => task !== li.textContent);
      sortTasks();
      checkEmptyList();
    });

    deleteIcon.addEventListener("mouseover", () => {
      deleteIcon.src = "./Photos/hovered-x-icon.svg";
    });

    deleteIcon.addEventListener("mouseout", () => {
      deleteIcon.src = "./Photos/x-icon.svg";
    });

    li.appendChild(deleteIcon);

    taskList.appendChild(li);

    tasks.push(value);

    input.value = "";

    taskList.style.display = "flex";
    document.querySelector(".input-part").style.display = "none";
    plusBtn.style.display = "block";

  }
});

alphabetIcon.addEventListener("click", () => {
  isUp = !isUp;
  if (isUp) {
    alphabetIcon.src = "./Photos/hovered-up.svg";
  } else {
    alphabetIcon.src = "./Photos/hovered-down.svg";
  }
  sortTasks();
});

alphabetIcon.addEventListener("mouseover", () => {
  if (isUp) {
    alphabetIcon.src = "./Photos/hovered-up.svg";
  } else {
    alphabetIcon.src = "./Photos/hovered-down.svg";
  }
});

alphabetIcon.addEventListener("mouseout", () => {
  if (isUp) {
    alphabetIcon.src = "./Photos/up.svg";
  } else {
    alphabetIcon.src = "./Photos/down.svg";
  }
});

function sortTasks() {
  let sortedTasks = [...tasks];
  if (isUp) {
    sortedTasks.sort();
  } else {
    sortedTasks.sort().reverse();
  }

  taskList.innerHTML = "";

  sortedTasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./Photos/x-icon.svg";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-icon");

    deleteIcon.addEventListener("click", () => {
      li.remove();
      tasks = tasks.filter(t => t !== task);
      sortTasks();
      checkEmptyList();
    });

    deleteIcon.addEventListener("mouseover", () => {
      deleteIcon.src = "./Photos/hovered-x-icon.svg";
    });

    deleteIcon.addEventListener("mouseout", () => {
      deleteIcon.src = "./Photos/x-icon.svg";
    });

    li.appendChild(deleteIcon);

    taskList.appendChild(li);
  });
}

function checkEmptyList() {
  if (tasks.length === 0) {
    taskList.style.display = "none";
    document.querySelector(".input-part").style.display = "flex";
  }
}

xIcon.addEventListener("click", () => {
  input.value = "";
});

xIcon.addEventListener("mouseover", () => {
  xIcon.src = "./Photos/hovered-x-icon.svg";
});

xIcon.addEventListener("mouseout", () => {
  xIcon.src = "./Photos/x-icon.svg";
});
