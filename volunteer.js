function validateform(){
    let name = document.getElementById('fname').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('phone').value;
    let intrest = document.querySelector('input[name="intrests"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');
    let errormessage = document.getElementById('errormessage');

    errormessage.innerHTML = "";
    document.getElementById('errormessage').style.color = 'black'

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

    if (!gender){
        errormessage.innerHTML = "Please select a gender.";
        return false
    }
    if (!intrest){
        errormessage.innerHTML = "Please choose an intrest.";
        return false
    }

    alert("Volunteer Form Submitted Successfully!")
    return true
}