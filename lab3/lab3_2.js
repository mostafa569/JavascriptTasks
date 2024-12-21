

 
function convertFirst(str2) {
   var result = []; 
   for(var i=0;i<str2.length;i++){

    result.push(str2[i].replace(str2[i].charAt(0),str2[i].charAt(0).toUpperCase()))
   
  }
  document.writeln(result.join(" "))
}


var str=prompt("Enter Sentence");

var str2=str.split(" ");
convertFirst(str2)