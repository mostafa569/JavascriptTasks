
var object = { a: 1, b: 2, c:{a:1,b:2}  };


test(object)

function test(object){
    for (var property in object) {
  
        if (typeof object[property] != 'object') {
          console.log(`${property}: ${object[property]}`);
        } else {
          for (var obj in object[property]) {
            console.log(`${property}.${obj}: ${object[property][obj]}`);
          }
        }
      }
}


