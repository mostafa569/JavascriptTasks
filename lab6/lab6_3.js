function test(n1,n2){
    if(arguments.length!=2){
        throw 'must be 2 nums';
    }
    else
     return n1+n2

}

console.log(test()) // throw
console.log(test(10,5)) // 15
console.log(test(10,5,2)) // 15 then throw
