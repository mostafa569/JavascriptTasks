function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    saveCookie('name', name);
    saveCookie("email", email);
    
    var counter = parseInt(getCookie("counter") || "0");
    saveCookie("counter", counter);   
    
    var page = window.open("new.html", "", "width=700,height=700");
}
