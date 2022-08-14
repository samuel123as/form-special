const sign__btn = document.querySelector('#sign-up-button');
const sign_in_btn = document.querySelector('#sign-in-button');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign_up_mode');
})
sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign_up_mode');
})