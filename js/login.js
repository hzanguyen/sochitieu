// modal
// open modal register  

const modal1 = document.querySelector('.js-show_login')
const regBtns = document.querySelectorAll('.js-register')
const modal = document.querySelector('.js-show_register')
const authForms = document.querySelectorAll('.js-auth-form')
window.onload= function(){
    modal1.classList.add('open');
}

function showModal() {
    modal.classList.add('open')
    modal1.classList.remove('open')
}
for (const regBtn of regBtns) {
    regBtn.addEventListener('click', showModal)
}
var tk=document.getElementById("emaillogin")
var btnLogin=document.querySelector('#btnlogin')
btnLogin.addEventListener('click',function(){
    if(tk.value=="hanguyenvx1804@gmail.com"){
        if(mk.value=="180403")
            window.location.href="./index.html"
    } else{
        alert('Sai email')
    }
})

const mk=document.getElementById("passlogin")


// close register



// close when click outward


// open modal login 
const showLogins = document.querySelectorAll('.js-login')
function showModalLogin() {
    modal1.classList.add('open')
    modal.classList.remove('open')
}
for (const showLogin of showLogins) {
    showLogin.addEventListener('click', showModalLogin)
}

// close Login 
const closeLoginBtns = document.querySelectorAll('.js-login_close')
function hideLoginBtn(){
    modal1.classList.remove('open')
}
for (const closeLoginBtn of closeLoginBtns) {
    closeLoginBtn.addEventListener('click', hideLoginBtn)
}

// close when click outward

