function countE(str) {
    var count =0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='e'){
            count++;
        }
    }
    document.writeln(`count is ${count}`)
}
var str=prompt("Enter txt");
countE(str);