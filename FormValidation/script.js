const registerationForm = document.querySelector("#registeration-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

registerationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".form-group").forEach((group) => {
    group.className = "form-group";
  });
  const isRequiredvalid = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]);

  let isformValid = isRequiredvalid;
  let isUsernameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isPasswordMatch = false;

  if (isRequiredvalid) {
    isUsernameValid = checkLength(username, 3, 15);
    isEmailValid = checkEmail(email);
    isPasswordValid = checkLength(password, 6, 25);
    isPasswordMatch = checkPasswordsMatch(password, confirmPassword);
  }
  isformValid =
    isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatch;
  if (isformValid) {
    alert("Registration successfull!");
    registerationForm.reset();
  }
});

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    return false;
  } else {
    showSuccess(input2);
    return true;
  }
}

function checkEmail(email) {
  ///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/;
  if (emailregex.test(email.value.trim())) {
    showSuccess(email);
    return true;
  } else {
    showError(email, "Email is not valid");
    return false;
  }
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${formatFieldName(input)} must be at lease ${min} characters.`,
    );
    return false;
  } else if (input.value.length > max) {
    showError(input, `${formatFieldName(input)} must be less than ${max}`);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function checkRequired(inputArray) {
  let isValid = true;

  inputArray.forEach((input) => {
    //password is required
    if (input.value.trim() === "") {
      showError(input, `${formatFieldName(input)} is required`);
      isValid = false;
    }
  });
  return isValid;
}

//format field name with proper capitalization
function formatFieldName(input) {
  //username id: "username"= U + sername
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  //for adding "error/success" value to parent
  console.log(input);

  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}
