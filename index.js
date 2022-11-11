const alphabet = [
  { letter: "a", count: 0 },
  { letter: "b", count: 0 },
];

let stat = "";
let even = false;
let odd = false;
let string = "";
let enter = document.getElementById("enter");
let clear = document.getElementById("clear");
let strings = document.getElementById("str");
let result = document.getElementById("stat");

const validate = () => {
  string = document.getElementById("string").value;

  if (string == "") {
    alert("No string found.");
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == "a") {
        alphabet[0].count += 1;
        if (alphabet[0].count % 2 == 0) {
          even = true;
        } else {
          even = false;
        }
      } else if (string[i] == "b") {
        alphabet[1].count += 1;
        if (alphabet[1].count % 2 != 0) {
          odd = true;
        } else {
          odd = false;
        }
      } else {
        alphabet[0].count = 0;
        alphabet[1].count = 0;
      }
    }

    if (alphabet[0].count == 0 || alphabet[1].count == 0) {
      strings.innerText += "\n" + string;
      result.innerText += "\n" + "Rejected";
    } else {
      checkStatus();
    }
  }
};

const checkStatus = () => {
  if (even && odd) {
    stat = "Accepted";
  } else {
    stat = "Rejected";
  }

  strings.innerText += "\n" + string;
  result.innerText += "\n" + stat;

  odd = false;
  even = false;
  alphabet[0].count = 0;
  alphabet[1].count = 0;
};

const clean = () => {
  strings.innerText = "";
  result.innerText = "";
};
