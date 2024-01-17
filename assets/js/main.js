// 메뉴바 클릭, 메뉴창 오픈
const setMenuOpen = () => {
    var element = document.getElementById('menu')
    if (element && element.classList.contains('on')) {
        element.classList.remove('on')
    } else {
        element.classList.add('on')
    }
}

window.addEventListener('load', function() {
    document.querySelector('.menu-btn').addEventListener('click', setMenuOpen)
})
