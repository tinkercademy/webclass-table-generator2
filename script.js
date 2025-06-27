function createTable() {
  var row = Number(document.getElementById("row").value); 
  var col = Number(document.getElementById("col").value);
  
  var rootEl = document.getElementById("result");
                                       
  var tableEl = document.createElement("table");
  
  for(var i = 0; i < row; i++) {
    var rowEl = document.createElement("tr");
    tableEl.appendChild(rowEl);
    for (var j = 0; j < col; j++) {
      var colEl = document.createElement("td");
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue= Math.floor(Math.random() * 256);

      colEl.setAttribute("style", "background-color: rgb(" + red + ", " + green + ", " + blue + ");");
      colEl.innerHTML = "(" + i + ", " + j + ")";
      rowEl.appendChild(colEl);

    }
  } 
  
  rootEl.appendChild(tableEl);
  console.log(tableEl);
}

