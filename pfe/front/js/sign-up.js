const API_URL = "http://localhost:3000";
const signUpButton = document.getElementById("sign-up");
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let phoneNumber = document.getElementById("numberphone");
let email = document.getElementById("email");
let birthDate = document.getElementById("date-n");
let isMale = document.getElementById("h");
let isFemale = document.getElementById("f");

// signup initial state
const signupData = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  birthDate: null,
  gender: "m",
};

firstName.addEventListener("change", e => {
  signupData.firstName = e.target.value;
});

lastName.addEventListener("change", e => {
  signupData.lastName = e.target.value;
});

phoneNumber.addEventListener("change", e => {
  signupData.phoneNumber = e.target.value;
});

email.addEventListener("change", e => {
  signupData.email = e.target.value;
});

birthDate.addEventListener("change", e => {
  signupData.birthDate = e.target.value;
});

signUpButton.addEventListener("click", async e => {
  console.log(signupData);
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...signupData,
        gender: isMale.checked ? "m" : "f",
      }),
    });

    if(response.ok) window.location.href = "login.html"
    console.log(await response.json());
  } catch (e) {
    console.log(e);
  }
});
