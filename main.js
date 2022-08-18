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
  // console.log(inputFieldValue);
  inputField.value = "";
  return inputFieldValue;
}

// Set Value by ID
function setValuebyID(elementID, newValue) {
  const htmlElement = document.getElementById(elementID);
  htmlElement.innerText = newValue;
}

function numberValidation(param) {
  // return true means error
  const ruleFormat = /^[0-9]+$/;

  if (!ruleFormat.test(param)) {
    // if number not found in parameter then return true. means error found
    return true;
  } else if (isNaN(param)) {
    return true;
  } else {
    return false;
  }
}
function speciaCharValidation(param) {
  // return true means error
  const ruleFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (ruleFormat.test(param)) {
    //find speciall char. If found then true.
    return true;
  } else {
    return false;
  }
}
function notLessZero(param) {
  // return true means error
  if (param < 0) {
    return true;
  } else {
    return false;
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

  // :: ERROR REPORTING: Not less than 0 || not a number || Speciall Char
  if (notLessZero(depositAmount) == true || numberValidation(depositAmount) == true || speciaCharValidation(depositAmount) == true) {
    errorReport("Please provide a valid number.");
    return;
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

  // :: ERROR REPORTING: Not less than 0 || not a number || Speciall Char
  if (notLessZero(newWithdrawAmount) == true || numberValidation(newWithdrawAmount) == true || speciaCharValidation(newWithdrawAmount) == true) {
    errorReport("Please provide a valid number.");
    return;
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
