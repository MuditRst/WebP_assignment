
var attempt = 3;

var islogin = false;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "username" && password == "password"){
        login = true;
        window.location.replace("index.html");
        return false;
    }else{
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}