function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function updateComparisonResult() {
  var num1 = parseInt(document.getElementById("number1").value)
  var num2 = parseInt(document.getElementById("number2").value)
  if (typeof(num1) || typeof(num2) != "number") {
    document.getElementById("result").textContent = "One of your inputs is not a number";
  }
  else {
      var resultString = greaterNum(num1, num2) + " is greater.";
  }
  document.getElementById("result").textContent = resultString;

}
