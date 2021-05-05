let username;
let email;
let password;
let password2;
function validateForm () {
    username = document.forms["myForm"]["username"].value;
    email = document.forms["myForm"]["email"].value;
    password = document.forms["myForm"]["password"].value;
    password2 = document.forms["myForm"]["password2"].value;

    if(username.length < 4) {
        document.getElementById("error-username").innerHTML = "Username must be at least 3 characters";
    }
    if(email.length < 1) {
        document.getElementById("error-email").innerHTML = "Email must contain @";
    }
    if(password.length < 6) {
        document.getElementById("error-password").innerHTML = "Password must be at least 6 characters";
    }
    if(password2.length < 6) {
        document.getElementById("error-password").innerHTML = "Password must be at least 6 characters";
    }
    if(username.length < 4 || email.length < 1 || password.length < 6 || password2.length < 6) {
        return false;
    }
}
function checkRequired () {
username = document.getElementById("username").value;
    if(username == "") {
        alert("Username is empty");
        return false;
    }
    email = document.getElementById("email").value;
    if(email == "") {
        alert("Email is empty");
        return false;
    }
    password = document.getElementById("password").value;
    if(password == "") {
        alert("Password is empty");
        return false;
    }
    password2 = document.getElementById("password2").value;
    if(password2 == "") {
        alert("Password2 is empty");
        return false;
    }
}

function stringLength  (minlength, maxlength) {
    username = document.forms["myForm"]["username"].value;
    email = document.forms["myForm"]["email"].value;
    password = document.forms["myForm"]["password"].value;
    password2 = document.forms["myForm"]["password2"].value;


if(username.length < minlength || username.length > maxlength) {
    alert("Please input the username between " +minlength+ " and " +maxlength+ " characters");
    return false;
} else {
    alert("Your username is accepted");
    return true;
}

if(email.length < minlength || email.length > maxlength) {
    alert("Please input the email between " +minlength+ " and " +maxlength+ " characters");
    return false;
} else {
    alert("Your email is accepted");
    return true;
}

if(password.length < minlength || password.length > maxlength) {
    alert("Please input the password between " +minlength+ " and " +maxlength+ " characters");
    return false;
} else {
    alert("Your password is accepted");
    return true;
}

if(password2.length < minlength || password2.length > maxlength) {
    alert("Please input the password2 between " +minlength+ " and " +maxlength+ " characters");
    return false;
} else {
    alert("Your password2 is accepted");
    return true;
}

}


function ValidateEmail (email) {

 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email.value))
  {
    return (true) // using a regular expression to validate email
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function ValidatePassword () {
    if(document.getElementsByName("password") ==
    document.getElementsByName("password2")) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "matching";
    }
    else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "not matching";
    }
}

function main () {
    validateForm ();
    checkRequired ();
    ValidateEmail ();
    ValidatePassword ();
    stringLength (3, 18);
}
document.getElementById("submit").addEventListener("click", main);