var message = prompt("What is your name?");
//alert(message + " Wouldn't you like to be a pepper too??");
document.getElementById("welcome-message").innerHTML = `Welcome ${message} to week 2 lab.`;
document.getElementById("footer").style.color = "red";