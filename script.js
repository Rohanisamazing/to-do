const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// inputBox.addEventListener("keypress", function (e) {
//   if (e.keyCode === 13) {      // here we will see a strikethrough on the keyCode and the warning will say that keyCode declaration has been depreciated, it means that this keyCode property of the KeyboardEvent object has been deprecated. This means that while it may still work in some browsers, it’s not recommended for use in new code because it may not be supported in future versions of these browsers.
//     addTask();
//   }
// });

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
