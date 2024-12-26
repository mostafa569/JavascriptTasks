document.addEventListener('keydown', (event) => {
    const result = document.getElementById('result');
    

    const asciiCode = event.keyCode;

    var keyType;

    if(event.shiftKey){
        keyType = 'Shift key';
    }
    else if(event.ctrlKey){
        keyType="Ctrl";
    }
    else if(event.altKey) {
        keyType = 'Alt key';}
    
    else{
            keyType= asciiCode;
        }


        result.innerHTML=keyType


})