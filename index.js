const btnSubmit = document.querySelector('button');
const usernameInputField = document.querySelector('#username');
const userageInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message')

btnSubmit.addEventListener('click',()=>{
    const usernameInput = usernameInputField.value.toLowerCase();
    const userAgeImput = userageInputField.value;

if(usernameInput === 'harry'&& userAgeImput === '11'){
    console.log('Welcome');
    loginMessage.textContent = 'Welcome, Harry' ;
    loginMessage.style.color = 'green';
} else {
    console.log('Go away!');
    loginMessage.textContent = 'Go away, you are not Harry' ;
    loginMessage.style.color = 'red';
}
});
