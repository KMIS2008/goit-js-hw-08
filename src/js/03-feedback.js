import  throttle  from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

toolStorage();

function inputText (event) {
    event.preventDefault();

    const info = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

localStorage.setItem(FEEDBACK_KEY, JSON.stringify(info));


}

form.addEventListener('input', throttle(inputText), 500);

function toolStorage(){

    const infoForm = JSON.parse(localStorage.getItem(FEEDBACK_KEY))

    console.log(infoForm)
    form.elements.email.textContent = infoForm.email.value || "";
    form.elements.message.textContent = infoForm.message.value || "";
   
}


function buttonPress(event){

    console.log ()
    form.reset()
}

form.addEventListener('submit', buttonPress)