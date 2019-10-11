function greaterNum(num1, num2) {
    if (num1 > num2) {
        num1;
    } else {
        num2;
    }
}

function updateComparisonResult() {
  var num1 = document.getElementById("number1")
  var num2 = document.getElementById("number2")
  var resultString = greaterNum(num1, num2) + " is greater.";
  document.getElementById("result").textContet = resultString;
}
