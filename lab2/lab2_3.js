var arr=[];

for(var i=0;i<3;i++){
    arr.push(Number(prompt(`Enter number ${i}`)));

}

function add(arr) {
    document.writeln(`<span style="color:red;">Sum of array is </span> ${arr[0] + arr[1] + arr[2]}`);
    document.writeln("<br/>")

}

function multiply(arr){
    document.writeln(`<span style="color:red;">Multiplication is  </span> ${arr[0] * arr[1] * arr[2]}`);
    document.writeln("<br/>")
}

function division(arr){
    if(arr[1]==0||arr[2]==0){
        document.writeln(`<span style="color:red;"> Not allowed to divide on zerooooo   </span> `);
    }else{
    document.writeln(`<span style="color:red;">Division is  </span> ${arr[0] / arr[1] / arr[2]}`);
}}


add(arr);
multiply(arr);
division(arr);