const nav = document.getElementById('toggle-div')
const img = document.getElementById('ham')

function toggleNav() {
    nav.classList.toggle('toggle')
    if (nav.classList.contains('toggle'))
    {
        img.src = '../assets/icon-hamburger.svg'
    }
    else
    {
        img.src = '../assets/icon-close.svg'
    }
}