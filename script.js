let fullName=document.querySelector("#fn");
let phoneNo=document.querySelector("#pn");
let email=document.querySelector("#eml");
let password=document.querySelector("#pwd");
let message=document.querySelector("#msg");
let submit=document.querySelector(".btn button");

let nameError=document.querySelector("#name-error");
let PhoneNoError=document.querySelector("#PhNo-error");
let emailError=document.querySelector("#email-error");
let passwordError=document.querySelector("#password-error");
let messageError=document.querySelector("#mesg-error");

fullName.addEventListener("keyup", function(){
    let name=fullName.value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        return false;
    }
    nameError.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}) 

phoneNo.addEventListener("keyup", function(){
    let phnNo=phoneNo.value.trim(); // Trim to remove unwanted spaces
    // Check if the input is empty
    if(phnNo.length === 0){
        PhoneNoError.innerHTML="Phone No is required";
        return false;
    }
    // Check if the input contains only digits
    if(!/^\d+$/.test(phnNo)){
        PhoneNoError.innerHTML="Only digits please";
        return false;
    }
    // Check if the length is exactly 11 digits
    if(phnNo.length !== 11){
        PhoneNoError.innerHTML="Phone No should be of 11 digits";
        return false;
    }
    // All validations passed, display success icon
    PhoneNoError.innerHTML=`<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
    return true;
})

email.addEventListener("keyup", function () {
    let emailId = email.value.trim(); // Trim spaces
    // Check if input is empty
    if (emailId.length === 0) {
        emailError.innerHTML = "Email Id is required";
        return false;
    }
    // Validate email format
    if (!emailId.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Invalid Email Id";
        return false;
    }
    // If all validations pass, show the success icon
    emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
    return true;
})

password.addEventListener("keyup", function(){
    let paswrd=password.value;
    if(paswrd.length==0){
        passwordError.innerHTML="Password is required";
        return false;
    }
    if(paswrd.length!==8){
        passwordError.innerHTML="Not enough";
        return false;
    }
    if(!paswrd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        passwordError.innerHTML="Make it unique";
        return false;
    }
    passwordError.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}) 

message.addEventListener("keyup", function(){
    let msg=message.value;
    let required=30;
    let remaining=required-msg.length;
    if(msg.length==0){
        messageError.innerHTML="Message is reuired";
        return false;
    }
    if(remaining>0){
        messageError.innerHTML=remaining+" more characters required";
        return false;
    }
    messageError.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    return true;
})

submit.addEventListener("click", function(){
    if(fullName.value.length==0 || phoneNo.value.trim().length==0 || email.value.trim().length==0 || password.value.length==0 || message.value.length==0){
        alert("Incomplete form can not be submitted");
    }
})