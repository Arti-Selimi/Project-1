let logInfoButton = document.getElementById("logInfo")

const startsWithCapital = (word) =>{
    return /[a-z]/.test(word.charAt(0))
}

const logUser = (user) =>{
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    window.localStorage.setItem("username", usernameInput)
    window.localStorage.setItem("password", passwordInput)
    if(user === 'user') {
        if(usernameInput === '' || passwordInput === '') {
            alert('Insert username AND password')
            logInfoButton.setAttribute('href', 'logIn.html')
        }else if(startsWithCapital(localStorage.username)){
            alert('Username should start with an uppercase letter')
            logInfoButton.setAttribute('href', 'logIn.html')
        } else {
            return 2
        }
    } else {
        localStorage.username = 'Guest'
    }
}