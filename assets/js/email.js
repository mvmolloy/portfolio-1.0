$(document).ready(function () {
    $("#contactForm").submit(function(){
        alert("submitting")
        return submitForm(this);
    });
});
function submitForm(contactForm) {
initEmailJS();
//pass user inputs to EmailJS
emailjs.send("gmail", "portfolio", {
    "name": contactForm.name.value,
    "phone": contactForm.phone.value,
    "email": contactForm.email.value,
    "message": contactForm.message.value
}) 
//log an success/error message to console and display success/error feedback to user
.then( 
    function(response) {
        //contact form success
        console.log("FORM SENT", response);
    },   
    function(error) {
        // contact form error
        console.log("ERROR: FORM NOT SENT", error);
    }
);
return false;  
}

function initEmailJS() {
    emailjs.init("user_AAsZLnhAZieILowz83fRw");
}