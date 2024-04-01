const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

//changing the submit botton behavior
form.addEventListener('submit',(e) =>{
    let messages = [];
    if(name.value ===''|| name.value == null){
        messages.push('Name is requried');
    }
    // if(password.value === '' || password.value === null){
    //     messages.push("password required for login.");
    // }
    if(password.value.length <= 6){
        messages.push("passowrd must be longer than 6 characters");
    }
    if(password.value.length >= 20){
        messages.push("password must be less than 20 characters");
    }
    if(password.value === 'password' || password.value === 'Password'){
        messages.push("don't use password as password");
    }
    if(messages.length>0){
        e.preventDefault();
        errorElement.innerText = messages.join(',');
    }
});