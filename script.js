const solders = JSON.parse(localStorage.getItem("solders")) || [];

renderSolders()




function renderSolders(solders = solders) {
  const tbody = document.querySelector("#mission_table tbody");

  tbody.textContent = "";
  // רץ על כל המשימות
  solders.forEach((solder) => {
    const tr = document.createElement("tr");
    // יוצר את התא של ה- ID

    const fulName = document.createElement("td");
    fulName.textContent = solder.fulName;
    tr.appendChild(idTd);

    // ליצור את התא של ה-טקסט
    const textTd = document.createElement("td");
    textTd.textContent = todo.text;
    if (todo.isDone) {
      textTd.classList.add("done");
    }
    tr.appendChild(textTd);

    // רינדור סטטוס
    const statusTd = document.createElement("td");
    statusTd.textContent = todo.isDone ? "הושלם" : "לא הושלם";
    tr.appendChild(statusTd);

    // להוסיף את הכפתורים
    const actionsTd = document.createElement("td");

    // כפתור האם המשימה הושלמה
    const toggleButton = document.createElement("button");
    toggleButton.textContent = todo.isDone ? "בטל סיום" : "סמן כהושלם";
    toggleButton.onclick = () => toggleDone(todo.id);
    actionsTd.appendChild(toggleButton);

    // כפתור שעורך את המשימה
    const editButton = document.createElement("button");
    editButton.textContent = "עריכה";
    editButton.onclick = () => editTodo(todo.id);
    actionsTd.appendChild(editButton);

    // למחוק משימה
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "מחק";
    deleteButton.onclick = () => deleteTodo(todo.id);
    actionsTd.appendChild(deleteButton);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

function toggleDone(id){
    const todo = todos.find(todo => todo.id===id);
    todo.isDone = !todo.isDone;
    saveSolders();
    renderSolders();
}

function deletesolder(name){
    let index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    // const todo = todos.find(todo => todo.id===id);
    // todos.splice(todo ,1 )
    saveSolders();
    renderSolders();
}

// function editTodo(id) {
//   const todo = todos.find(todo => todo.id === id);

//   // מציגים חלון קופץ (prompt) עם הטקסט הקיים של המשימה
//   const newText = prompt("ערוך את המשימה:", todo.text);

//   // אם המשתמש לא לחץ על ביטול ולא השאיר את האינפוט ריק, נעדכן את המשימה
//   if (newText !== null && newText.trim() !== "") {
//     todo.text = newText;
//     saveTodos();  // שמירת המשימות המעודכנות ב-localStorage
//     renderTodos(); // רינדור מחדש של הטבלה
//   }
// }

function editTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  editMissionDiv.style.display = "block";
  editMission.value = todo.text;
  const editButton = document.getElementById("editMissionButton");
  editButton.onclick = () => {
    const newText = editMission.value;
    if (newText !== null && newText.trim() !== "") {
      todo.text = newText;
      saveSolders();
      renderSolders();
      editMissionDiv.style.display = "none";
    }
}}

function filterTodos(event){
 let fiterArray = todos.filter(todo => todo.isDone === true);
 renderSolders(fiterArray);
 
}
  

function addPersonnel(event) {
  event.preventDefault(); // לא לרענן את הדף
  // פונקציה להוספת משימה
  debugger;
  const inputFullName = document.getElementById("inputFullName");
  const inputRank = document.getElementById("intputRank");
  const inputPosition = document.getElementById("inputPosition");
  const inputPlatoon = document.getElementById("inputPlatoon");
  const inputMissionTime = document.getElementById("inputMissionTime");
  const statusInput = document.getElementById("statusInput");
  const solder = {
    fulName : inputFullName.value,
    rank : inputRank.value,
    position : inputPosition.value,
    platoon : inputPlatoon.value,
    missionTime : inputMissionTime.value,
    status : statusInput.value,
  };
  solders.push(solder);
  saveSolders();
  renderSolders();
  inputFullName.value = "";
  inputRank.value = "";
  inputPosition.value = "";
  inputPlatoon.value = "";
  inputMissionTime.value = "";
  
}

function saveSolders() {
  localStorage.setItem("solders", JSON.stringify(solders));
}