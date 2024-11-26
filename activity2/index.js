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
                <td>${transHistory[i].amount}</td>
                <td>${transHistory[i].balance}</td>
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

  txtBalance.innerHTML = `${loadBalance}`;
  loadHistory();
});

btnProceed.addEventListener("click", function () {
  const txtMobile = document.getElementById("mobile");
  const txtAmount = document.getElementById("amount");

  const txtBalance = document.getElementById("balance");
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
});

btnAddBalance.addEventListener("click", function () {
  const txtBalance = document.getElementById("balance");
  let additional = prompt("Please enter balance to add:");
  let newBalance = loadBalance + Number(additional);
  loadBalance = newBalance;
  txtBalance.innerHTML = `${newBalance}`;
});
