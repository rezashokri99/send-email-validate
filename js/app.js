// access & variables//

// access to the email input
let emailInput = document.querySelector("#email");

// access to the subject input
let subjectInput = document.querySelector("#subject");

// access to the message input
let messageInput = document.querySelector("#message");

// access to the send btn
let sendBtn = document.querySelector("#sendBtn");

// access to the reset btn
let resetBtn = document.querySelector("#resetBtn");

// access to the form
let form = document.querySelector("#email-form");






// email validate
let emailIsValidate = false;
// subject validate
let subjectIsValidate = false;
// message validate
let messageIsValidate = false;



// listeners //


// listener when load page
document.addEventListener("DOMContentLoaded", checkValidateAllInput)

// listenre for email input when blur
emailInput.addEventListener("blur", validateEamil);

// listenre for subject input when blur
subjectInput.addEventListener("blur", validateSubject);

// listenre for message input when blur
messageInput.addEventListener("blur", validateMessage);
// listenre for message input when keydown
messageInput.addEventListener("keydown", validateMessage);

// listener when click on reset btn
resetBtn.addEventListener("click", resetBtnFn)

// listener when click send btn
form.addEventListener("submit", submitForm)






// functions //


// validateEamil function
function validateEamil() {

    // if @ doesn't exist emailInput 
    if (!emailInput.value.includes("@")) {
        
        // make border emailInput red
        emailInput.style.borderColor = "red";
        emailIsValidate = false;

        // if @ exist emailInput
    }else if (emailInput.value.includes("@")) {

        // make border emailInput green
        emailInput.style.borderColor = "green";
        emailIsValidate = true;
    }
    checkValidateAllInput()

}


// validateSubject function
function validateSubject() {

    
    // if subjectInput length < 1
    if (subjectInput.value.length < 1) {
        
        // make border subjectInput red
        subjectInput.style.borderColor = "red"
        subjectIsValidate = false;
        // if subjectInput length <= 1 
    }else if (subjectInput.value.length >= 1) {

        // make border subjectInput green
        subjectInput.style.borderColor = "green";
        subjectIsValidate = true;
    }
    checkValidateAllInput()

}

// validateMessage function
function validateMessage() {

    // if messageInput length < 1
    if (messageInput.value.length < 1) {
        
        // make border messageInput red
        messageInput.style.borderColor = "red"
        messageIsValidate = false;

        // if messageInput length <= 1 
    }else if (messageInput.value.length >= 1) {

        // make border messageInput green
        messageInput.style.borderColor = "green";
        messageIsValidate = true;
    }
    checkValidateAllInput();

}

// check validate all input
function checkValidateAllInput(){
    // if all validates is true sent btn enable
    if (emailIsValidate && subjectIsValidate && messageIsValidate) {
        sendBtn.disabled = false;

    // if all validates is true sent btn disable
    }else {
        sendBtn.disabled = true;
    }
}

// resetBtnFn when clicked btn 
function resetBtnFn(e) {
    e.preventDefault();
    form.reset();
}

// sendBtn when clicked btn 
function submitForm(e) {
    e.preventDefault();

    // access to loadersImg
    let loadersImg = document.querySelector("#loaders img");
    // doing block display loadersImg
    loadersImg.style.display = "block";


    // create sendEmailGit 
    let sendEmailGit = document.createElement("img");
    // give src to sendEmailGit
    sendEmailGit.src = "../img/mail.gif";
    // doing block display sendEmailGit
    sendEmailGit.style.display = "block"


    // after 2 secondes
    setTimeout(() => {

        // doing none display loadersImg
        loadersImg.style.display = "none";

        // access to the loaders container
        let loaders = document.querySelector("#loaders");

        // add sendEmailGit to loaders container
        loaders.appendChild(sendEmailGit);

        // after 2 secondes 
        setTimeout(() => {

            // doing none display sendEmailGit
            sendEmailGit.style.display = "none";
            
            // reset form
            form.reset();

        }, 1800);

    }, 2000);
}