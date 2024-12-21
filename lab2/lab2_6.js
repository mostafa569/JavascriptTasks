var arr=["mostafa","mohamed","abdelrahman","zeiad"];

function random(arr){

    return (arr[Math.floor(Math.random()*arr.length)]);

}
document.writeln(random(arr))
