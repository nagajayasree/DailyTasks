let name = document.getElementById("uname");
let password = document.getElementById("pwd");

function validate() {
  if (name.value == password.value) {
    return true;
  } else {
    alert("Invalid Id and Password");
    return false;
  }
}

function refresh(){
    window.location.reload();
}