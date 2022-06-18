let form = document.getElementById('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from the inputs
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();


    if(fnameValue ==='') {
        //show error
        //add error class
        setErrorFor(fname, 'firstname cannot be blank');
    } 
    else {
        setSuccessFor(fname)
    }
}

function setErrorFor(input, message) {
    let formControl = input.parentElement; //.form-cnt
    let small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-cnt error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}