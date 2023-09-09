import  throttle  from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

// toolStorage();

toolStorage();

form.addEventListener('input', throttle(inputText, 500));


function inputText (event) {
    event.preventDefault();

const info = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

localStorage.setItem(FEEDBACK_KEY, JSON.stringify(info));
}


function toolStorage(){
    const infoFromStorage = localStorage.getItem(FEEDBACK_KEY);
    const infoForm = JSON.parse(infoFromStorage) || {};

    if(infoForm || {}) {
    form.elements.email.value = infoForm.email || "";
    form.elements.message.value = infoForm.message || "";}
   
}

form.addEventListener('submit', buttonPress);

function buttonPress(event){
    event.preventDefault();

    const value = localStorage.getItem(FEEDBACK_KEY);

    console.log (JSON.parse(value));
   

    
    form.reset()
     localStorage.removeItem(FEEDBACK_KEY);
}

