const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//shoe input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// Show success outline

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

// check email is valid
function isvalidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//check required fields

function checkRequired(inputArr){
     inputArr.forEach(function(input){
        if(input.value.trim() === '') {
           showError(input,`${getFieldNameinput(input)} is required`);
        } else {
            showSuccess(input); 
        }
     });
}

//Get fieldname

function getFieldNameinput(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

//EventListeners
form.addEventListener('submit', e=>{
    e.preventDefault();

   checkRequired([username, email, password, password2]);
  

});
