const API_URL = "http://localhost:3000"
const signUpButton = document.getElementById("sign-up")
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let phoneNumber = document.getElementById("numberphone");
let email = document.getElementById("email")
let birthDate = document.getElementById("date-n")
let isMale = document.getElementById("h");
let isFemale = document.getElementById("f");


firstName.addEventListener("change",(e)=>{
    firstName = e.target.value;
})

lastName.addEventListener("change",(e)=>{
    lastName = e.target.value;
})

phoneNumber.addEventListener("change",(e)=>{
    phoneNumber = e.target.value;
})

email.addEventListener("change",(e)=>{
    email = e.target.value;
})

birthDate.addEventListener("change",(e)=>{
    birthDate = e.target.value;
})

signUpButton.addEventListener("click",async (e)=>{
    try{
 const response = await fetch(`${API_URL}/register`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            email,
            birthDate,
            gender:isMale.ariaChecked ? "M" : "F"
        }),
    })

    if(response.ok) window.location.href = "login.html"
    console.log(response);
    }catch(e){
        console.log(e);
    }
})
