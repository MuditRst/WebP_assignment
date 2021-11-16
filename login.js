
var attempt = 3;

var islogin = false;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username.length <= 0 || password.length <= 0){
        alert("Please enter username and password");
    }
    if ( username == credArray.username && password == credArray.password){
        islogin = true;
        window.location.replace("/");
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

export default {islogin} ;