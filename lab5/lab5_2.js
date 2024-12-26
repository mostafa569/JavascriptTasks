var img=document.images[0];

var myImages=['./images/cat.jpeg','./images/dolphin.jpeg','./images/Eagle.jpeg','./images/Lion.jpeg']



var i=0;
function slideLeft(){
   
    i++;
    if (i >= myImages.length) {
        i = 0; 
    }
    img.setAttribute('src',myImages[i])
    //console.log("tt");
    
}

var stopp;
function start(){
    stopp=setInterval(function(){
        i++;
        if (i >= myImages.length) {
            i = 0; 
        }
        img.setAttribute('src',myImages[i])

    },1000)
}


function stop(){
clearInterval(stopp);
}