function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const color = document.getElementById("color").value;

    saveCookie("name", name);
    saveCookie("email", email);
    saveCookie("color", color);
    var myWindow = window.open("new.html", "", "width=800,height=800");
    myWindow.focus();
    if (male) saveCookie("gender", "male");
    else if (female) saveCookie("gender", "female");
}

function saveCookie(key, value) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3); 
    document.cookie = `${key}=${value};expires=${expireDate.toUTCString()};path=/`;
}
