const solders = JSON.parse(localStorage.getItem("solders")) || [];

renderSolders()




function renderSolders(soldersa = solders) {
  const tbody = document.querySelector("#mission_table tbody");

  tbody.textContent = "";
  // רץ על כל המשימות
  solders.forEach((solder) => {
    const tr = document.createElement("tr");
    

    const fulName = document.createElement("td");
    fulName.textContent = solder.fulName;
    tr.appendChild(fulName);

    
    const rank = document.createElement("td");
    rank.textContent = solder.rank;
    tr.appendChild(rank);

    const position = document.createElement("td");
    position.textContent = solder.position;
    tr.appendChild(position);

    const platoon = document.createElement("td");
    platoon.textContent = solder.platoon;
    tr.appendChild(platoon);

    const missionTime = document.createElement("td");
    missionTime.textContent = solder.missionTime;
    tr.appendChild(missionTime);


    // להוסיף את הכפתורים
    const actionsTd = document.createElement("td");

    // כפתור שעורך את המשימה
    // const editButton = document.createElement("button");
    // editButton.textContent = "עריכה";
    // editButton.onclick = () => editSolder(solder.fulName);
    // actionsTd.appendChild(editButton);

    // למחוק משימה
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "מחק";
    deleteButton.onclick = () => deleteSolder(solder.fulName);
    actionsTd.appendChild(deleteButton);
    tr.appendChild(actionsTd);
    tbody.appendChild(tr);
  });
}



function deleteSolder(name){
    let index = solders.findIndex(solder => solder.fulName === name);
    todos.splice(index, 1);
    saveSolders();
    renderSolders();
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