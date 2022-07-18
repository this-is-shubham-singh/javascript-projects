let flag = 0;

// recieving -1 or 1 on x  
function controller(x) {

    // adding argument to flag value  
    flag = flag + x;

    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {

    // selecting all slides by class  
    // now slides have array of images starting from 0 to 4 
    let slides = document.getElementsByClassName("slide");

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    // we have to hide that image which is alredy displayed so that only current image is visible
    for (let y of slides) {

        // making previous image display = none
        y.style.display = "none";
    }

    // display which was diclared none in css, make it block. and only make that image block whose parameter has been recieved .And leave rest none
    console.log(num);
    slides[num].style.display = "block";
}