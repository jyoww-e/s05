let loadBalance = 200;
const transHistory = [];

const btnProceed = document.getElementById("btnProceed");
const btnAddBalance = document.getElementById("btnAddBalance");

function loadHistory() {
  const historyTable = document.getElementById("transact-table");
  historyTable.innerHTML = "";
  let str = `<thead>
                <tr>
                    <th>Mobile</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>`;
  for (let i = 0; i < transHistory.length; i++) {
    str += `<tr>
                <td>${transHistory[i].mobile}</td>
                <td class="text-end">&#8369; ${transHistory[i].amount}</td>
                <td class="text-end">&#8369; ${transHistory[i].balance}</td>
            </tr>`;
  }

  str += "</tbody>";

  historyTable.innerHTML = str;
  //   console.log(str);
}

function pasaLoad(loadBalance, amount, mobile) {
  loadBalance -= amount;
  transHistory.push({
    mobile: mobile,
    amount: amount,
    balance: loadBalance,
  });
  return loadBalance;
}

window.addEventListener("DOMContentLoaded", function () {
  const txtBalance = document.getElementById("balance");
  const sender = document.getElementById("sender");

  const getValues = new URLSearchParams(window.location.search);
  sender.innerHTML = "Hello, " + getValues.get("m");

  if (!getValues.get("m")) {
    alert("No logged in account! Redirecting...");
    window.location.href = "index.html";
  }

  txtBalance.innerHTML = `${loadBalance}`;
  loadHistory();
});

btnProceed.addEventListener("click", function () {
  const txtMobile = document.getElementById("mobile");
  const txtAmount = document.getElementById("amount");

  const txtBalance = document.getElementById("balance");
  if (txtMobile.value == "" || txtAmount.value == "") {
    alert("Missing Fields!");
  } else {
    let amount = txtAmount.value;
    if (loadBalance < amount) {
      console.log(
        "Insufficient balance!\nYour remaining balance is: " + loadBalance
      );
      alert("Insufficient balance!");
    } else {
      let newBalance = pasaLoad(loadBalance, amount, txtMobile.value);
      alert("Balance successfully transferred");
      loadBalance = newBalance;
      txtBalance.innerHTML = `${newBalance}`;
      setTimeout(() => {
        loadHistory();
      }, 500);
      // console.log(transHistory);
    }
  }
});

const AddModal = document.getElementById("addbalance-modal");
AddModal.addEventListener("hidden.bs.modal", () => {
  const txtAddBalance = document.getElementById("txtAddBalance");
  const txtPassword = document.getElementById("txtPassword");
  setTimeout(() => {
    txtAddBalance.value = "";
    txtPassword.value = "";
  }, 200);
});

btnAddBalance.addEventListener("click", function () {
  const txtPassword = document.getElementById("txtPassword");
  if (txtPassword.value === "SSCGi@123456") {
    const txtBalance = document.getElementById("balance");
    const txtAddBalance = document.getElementById("txtAddBalance");
    let additional = Number(txtAddBalance.value);
    let newBalance = loadBalance + additional;
    loadBalance = newBalance;
    txtBalance.innerHTML = `${newBalance}`;
    txtAddBalance.value = "";
    txtPassword.value = "";
    alert("Balance successfully added.");
  } else {
    alert("Wrong password! Please try again.");
  }
});
