const btnLogin = document.getElementById("btnLogin");
// const txtMobile = document.getElementById("mobile");

function checkValidMobile(mobile) {
  return mobile.match(/09([0-9]{8})\w/) ? true : false;
}

btnLogin.addEventListener("click", function () {
  const txtMobile = document.getElementById("mobile");
  const txtPassword = document.getElementById("password");
  //   console.log(checkValidMobile(txtMobile.value));
  if (checkValidMobile && txtPassword.value == "SSCGi@123456") {
    alert("Login successful!");
    window.location.href = "pasaload.html?m=" + txtMobile.value;
  } else {
    alert("Invalid username or password");
  }
});
