var swears = [];
var tag = document.querySelector(".first");
var tag2 = document.querySelector(".second");
var tag3 = document.querySelector(".third");
var tag4 = document.querySelector(".fourth");

function checker() {
  var inputField = document.getElementById("inputstuff").value;
  inputField = inputField.toLowerCase().trim();
  var stars = "";

  if (inputField.length !== 0) {
    if (swears.includes(inputField)) {
      for (i = 0; i < inputField.length; i = i + 1) {
        stars = stars + "*";
      }

      tag.textContent = stars + " is a bad word!";
    } else {
      tag.textContent = '"' + inputField + '"' + " is okay, boah.";
    }
  }
}

function addWord() {
  var secondInput = document.querySelector("#secondInput").value;
  secondInput = secondInput.toLowerCase().trim();
  if (swears.includes(secondInput)) {
    tag2.innerHTML = "<h4> Word already exists inside the list. </h4>";
  } else if (secondInput.length !== 0) {
    {
      swears.push(secondInput);
    }
    tag2.textContent = '"' + secondInput + '"' + " is now a swear word!";
  }
}

function deleteSwears() {
  var deleteField = document.querySelector("#deletefield").value;

  for (var i = swears.length; i >= 0; i--) {
    if (deleteField === swears[i]) {
      swears.splice(i, 1);
      tag4.textContent = "Swear Word Deleted.";
    }
  }

  tag3.textContent = swears;
}

function myFunction() {
  var inputField = document.getElementById("inputstuff").value;
  var secondInput = document.querySelector("#secondInput").value;

  if (inputField.length !== 0) {
    checker();
  } else if (secondInput.length !== 0) {
    addWord();
  }
}

function list() {
  var tag3 = document.querySelector(".third");
  tag3.textContent = swears.join(", ");

  if (swears.length === 0) {
    tag3.textContent = "Empty list.";
  }
}

function clearSwears() {
  swears = [];
  var tag3 = document.querySelector(".third");
  tag3.textContent = swears;
}
