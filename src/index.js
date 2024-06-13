const btnLogin = document.querySelector('.btnLogin')
const btnHome = document.querySelector('.btnHome')
const wrapperHome = document.querySelector('.home')
const btnAbout = document.querySelector('.btnAbout')
const wrapperAbout = document.querySelector('.about')
const btnServices = document.querySelector('.btnServices')
const wrapperServices = document.querySelector('.services')
const btnContact = document.querySelector('.btnContact')
const wrapperContact = document.querySelector('.contact')
const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnClose = document.querySelector('.fa-xmark')
const eyeSlash1 = document.querySelector('#eye-slash1')
const eye1 = document.querySelector('#eye1')
const eyeSlash2 = document.querySelector('#eye-slash2')
const eye2 = document.querySelector('#eye2')
const generatorBtn = document.querySelector('.generatorBtn')
const formRegister = document.querySelector('#formRegister')
const passwordInput = document.querySelectorAll('.passwordInput')

// typewriter variables
const typewriterElement = document.getElementById("typewriter")
const text = "Welcome to our website, this is the home page"
const speed = 70
let index = 0
let intervalId

// function typewriter
function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index)
        index++
    } else {
        clearInterval(intervalId)
        setTimeout(() => {
            typewriterElement.textContent = ""
            index = 0
            intervalId = setInterval(typeWriter, speed)
        }, 3000)
    }
}

// login || register
function showRegister() {
    wrapper.classList.add('active')
}

function showLogin() {
    wrapper.classList.remove('active')
}

// open login
function showPopup() {
    wrapperAbout.classList.remove('active')
    wrapperHome.classList.remove('active')
    wrapperContact.classList.remove('active')
    wrapperServices.classList.remove('active')
    wrapper.classList.add('active-popup')
}

//close login
function closePopup() {
    clearInterval(intervalId)
    wrapper.classList.remove('active-popup')
}

// links navbar
function showHome() {
    clearInterval(intervalId)
    wrapper.classList.remove('active-popup')
    wrapperContact.classList.remove('active')
    wrapperServices.classList.remove('active')
    wrapperAbout.classList.remove('active')
    wrapperHome.classList.add('active')
    typewriterElement.textContent = ""
    index = 0
    intervalId = setInterval(typeWriter, speed)
}

function showAbout() {
    clearInterval(intervalId)
    wrapper.classList.remove('active-popup')
    wrapperHome.classList.remove('active')
    wrapperContact.classList.remove('active')
    wrapperServices.classList.remove('active')
    wrapperAbout.classList.add('active')
}

function showServices() {
    clearInterval(intervalId)
    wrapper.classList.remove('active-popup')
    wrapperAbout.classList.remove('active')
    wrapperHome.classList.remove('active')
    wrapperContact.classList.remove('active')
    wrapperServices.classList.add('active')
}

function showContact() {
    clearInterval(intervalId)
    wrapper.classList.remove('active-popup')
    wrapperServices.classList.remove('active')
    wrapperAbout.classList.remove('active')
    wrapperHome.classList.remove('active')
    wrapperContact.classList.add('active')
}

//toggle icon eyes
function toggleEyeSlash1() {
    eyeSlash1.classList.add('toggle')
    eye1.classList.add('toggle')
    passwordInput[0].type = 'text'
}

function toggleEye1() {
    eyeSlash1.classList.remove('toggle')
    eye1.classList.remove('toggle')
    passwordInput[0].type = 'password'
}

function toggleEyeSlash2() {
    eyeSlash2.classList.add('toggle')
    eye2.classList.add('toggle')
    passwordInput[1].type = 'text'
}

function toggleEye2() {
    eyeSlash2.classList.remove('toggle')
    eye2.classList.remove('toggle')
    passwordInput[1].type = 'password'
}

//generator password & password strength checker
function generatePassword() {
    let password = ''
    const length = 15
    for(let i = 0; i < length; i++) {
        const asciiCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32
        password += String.fromCharCode(asciiCode)
    }

    passwordInput[1].value = password
    passwordInput[1].type = 'text'
    eyeSlash2.classList.add('toggle')
    eye2.classList.add('toggle')

    strengthChecker.call(passwordInput[1]) 
}

function strengthChecker() {

    const password = this.value // this becomes passwordInput[1]
    const passwordText = document.querySelector('.passwordStrength')
    const limitStrength = document.querySelector('.limitStrength')
    const strengths = {
        0: 'VERY WEAK',
        1: 'WEAK',
        2: 'MODERATE',
        3: 'STRONG',
        4: 'VERY STRONG',
        5: 'PERFECT'
    }

    let score = 0

    //requirements
    if(password.length >= 8) score++ 
    if(password.match(/[a-z]/)) score++ 
    if(password.match(/[A-Z]/)) score++ 
    if(password.match(/[0-9]/)) score++ 
    if(password.match(/[^a-zA-Z0-9]/)) score++ 

    // calc % 
    const width = (score / 18) * 100
    limitStrength.style.width = width + '%'

    switch (score) {
        case 1: 
            limitStrength.style.backgroundColor = '#ff0000'
            break
        case 2: 
            limitStrength.style.backgroundColor = '#fd2e2e'
            break
        case 3: 
            limitStrength.style.backgroundColor = '#ff8800'
            break
        case 4: 
            limitStrength.style.backgroundColor = '#ffee00'
            break
        case 5: 
            limitStrength.style.backgroundColor = '#15ff00'
            break
        default: 
            limitStrength.style.backgroundColor = '#ff0000'
    }

    if (password.length > 0) {
        passwordText.innerHTML = strengths[score]
    } else {
        passwordText.innerHTML = strengths[0]
        limitStrength.style.width = '3%'
    }

    return score
}

function isNameValid(name) {
    const regex = /^[a-zA-Z].{2,}$/

    return regex.test(name)
}

function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    return regex.test(email) //return true or false
}

function isPasswordValid(password) {

    return strengthChecker.call({ value: password }) === 5

}

function validateShipping(e) {
    e.preventDefault()

    const nameInput = document.querySelector('#nameInput')
    const emailInput = document.querySelector('#emailInput')
    const checkboxInput = document.querySelector('#checkboxInput')
    
    if(!isNameValid(nameInput.value)) {
        alert('[error] Invalid username')
        return
    } 

    if(!isEmailValid(emailInput.value)) {
        alert('[error] Invalid email')
        return
    }

    if(!isPasswordValid(passwordInput[1].value)) {
        alert('[error] Invalid password')
        return
    }

    if(!checkboxInput.checked) {
        alert('[error] accept the terms and conditions')
        return
    }

    alert('form sucessfully submitted')
    formRegister.submit()
}

formRegister.addEventListener('submit', validateShipping)
passwordInput[1].addEventListener('input', strengthChecker)
generatorBtn.addEventListener('click', generatePassword)
eyeSlash1.addEventListener('click', toggleEyeSlash1)
eye1.addEventListener('click', toggleEye1)
eyeSlash2.addEventListener('click', toggleEyeSlash2)
eye2.addEventListener('click', toggleEye2)
registerLink.addEventListener('click', showRegister)
loginLink.addEventListener('click', showLogin)
btnLogin.addEventListener('click', showPopup)
btnHome.addEventListener('click', showHome)
btnAbout.addEventListener('click', showAbout)
btnServices.addEventListener('click', showServices)
btnContact.addEventListener('click', showContact)
btnClose.addEventListener('click', closePopup)
