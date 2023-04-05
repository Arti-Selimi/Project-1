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
        sidebar.innerHTML = `<i id="sidebarOff" class="fa-solid fa-arrow-right fa-lg" onclick="toggleSidebar('off')"></i>` + sidebarInfo.innerHTML
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