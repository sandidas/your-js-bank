// get value from ID innner Text
function getInnerValueFromId(elementId) {
  const textElement = document.getElementById(elementId).innerText;
  const floatElement = parseFloat(textElement);
  return floatElement;
}

// get value from input field by ID
function getValuefromInputField(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  console.log(inputFieldValue);
  inputField.value = "";
  return inputFieldValue;
}

// Set Value by ID
function setValuebyID(elementID, newValue) {
  const htmlElement = document.getElementById(elementID);
  htmlElement.innerText = newValue;
}

// Check is NaN
function reallyIsNan(param) {
  if (Number.isNaN(param)) {
    return false;
  } else {
    return param;
  }
}
function errorReport(param) {
  alert(param);
}
//

// Deposit Function
document.getElementById("deposit-now").addEventListener("click", function () {
  //:::STEP ONE -- Work with current and new deopsit
  // get deposit from input filed
  const depositAmount = getValuefromInputField("deposit-amount");

  // :: ERROR REPORTING: if not a number
  if (isNaN(depositAmount)) {
    alert("Please provide a valid number");
    return; // to stop here
  }
  // get current deposit amount from
  const balanceDepositAmount = getInnerValueFromId("deposit");
  // additiona new and balance deposit
  const newDepositAmount = balanceDepositAmount + depositAmount;
  // push new deposit ammout to id
  setValuebyID("deposit", newDepositAmount);

  //:::STEP TWO -- Work with new deopsit and total balance
  // Get total value from id
  const currentTotalBalance = getInnerValueFromId("balance");
  const newTotalAmount = depositAmount + currentTotalBalance;
  setValuebyID("balance", newTotalAmount);
  //   console.log(currentTotalAmount);
});

// Withdraw Function
document.getElementById("withdraw-now").addEventListener("click", function () {
  //:: STEP ONE NEW WITHDORW
  const newWithdrawAmount = getValuefromInputField("withdraw-amount");
  // :: ERROR REPORTING: if not a number
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return; // to stop here
  }
  // Check current balance
  const currentTotalBalance = getInnerValueFromId("balance");
  // ERROR REPORT if withdraw is getter than current balance
  if (newWithdrawAmount > currentTotalBalance) {
    alert("You don't have sufficient money");
    return;
  }
  // minus current withdraw from total balance
  const totalbanalance = currentTotalBalance - newWithdrawAmount;
  // pust to balance
  setValuebyID("balance", totalbanalance);

  // addition current withdrow with new withdrow
  const oldWtithdrawAmount = getInnerValueFromId("withdraw");
  const currentWithdrawAmount = newWithdrawAmount + oldWtithdrawAmount;
  // Push withdraw amount to ID
  setValuebyID("withdraw", currentWithdrawAmount);
  //:: STEP TWO UPDATE WITH TOTAL

  //   console.log(totalbanalance);
});

// console.log(depositValue, withdrawValue, balanceValue);
