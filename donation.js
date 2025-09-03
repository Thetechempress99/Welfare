function validateform(){
    let name = document.getElementById('fname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('phone').value;
    let donate = document.querySelector('input[name="as"]:checked');
    let amount = document.querySelector('input[name="amount"]:checked');
    let don = document.querySelector('input[name="to"]:checked');
    let errormessage = document.getElementById('errormessage');

    errormessage.innerHTML = "";
    document.getElementById('errormessage').style.color = 'orange'

    if (name.length <= 10) {
        errormessage.innerHTML = "Name must be at more than 10 characters long.";
        return false
    }

    if (age < 18) {
        errormessage.innerHTML = "You must be 18 years old and above to volunteer.";
        return false
    }
    
    if (!email.includes('@') || !email.includes('.') || !email.includes('com')){
        errormessage.innerHTML = "Enter a valid email address.";
        return false
    }

    if (number.length !== 11) {
        errormessage.innerHTML = "Enter a valid 11-digit Phone number.";
        return false
    }

    if (!donate){
        errormessage.innerHTML = "Please select an identity.";
        return false
    }
    if (!amount){
        errormessage.innerHTML = "Please choose an amount and if others, staet in the text area below.";
        return false
    }
    if (!don){
        errormessage.innerHTML = "Please choose a project.";
        return false
    }

    alert("Thank You For Your Donation!")
    return true
}