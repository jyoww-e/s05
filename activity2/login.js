const btnLogin = document.getElementById("btnLogin");
// const txtMobile = document.getElementById("mobile");

btnLogin.addEventListener("click", function () {
  const txtMobile = document.getElementById("mobile");
  const txtPassword = document.getElementById("password");

  if (txtPassword.value == "SSCGi@123456") {
    alert("Login successful!");
    window.location.href = "pasaload.html?m=" + txtMobile.value;
  } else {
    alert("Invalid username or password");
  }
});
