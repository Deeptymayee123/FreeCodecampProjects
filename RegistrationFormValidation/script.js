const form = document.querySelector("#registration-form");
const name = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("#submit");

// add eventlistener in submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let arr = checkEmptyValue([name, email, password, confPassword]);
  // let arr = true;
  let Name;
  let Email;
  let Password;
  let ConfPassword;

  if (arr) {
    Name = ValidName(name);
    Email = ValidEmail(email);
    Password = ValidPassword(password);
    ConfPassword = ValidConfirmPassword(password, confPassword);

    let val = Name && Email && Password && ConfPassword;
    if (val) {
      alert("registration successfully done!");
      form.reset();
      document.querySelectorAll(".form-group").forEach((group) => {
        group.className = "form-group";
      });
    }
  }
});

// add eventlistener for all type of instant input fields
name.addEventListener("input", () => ValidName(name));
email.addEventListener("input", () => ValidEmail(email));
password.addEventListener("input", () => ValidPassword(password));
confPassword.addEventListener("input", () =>
  ValidConfirmPassword(password, confPassword),
);

//func for validating name
function ValidName(name) {
  let Name = name.value.split(" ");
  if (Name.length < 2) {
    showErrorMsg(name, `${formatField(name)} should be full name!`);
    return false;
  }
  showSuccessMsg(name);
  return true;
}

function ValidEmail(email) {
  const regexOfEmail = /^[A-Za-z0-9.%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;

  if (!regexOfEmail.test(email.value)) {
    showErrorMsg(email, `${formatField(email)} is not valid!`);
    return false;
  }
  showSuccessMsg(email);
  return true;
}

function ValidConfirmPassword(password, confPassword) {
  if (password.value !== confPassword.value) {
    showErrorMsg(
      confPassword,
      `${formatField(confPassword)} is not same password!`,
    );
    return false;
  }

  showSuccessMsg(confPassword);
  return true;
}

function ValidPassword(password) {
  const regexOfPswd =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!regexOfPswd.test(password.value)) {
    showErrorMsg(password, `${formatField(password)} is not strong!`);
    return false;
  }
  showSuccessMsg(password);
  return true;
}

function checkEmptyValue(arr) {
  let boolval = true;
  arr.forEach((element) => {
    if (element.value.trim() === "") {
      showErrorMsg(element, `${formatField(element)} is required`);
      boolval = false;
    } else {
      showSuccessMsg(element);
    }
  });
  return boolval;
}

function showErrorMsg(input, msg) {
  const group = input.parentElement;
  const errordisplay = input.parentElement.querySelector("small");

  group.classList.add("error");
  errordisplay.innerHTML = msg;
  errordisplay.style.color = "#f30808";
}

function formatField(input, msg) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showSuccessMsg(input) {
  const group = input.parentElement;
  const errordisplay = input.parentElement.querySelector("small");

  group.classList.remove("error");
  // group.classList.add("success");
  errordisplay.innerHTML = "";
  errordisplay.style.color = "#338bd7";
}
