const menu = document.getElementById('menu')
const menuMain = document.getElementById('menu-main')
const menuAbout = document.getElementById('menu-about')
const menuCases = document.getElementById('menu-cases')
const menuVideo = document.getElementById('menu-video')
const menuForm = document.getElementById('menu-form')
const menuIcon = document.getElementById('menu-icon')
const btnContact = document.getElementById('btn-contact')
const btnModal = document.getElementById('btn-modal')
const modal = document.getElementById('modal')

/* const screens = document.querySelectorAll('.screen')
const screenMain = document.getElementById('screen-main')
const screenAbout = document.getElementById('screen-about')
const screenCases = document.getElementById('screen-cases')
const screenVideo = document.getElementById('screen-video')
const screenForm = document.getElementById('screen-form')
 */

menuIcon.onclick = () => {
    console.log('click menuIcon')
    menu.classList.add('responsive')
}

btnContact.onclick = () => {
    modal.classList.add('active')
}

btnModal.onclick = () => {
    modal.classList.remove('active')
}