function appendToDisplay(value) {
  if (value === '+' || value === '-' || /^[0-9]+$/.test(value)) {
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

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function disableButton(buttonId) {
}
