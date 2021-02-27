let inpRow = document.getElementById("inputRow");
let inpCol = document.getElementById("inputColumn");
let pTxt = document.getElementsByClassName("pTxt");
let table = document.getElementById("table");
var x =0;

function validateRow() {
    debugger
    if (inpRow.value ==""){
        pTxt[0].innerHTML = "";
        if (x !== 1){
            removeTable();
            x =0
        }
    } else if (inpRow.value  > 9 || inpRow.value < 1 || !Number.isInteger(+inpRow.value) ){
       pTxt[0].innerHTML = "must be number from 1 to 9";
    } else {
        pTxt[0].innerHTML ="";
        x ++
        if (x === 1){
            createTable();
            x++
        }else { 
            removeTable();
            createTable();
            x = 0;
         }
    }
}

function validateCol() {
    debugger
     
    if ( inpCol.value ==""){
        pTxt[1].innerHTML = "";
        if (x !== 1){
            removeTable();
            x =0
        }        
    } else if (inpCol.value  > 9 || inpCol.value < 1  || !Number.isInteger(+inpCol.value)) {
        pTxt[1].innerHTML = "must be number from 1 to 9";
    } else {
        pTxt[1].innerHTML ="";
        x ++
        if (x === 1){
            createTable();
            x++
        }else { 
            removeTable();
            createTable();
            x = 0;
         }
    }
}


function removeTable (){
    let removeTable = document.querySelector("table");
    table.removeChild(removeTable)
}

function  createTable (){
    let tab = document.createElement("table");
    for ( let i = 0; i < inpRow.value; i++){
        let tr = document.createElement("tr");
    
        for(let j = 0; j < inpCol.value; j++){
            let td = document.createElement("td");
            tr.appendChild(td);
    }
    tab.appendChild(tr);
    }
    table.appendChild(tab);
    // return tab
}