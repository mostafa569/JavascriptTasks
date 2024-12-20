
//Task1

// var msg=prompt("Enter message");
// var h=1;
// for(var i=0;i<7;i++){
//     document.writeln("<h"+i+">"+msg+"</h" + i + ">")
// }
// //-------------------------------------------------------------------------


// //Task2



// var sum=0;
// var num;
// while(num!=0&&sum<=100){
//     num=Number(prompt("Enter Nums"));
//     sum+=num;   
// }

// document.writeln(sum);

// -------------------------------------------------------------------------

//Task3

// var num =prompt("Enter num");

// if(num % 3 == 0 && num % 5 ==0){
//     document.writeln("fizz buzz");
// }else if(num % 3 == 0){
//     document.writeln("fizz");
// }else if(num % 5==0){
//     document.writeln("buzz");
// }else{
//     document.writeln("none");
// }

// --------------------------------------------------------------------

// Task4

// var resultFly =confirm("Do you fly");
// if(resultFly){
//     var resultWild=confirm("Are you wild");
//     if(resultWild) {
//         document.writeln("<img src='eagle.jpeg'/>");
//         document.writeln("<br/>")
//         document.writeln("Eagle");}else{
//             document.writeln("<img src='parrot.jpeg'/>");
//             document.writeln("<br/>")
//         document.writeln("parrot");
//         }

// }else{
//     var resultUndersea=confirm("Do you live undersea");
//     if(resultUndersea){
//         var resultWild=confirm("Are you wild");
//         if(resultWild){
//             document.writeln("<img src='shark.jpeg'/>");
//             document.writeln("<br/>")
//         document.writeln("shark");
//         }else{
//             document.writeln("<img src='dolphin.jpeg'/>");
//             document.writeln("<br/>")
//         document.writeln("Dolphin");    
//         }
//     }else{
//         var resultWild=confirm("Are you wild");
//         if(resultWild){
//             document.writeln("<img src='Lion.jpeg'/>");
//             document.writeln("<br/>")
//         document.writeln("Lion");    
//         }else{
//             document.writeln("<img src='cat.jpeg'/>");
//             document.writeln("<br/>")
//         document.writeln("Cat");    
//         }
//     }
// }



// Task 5

// document.writeln("<h1>User Info</h1>");
// document.writeln("<br/>")
// var userName=prompt("Enter Your Name");
// var letterRegex = /^[A-Za-z]+$/;
// var numRegex= /^\d{1,8}$/
// var mobileRegex= /^(010|011|012)\d{8}$/
// var emailRegex =/^[a-zA-Z0-9]{3}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// while(!letterRegex.test(userName)){
//     var userName=prompt("Enter Your Name");
// }
// var phoneNumber=prompt("Enter Your phone");
// while(!numRegex.test(phoneNumber)){
//     var phoneNumber=prompt("Enter Your Phone");
// }
// var mobileNumber=prompt("Enter Your Mobile number");
// while(!mobileRegex.test(mobileNumber)){
//     var mobileNumber=prompt("Enter Your mobile");
// }
// var email = prompt("Enter Your email");
// while(!emailRegex.test(email)){
//     var email=prompt("Enter Your email");
// }

// var color=prompt("Enter Color");

// document.writeln("<span>Welcome dear gust</span>" + " " + "<span style='color:" + color + ";'>" + userName + "</span>");
// document.writeln("<br/>")
// document.writeln("<span>your telphone is</span>" + " " + "<span style='color:" + color + ";'>" + phoneNumber + "</span>");
// document.writeln("<br/>")
// document.writeln("<span>your mobile is </span>" + " " + "<span style='color:" + color + ";'>" + mobileNumber + "</span>");
// document.writeln("<br/>")
// document.writeln("<span>your email is</span>" + " " + "<span style='color:" + color + ";'>" + email + "</span>");

//
