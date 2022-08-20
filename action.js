document.getElementById("cardnum").innerHTML = "0000 0000 0000 0000";
document.getElementById("name").innerHTML = "JANE APPLESEED";
document.getElementById("M").innerHTML = "00/";
document.getElementById("Y").innerHTML = "00";
document.getElementById("backnum").innerHTML = "000";

/*___________CARDHOLDERE NAME_______________*/

var nameBox = document.getElementById("Cardholder_NameInput");
nameBox.onkeyup = function () {
  if (nameBox.value == "")
    document.getElementById("name").innerHTML = "JANE APPLESEED";
  else document.getElementById("name").innerHTML = nameBox.value.toUpperCase();
};
nameBox.onblur = function () {
  if (nameBox.value == "") {
    document.getElementById("nameRequird").innerHTML = "Can't be blank";
    document
      .getElementById("Cardholder_NameInput")
      .setAttribute("class", "error");
  } else {
    document.getElementById("nameRequird").innerHTML = "";
    document.getElementById("Cardholder_NameInput").setAttribute("class", "");
  }
};
/* __________________CARD NUMBER____________________ */

var numBox = document.getElementById("Card_NumberInput");

numBox.onkeyup = function () {
  if (numBox.value == "")
    document.getElementById("cardnum").innerHTML = "0000 0000 0000 0000";
  else {
    if (numBox.value.length > 16) {
      document.getElementById("numberRequird").innerHTML =
        "Number must be 16 digit";
      document
        .getElementById("Card_NumberInput")
        .setAttribute("class", "error");
    } else {
      document.getElementById("cardnum").innerHTML = numBox.value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      document.getElementById("numberRequird").innerHTML = "";
      document.getElementById("Card_NumberInput").setAttribute("class", "");
    }
  }
};
numBox.onblur = function () {
  if (isNaN(numBox.value)) {
    document.getElementById("numberRequird").innerHTML =
      "Wrong format, numbers only";
    document.getElementById("Card_NumberInput").setAttribute("class", "error");
  } else if (numBox.value.length != 16) {
    document.getElementById("numberRequird").innerHTML =
      "Number must be 16 digit";
    document.getElementById("Card_NumberInput").setAttribute("class", "error");
  } else if (numBox.value == "") {
    document.getElementById("numberRequird").innerHTML = "Can't be blank";
    document.getElementById("Card_NumberInput").setAttribute("class", "error");
  } else {
    document.getElementById("numberRequird").innerHTML = "";
    document.getElementById("Card_NumberInput").setAttribute("class", "");
  }
};
/* __________________DATE____________________ */
var M = document.getElementById("MonthInput");
var Y = document.getElementById("yearInput");
M.onkeyup = function () {
  if (M.value == "") document.getElementById("M").innerHTML = "00/";
  else {
    if (M.value > 9) document.getElementById("M").innerHTML = M.value + "/";
    else document.getElementById("M").innerHTML = "0" + M.value + "/";
  }
};
Y.onkeyup = function () {
  if (Y.value == "") document.getElementById("Y").innerHTML = "00";
  else {
    if (Y.value.length > 2) {
    } else document.getElementById("Y").innerHTML = Y.value;
  }
};
M.onblur = function () {
  if (M.value == "") {
    document.getElementById("MYRequird").innerHTML = "Can't be blank";
    document.getElementById("MonthInput").setAttribute("class", "error");
  } else {
    document.getElementById("MYRequird").innerHTML = "";

    document.getElementById("MonthInput").setAttribute("class", "");
  }
};
Y.onblur = function () {
  if (Y.value == "") {
    document.getElementById("MYRequird").innerHTML = "Can't be blank";
    document.getElementById("yearInput").setAttribute("class", "error");
  } else {
    document.getElementById("MYRequird").innerHTML = "";
    document.getElementById("yearInput").setAttribute("class", "");
  }
};
/* __________________CVC____________________ */
var CVC = document.getElementById("cvcInput");
CVC.onkeyup = function () {
  if (CVC.value == "") document.getElementById("backnum").innerHTML = "000";
  else {
    if (CVC.value.length > 3) {
    } else document.getElementById("backnum").innerHTML = CVC.value;
  }
};
CVC.onblur = function () {
  if (CVC.value == "") {
    document.getElementById("cvcRequird").innerHTML = "Can't be blank";
    document.getElementById("cvcInput").setAttribute("class", "error");
  } else {
    document.getElementById("cvcRequird").innerHTML = "";
    document.getElementById("cvcInput").setAttribute("class", "");
  }
};
/*_____________________________Button_________________ */
var btn = document.getElementById("confirmBut");
var form = document.getElementById("FormDetails");
var completeCard = document.getElementById("completeCard");
btn.addEventListener("click", function handleClick() {
  if (
    nameBox.value != "" &&
    numBox.value != "" &&
    M.value != "" &&
    Y.value != "" &&
    CVC.value != ""
  ) {
    form.style.display = "none";
    completeCard.style.display = "block";
  } else {
    if (nameBox.value == "") {
      document.getElementById("nameRequird").innerHTML = "Can't be blank";
      document
        .getElementById("Cardholder_NameInput")
        .setAttribute("class", "error");
    }
    if (numBox.value == "") {
      document.getElementById("numberRequird").innerHTML = "Can't be blank";
      document
        .getElementById("Card_NumberInput")
        .setAttribute("class", "error");
    }
    if (M.value == "") {
      document.getElementById("MYRequird").innerHTML = "Can't be blank";
      document.getElementById("MonthInput").setAttribute("class", "error");
    }
    if (Y.value == "") {
      document.getElementById("MYRequird").innerHTML = "Can't be blank";
      document.getElementById("yearInput").setAttribute("class", "error");
    }
    if (CVC.value == "") {
      document.getElementById("cvcRequird").innerHTML = "Can't be blank";
      document.getElementById("cvcInput").setAttribute("class", "error");
    }
  }
});
