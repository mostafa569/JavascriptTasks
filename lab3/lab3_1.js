

function findSecond(arr){


    arr.sort(function(a,b){return a-b})


    for(var i=0;i<arr.length-1;i++){
       if(arr[i]==arr[i+1]){
           arr.shift()
       }
    }
   var secondSmall=arr[1];
    arr.reverse();
    for(var i=0;i<arr.length-1;i++){
       if(arr[i]==arr[i+1]){
           arr.shift()
       }
    }
   
    var secongMax=arr[1];
   // for(var i=arr.length-1;i>=0;i--){
   //     if(arr[i]==arr[i-2]){
   //         arr.pop()
   //     }
   // }
   
   //  console.log(arr[1],arr[arr.length-2])
   
   console.log(secondSmall,secongMax)
}


var arr=[1,0,1,0,1,2,3,4,5,1,5,6,6,5];
findSecond(arr);