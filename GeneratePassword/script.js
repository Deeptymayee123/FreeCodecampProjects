const password = document.querySelector("#password");
const copyBtn = document.querySelector("#copy-btn");
const Inputlength = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const pswdBtn = document.querySelector("#generatePassword");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const strengthBar = document.querySelector(".strength-bar");
const strengthLabel = document.querySelector("#strength-label");

//All characters for making password
const AllUletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const AllLLETTERS = "abcdefghijklmnopqrstuvwxyz";
const Allnum = "0123456789";
const Allsymbol = "!@#$%^&*()-_=+[]{}|;:,.<>?";

Inputlength.addEventListener("input", () => {
  lengthValue.textContent = Inputlength.value;
  console.log(Inputlength.value);
});

pswdBtn.addEventListener("click", makePassword);

function makePassword() {
  const len = Number(Inputlength.value);
  const IncludeUppercase = uppercase.checked;
  const IncludeLowercase = lowercase.checked;
  const Includenumber = number.checked;
  const Includesymbol = symbol.checked;
  // console.log(IncludeUppercase);

  if (
    !IncludeUppercase &&
    !IncludeLowercase &&
    !Includenumber &&
    !Includesymbol
  ) {
    alert("You have to select at least one!");
    return;
  }
  const pswd = createRandPassword(
    len,
    IncludeUppercase,
    IncludeLowercase,
    Includenumber,
    Includesymbol,
  );
  password.value = pswd;
  // console.log(pswd);
  strengthMeterUpdate(pswd);
}

function createRandPassword(
  len,
  IncludeUppercase,
  IncludeLowercase,
  Includenumber,
  Includesymbol,
) {
  let allCharacter = "";
  if (IncludeUppercase) allCharacter += AllUletters;
  if (IncludeLowercase) allCharacter += AllLLETTERS;
  if (Includenumber) allCharacter += Allnum;
  if (Includesymbol) allCharacter += Allsymbol;

  let pswd = "";
  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * allCharacter.length);
    pswd += allCharacter[index];
  }
  console.log(pswd);
  return pswd;
}

copyBtn.addEventListener("click", () => {
  let pswdVal = password.value;
  navigator.clipboard
    .writeText(pswdVal)
    .then(() => showSuccessMsg())
    .catch((error) => console.log(error));
});

function showSuccessMsg() {
  copyBtn.style.color = "#95dc31";
  copyBtn.classList.remove("far", "fa-copy");
  copyBtn.classList.add("fa-solid", "fa-check");

  setTimeout(() => {
    copyBtn.style.color = "#121211";
    copyBtn.classList.add("far", "fa-copy");
    copyBtn.classList.remove("fa-solid", "fa-check");
  }, 2500);
}

function strengthMeterUpdate(password) {
  const passwordLen = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  // const hasSymbol = /!@#$%^*()-_=+[]{}|;:,.<>?/.test(password);
  const hasSymbol = /!@#$%^&*()-_=+[]{}|;:,.<>?/.test(password);

  let strengthScore = 0;
  strengthScore += Math.min(passwordLen * 2, 40);

  if (hasUppercase) strengthScore += 15;
  if (hasLowercase) strengthScore += 15;
  if (hasNumber) strengthScore += 15;
  if (hasSymbol) strengthScore += 15;

  //enforce minimum score for every short password
  if (strengthScore < 8) {
    strengthScore = Math.min(passwordLen, 40);
  }

  //ensure valid % progress bar
  const validScore = Math.max(0, Math.min(100, strengthScore));
  strengthBar.style.width = validScore + "%";

  let StrengthLabelOfText = "";
  let barColor = "";

  if (strengthScore < 30) {
    barColor = "#ea4040";
    StrengthLabelOfText = "Weak";
  } else if (strengthScore < 70) {
    barColor = "#f0a53c";
    StrengthLabelOfText = "Medium";
  } else {
    barColor = "#98f960";
    StrengthLabelOfText = "Strong";
  }
  strengthBar.style.backgroundColor = barColor;
  strengthLabel.textContent = StrengthLabelOfText;
}
