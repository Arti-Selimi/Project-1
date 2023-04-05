let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let card = document.getElementById("card");
let popUp = document.getElementById("pop-up");
let popUpContainer = document.getElementById("popUp-container");
let logInButton = document.getElementById("logInButton");
let showUser = document.getElementById("user");

const togglePopUp = (visibility, cardId) =>{
    if(cardId) {
        popUp.innerHTML = `<i class="fa-solid fa-x" id="back" onclick="togglePopUp('hide')"></i>` + document.querySelector('#'+cardId).innerHTML
    }
    if(visibility === 'open') {
        popUp.style.display = "flex";
        popUpContainer.style.display = "flex";
    } else {
        popUp.style.display = "none";
        popUpContainer.style.display = "none";
    }
}

const signOut = () =>{
    localStorage.clear()
    if(logInButton.innerHTML === 'Log Out') {
        showUser.style.display = "none"
        logInButton.innerHTML = 'Log In'
    } else {
        return
    }
}

if(localStorage.username) {
    logInButton.innerHTML = 'Log Out'
    showUser.innerHTML = localStorage.username
    showUser.style.display = "flex"
}

let sidebar = document.getElementById("sidebar")
let sidebarContainer = document.getElementById("sidebar-container")
let sidebarInfo = document.getElementById("sidebar-info")

const toggleSidebar = (toggle) =>{
    if(toggle === 'on') {
        sidebar.style.display = "flex"
        sidebarContainer.style.display = "flex"
        sidebar.innerHTML = `<i id="sidebarOff" class="fa-solid fa-arrow-right fa-lg" onclick="toggleSidebar('off')"></i>` + sidebarInfo.innerHTML + dropdown.innerHTML
    } else {
        sidebar.style.display = "none"
        sidebarContainer.style.display = "none"
    }
}

let dropdownBtn =  document.getElementById("dropdownBtn")
let dropdown = document.getElementById("dropdown")
let rmDropdownBtn = document.getElementById("rmDropdownBtn")

const toggleDropdown = (direction) =>{
    if(direction === 'down') {
        dropdownBtn.style.display = 'none'
        dropdown.style.display = 'inherit'
        rmDropdownBtn.style.display = 'flex'
    } else {
        dropdown.style.display = 'none'
        rmDropdownBtn.style.display = 'none'
        dropdownBtn.style.display = 'flex'
    }
}

let baseLogo = document.getElementById("Logo-1")
let secondaryLogo = document.getElementById("Logo-2")
let terciaryLogo = document.getElementById("Logo-3")

if(document.getElementById("logo").getAttribute('src') === '/Logo-1.png'){
    terciaryLogo.style.display = "inherit"
    secondaryLogo.style.display = "inherit"
    baseLogo.style.display = "none"
} else if(document.getElementById("logo").getAttribute('src') === '/Logo-2.png') {
    baseLogo.style.display = "inherit"
    terciaryLogo.style.display = "inherit"
    secondaryLogo.style.display = "none"
} else {
    secondaryLogo.style.display = "inherit"
    baseLogo.style.display = "inherit"
    terciaryLogo.style.display = "none"
}

const toggleLogo = (id) => {
    if(id === 'baseLogo') {
        document.getElementById("logo").setAttribute('src', '/Logo-1.png')
    } else if(id === 'secondaryLogo') {
        document.getElementById("logo").setAttribute('src', '/Logo-2.png')
    } else {
        document.getElementById("logo").setAttribute('src', '/Logo-3.png')
    }
    if(document.getElementById("logo").getAttribute('src') === '/Logo-1.png'){
        terciaryLogo.style.display = "inherit"
        secondaryLogo.style.display = "inherit"
        baseLogo.style.display = "none"
    } else if(document.getElementById("logo").getAttribute('src') === '/Logo-2.png') {
        baseLogo.style.display = "inherit"
        terciaryLogo.style.display = "inherit"
        secondaryLogo.style.display = "none"
    } else {
        secondaryLogo.style.display = "inherit"
        baseLogo.style.display = "inherit"
        terciaryLogo.style.display = "none"
    }
}

let userIcon = document.getElementById("userIcon")
let ltrName = document.getElementById("showUsername")
let iconName = document.getElementById("showIcon")

if(userIcon.style.display === "none"){
    iconName.style.display = "inherit"
    ltrName.style.display = "none"
} else {
    iconName.style.display = "none"
    ltrName.style.display = "inherit"
}

const toggleUser = (id) => {
    userIcon.style.display = "inherit"
    if(id === 'name') {
        userIcon.style.display = "none"
        showUser.style.display = "inherit"
    } else {
        userIcon.style.display = "inherit"
        showUser.style.display = "none"
    }
    if(userIcon.style.display === "none"){
        iconName.style.display = "inherit"
        ltrName.style.display = "none"
    } else {
        iconName.style.display = "none"
        ltrName.style.display = "inherit"
    }
}