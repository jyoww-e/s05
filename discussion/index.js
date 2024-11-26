const btn = document.getElementById("clickme");
let counter = 1;
btn.addEventListener("click", () => console.log(counter++));

function printName() {
  const name = prompt("Enter your name: ");
  console.log(name);
}

// printName(); //
