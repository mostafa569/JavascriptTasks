var arr=[];

for(var i=0;i<5;i++){
    arr.push(Number(prompt(`Enter number ${i}`)));
}


function sortingAsc(arr){
   var sortedArray= arr.sort(function(a,b){return a-b});
    return sortedArray;
}

function sortingDesc(arr){
    var sortedArray= arr.sort =( a,b) =>{return b-a} ;
     return sortedArray;
 }
 
 


 document.writeln(`<span style="color:red;">Entered Array is </span> ${arr}`);
 document.writeln("<br/>")
 document.writeln(`<span style="color:red;">Ascending Array is </span> ${sortingAsc(arr)}`);
document.writeln("<br/>")
document.writeln(`<span style="color:red;">Descending Array is </span> ${sortingDesc(arr)}`);
