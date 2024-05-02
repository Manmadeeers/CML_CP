function regbutton() {
     window.location.href = "registration.html";
}

function wearlink() {
     window.location.href = "wear.html";
}

function shoelink() {
     window.location.href = "shoe.html";
}
function equiplink() {
     window.location.href = "equipment.html";
}
function goodlink() {
     window.location.href = "error.html";
}

document.getElementById('menu-button').addEventListener('click', function () {
     document.getElementById('mobile-menu').classList.toggle('open');
});
document.getElementById('close-menu').addEventListener('click',function(){
     document.getElementById('mobile-menu').classList.remove('open');
})
