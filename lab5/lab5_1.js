

function addRow(){
    var field1=document.getElementById("studentName")
    var field2=document.getElementById("studentAge")
    var pName=document.getElementById("NameHandling")
    var pAge=document.getElementById("AgeHandling")
     if(field1.value == "") {
        pName.innerText = "Name is required"; 
        field1.style.border='solid 2px red'
        return
    }else if(field1.value.length<=3){
        pName.innerText = "Name Length must be grater than 3";
        return
    }
    if(field2.value == "") {
        pAge.innerText = "Age is required"; 
        field2.style.border='solid 2px red'
        return
    }else if(field2.value<=18){
        pAge.innerText = "Age must be grater than 18";
        return
    }
  
    

    var table=document.getElementById("tbody")
    
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var nameCell = rows[i].getElementsByTagName("td")[1];  
        if (nameCell.innerText === field1.value) {
            pName.innerText = "Name already exists";
            field1.style.border = 'solid 2px red';
            return;
        }}
var newRow=document.createElement('tr')
    newRow.innerHTML =`
    <td>${table.rows.length+1}</td>
        <td>${field1.value}</td>
        <td>${field2.value}</td>
        <td><button class="btnDelete" onclick="deleteRow(this)">Delete</button></td>
        `
    table.appendChild(newRow);
    field1.value=''
    field2.value=''

}

function deleteRow(button){
    var row = button.parentElement.parentElement;
    row.remove()
}

