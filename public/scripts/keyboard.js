const settings = ["key", "code", "altKey", "ctrlKey", "metaKey", "shiftKey", "repeat"];
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    r(e);
  });
});


const r = (e) => {

  const newLine = document.createElement("tr");
  
  settings.forEach((n) => {
    const newColumn = document.createElement("td");
    
    (newColumn.innerHTML = e[n]),
      (newColumn.className = "text-white py-4 border-2 border-white"),
      newLine.appendChild(newColumn);
  }),
    document.querySelector("tbody").appendChild(newLine);
};
