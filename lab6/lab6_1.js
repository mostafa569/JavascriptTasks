var response;
function addRow(event){
   
   var table=document.getElementById("tbody")
   
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")

    xhr.send('');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
            if (xhr.status == 200) { 
                response = JSON.parse(xhr.response); 
                console.log(response)
                if (table.rows.length > 0) {
                    alert("Not allowed");
                    return;
              
            }}    
    for(var i in response){
        var newRow=document.createElement('tr')
        newRow.innerHTML =`
        <td>${response[i].id}</td>
        <td>${response[i].name}</td>
        <td>${response[i].email}</td>
        <td><button class="btnDelete" onclick="viewMore(${response[i].id})">View More</button></td>
        `
        table.appendChild(newRow);
    }
        }
    

}}

function viewMore(userId){
    var div=document.getElementById('div')
    var xhr=new XMLHttpRequest();
    xhr.open("GET",`https://jsonplaceholder.typicode.com/users/${userId}`)


    xhr.send('');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
            if (xhr.status == 200) { 
                response = JSON.parse(xhr.response); 
                }  }
    div.innerHTML = `
    <p>ID: ${response.id}</p>
    <p>Name: ${response.name}</p>
    <p>Email: ${response.email}</p>
    <p>Phone: ${response.phone}</p>
    <p>Website: ${response.website}</p>
`;

    }
  
}