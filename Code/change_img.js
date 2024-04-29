(function () {
    var container = document.querySelector('.image-change');
    var images = container.querySelectorAll('img');
    var counter = 0;
   
    function changeImage() {
       images[counter].style.zIndex = 1;
       counter = (counter + 1) % images.length;
       images[counter].style.zIndex = 2;
    }
   
    setInterval(changeImage,5000); // Change image every 4 seconds
   })();
   