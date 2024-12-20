function palind(str) {
    var check=confirm("Do you want case-senisitve");
    if(check){
        var blind=str.split("").reverse().join("");
        document.writeln(str==blind)
    }else{
        var str2=str.toLowerCase();
        var blind=str2.toLowerCase().split("").reverse().join("");
        document.writeln(str2==blind)
    }


}

var str=prompt("Enter text");
palind(str);
