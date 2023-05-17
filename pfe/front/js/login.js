const BASE_URL = "http://localhost:3000"
let phoneNumberField = document.getElementById("phone");
let phoneNumber;
const loginButton = document.getElementById("btn-login")
const changePageButton = document.getElementById("btn-sign");
    
phoneNumberField.addEventListener('change',(e)=>{
    phoneNumber = e.target.value;
})


changePageButton.addEventListener('click',(e)=>{
    window.location.href = "sign.html";
})


loginButton.addEventListener('click',async ()=>  {
    let user;
    console.log(phoneNumber);
    try{
        user = await fetch(`${BASE_URL}/login`,{
        method:"post",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify({phoneNumber})
        })}
    catch(e){
        console.log(e);
    }
    if(user.status === 200) window.location.href = "choix.html";
})