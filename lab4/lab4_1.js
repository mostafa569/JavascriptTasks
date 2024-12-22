




function calc(){
    var field1=document.getElementById("tagElement");
    var tagElement=document.getElementsByTagName(field1.value)

    var field2=document.getElementById("className");
    var className=document.getElementsByClassName(field2.value)

    var field3=document.getElementById("id");
    var id=document.getElementById(field3.value)
    id?id=true:id=false
    
   
    var field4=document.getElementById("name");
    var name=document.getElementsByName(field4.value)
    

    document.writeln(`Number Of div : ${tagElement.length}  Class Content : ${className.length} id : ${id} Name: ${name.length} `)

}


 // if (id){id=true}else id=false
    // var arr=[]
    // arr.push(id)