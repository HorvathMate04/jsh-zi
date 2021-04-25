function váltás() {
    document.getElementById('gomb').style.backgroundColor = szín();
  }
  
  function szín() {
    return '#' + Math.floor(Math.random() * 999999 - 000000);
  }

  // hozzáad, töröl

  let btnAdd = document.querySelector("#hozzaad");

function addHeader(){
    let table = document.querySelector(".table");
    let newHeader = document.createElement("tr");
    newHeader.innerText = document.getElementById('add');
    table.appendChild(newHeader); 
}

  btnAdd.addEventListener("click", addHeader);

  let btnDelete = document.querySelector("#torol");

  function töröl(){
    let table = document.querySelector(".table");
    let lastChild = table.lastChild;
    table.removeChild(lastChild);
  }

  btnDelete.addEventListener("click", töröl)