
var circle1=document.getElementsByClassName('circle1')[0];
var circle2=document.getElementsByClassName('circle2')[0];
var circle3=document.getElementsByClassName('circle3')[0];
var p=document.getElementById('p')
var circles=[circle1,circle2,circle3]
var i=0;
setInterval(function(){
    if(i==0){
        circles[i].style.backgroundColor ='red'
        circles[1].style.backgroundColor=''
        circles[2].style.backgroundColor=''
        p.innerHTML='stop'
        p.style.color='red'
    }
else if(i==1){
        circles[i].style.backgroundColor ='yellow'
        circles[0].style.backgroundColor=''
        circles[2].style.backgroundColor=''
        p.innerHTML='ready'
        p.style.color='yellow'
    }
    if(i==2){
        circles[i].style.backgroundColor ='green'
        circles[0].style.backgroundColor=''
        circles[1].style.backgroundColor=''
          p.innerHTML='Go'
          p.style.color='green'
    }
    i++;
    if (i >= circles.length) {
        i = 0; 
    }
   
},1000)

