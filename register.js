import islogin from "./login.js";


var credArray = [{
    username: "",
    password: "",
    email: ""
}];

function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password = document.getElementById("password").value;
    if(username.length <= 0|| password.length <= 0){
        alert("Please enter all the fields");
    }
    credArray.push({
        username: username,
        password: password,
        email: email
    });
    console.log(credArray);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    islogin = true;
}

export default credArray;