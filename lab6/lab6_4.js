function addNumbers(...args) {
 
    if (arguments.length === 0) {
        throw 'No parameters';
    }
 
    for (var i = 0; i < arguments.length; i++) {
        if (typeof args[i] !== 'number') {
            throw  `Invalid data type`;
        }
    }
    var sum=0
    for(var i=0;i<arguments.length;i++){
       sum+=arguments[i];
    }
  return sum
}

 
    console.log(addNumbers(1, 2, 2)); // 5
    console.log(addNumbers(1, '2', 3)); // Throws 
    console.log(addNumbers());  //throw
 
