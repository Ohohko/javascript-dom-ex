const submitButton = document.querySelector('button');
const form = document.querySelector('form');
const confirmance = document.querySelector('.hidden');

form.addEventListener('submit', (event) => {
    //event.preventDefault();
    let confirmForm = confirm(`your name: ${event.target.name.value}
    your age:${event.target.age.value}   
     your email: ${event.target.email.value}.
    Do you confirm?`);

    if (confirmForm) {
        alert('congratulations you successfully sent this form');
    }
    else {
        form.reset();
    }

})