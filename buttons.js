//functions for buttons
function regbutton() {
     window.location.href = "registration.html";
}
function goodlink() {
     window.location.href = "error.html";
}
function sells(path) {
     window.location.href = `goods.html?path=${path}`;
}
function home() {
     window.location.href = "index.html";
}
// end

// opens mobile menu
document.getElementById('menu-button').addEventListener('click', function () {
     document.getElementById('mobile-menu').classList.toggle('open');
});
document.getElementById('close-menu').addEventListener('click', function () {
     document.getElementById('mobile-menu').classList.remove('open');
});
// end