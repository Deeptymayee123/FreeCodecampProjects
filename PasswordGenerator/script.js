const password = document.querySelector("#password");
const length = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const generateBtn = document.querySelector("#generate-btn");
const strengthText = document.querySelector(".strength-container p");
const strengthBar = document.querySelector(".strength-bar");
const copyBtn = document.querySelector("#copy-btn");
const strengthLabel = document.querySelector("#strength-label");

//Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbercharacters = "0123456789";
const symbolCharacters = "!@#$%^*()-_=+[]{}|;:,.<>?/";

length.addEventListener("input", () => {
  lengthValue.textContent = length.value;
});

generateBtn.addEventListener("click", makePassword);

function makePassword() {
  const Len = Number(length.value);
  const includeUppercase = uppercase.checked;
  const includeLowercase = lowercase.checked;
  const includeNumber = number.checked;
  const includeSymbol = symbol.checked;
  ``;
  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumber &&
    !includeSymbol
  ) {
    alert("Please select at least one char type");
    return;
  }

  const newPassword = createRandomPassword(
    Len,
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSymbol,
  );
  password.value = newPassword;
  updateStrengthMeter(newPassword);
}

function createRandomPassword(
  Len,
  includeUppercase,
  includeLowercase,
  includeNumber,
  includeSymbol,
) {
  //ABCD...Zabcdef...z0123...9!@#$%^*()-_=+[]{}|;:,.<>?/
  let allCharacter = "";

  if (includeUppercase) allCharacter += uppercaseLetters;
  if (includeLowercase) allCharacter += lowercaseLetters;
  if (includeNumber) allCharacter += numbercharacters;
  if (includeSymbol) allCharacter += symbolCharacters;
  // console.log(allCharacter);

  let password = "";

  for (let i = 0; i < Len; i++) {
    let index = Math.floor(Math.random() * allCharacter.length);
    password += allCharacter[index];
  }
  return password;
}

function updateStrengthMeter(password) {
  const passwordLength = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /!@#$%^&*()-_=+[]{}|;:,.<>?/.test(password);

  let strengthScore = 0;

  strengthScore += Math.min(passwordLength * 2, 40);

  if (hasUppercase) strengthScore += 15;
  if (hasLowercase) strengthScore += 15;
  if (hasNumber) strengthScore += 15;
  if (hasSymbol) strengthScore += 15;

  if (passwordLength < 8) {
    strengthScore = Math.min(strengthScore, 40);
  }

  //ensure the width of the strength bar is a valid percentage
  const safeScore = Math.max(0, Math.min(100, strengthScore));
  strengthBar.style.width = safeScore + "%";

  let strengthLabeltext = "";
  let barColor = "";

  if (passwordLength < 8) {
    //weak password
    barColor = "#fc8181";
    strengthLabeltext = "Weak";
  } else if (strengthScore < 30) {
    console.log(strengthScore, "strengthScore");

    //weak password
    barColor = "#fc8181";
    strengthLabeltext = "Weak";
  } else if (strengthScore < 70) {
    //medium password
    barColor = "#fbd38d"; //yellow
    strengthLabeltext = "Medium";
  } else {
    barColor = "#68d391";
    strengthLabeltext = "Strong";
  }

  strengthBar.style.backgroundColor = barColor;
  strengthLabel.textContent = strengthLabeltext;
}

window.addEventListener("DOMContentLoaded", makePassword);

//copy fun

copyBtn.addEventListener("click", () => {
  if (!password.value) return;

  navigator.clipboard
    .writeText(password.value)
    .then(() => showCopySuccess())
    .catch((error) => console.log("Could not copy:", error));
});

function showCopySuccess() {
  copyBtn.classList.remove("far", "fa-copy");
  copyBtn.classList.add("fas", "fa-check");
  copyBtn.style.color = "#48bb78";

  setTimeout(() => {
    copyBtn.classList.add("far", "fa-copy");
    copyBtn.classList.remove("fas", "fa-check");
    copyBtn.style.color = "";
  }, 1500);
}
