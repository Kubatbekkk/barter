const menuBtn = document.querySelector('.nav-btn')
const showSideBar = document.querySelector('.sidebar')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    showSideBar.classList.add('show-sidebar')
    menuOpen = true
  } else {
    showSideBar.classList.remove('show-sidebar')
    menuOpen = false
  }
})
