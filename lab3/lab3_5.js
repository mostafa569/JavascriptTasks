function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2==0){
        console.log("Not Allowed divide on 0");
    }else
    return num1/num2;
}


function applyOperation(num1,num2,myFun){
  return  myFun(num1,num2)

}


var num1=5;
var num2=3;

console.log(applyOperation(num1,num2,add));
console.log(applyOperation(num1,num2,sub));
console.log(applyOperation(num1,num2,mul));
console.log(applyOperation(num1,num2,divide));