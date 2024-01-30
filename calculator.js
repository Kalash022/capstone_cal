function appendToDisplay(value) {
  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === "%" ||
    value === "." ||
    /^[0-9]+$/.test(value)
  ) {
    document.getElementById("display").value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function eraseLastCharacter() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
c
function calculate(check) {
  try {
    let exp
    if (check === "binary") {
      exp = document.getElementById("display").value;
    } else {
      exp = document.getElementById("display").value + '*0.01'
      // exp = exp.replace(/%/g, "*0.01*");
    }
    document.getElementById("display").value = eval(exp);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// function disableButton(buttonId) {}
