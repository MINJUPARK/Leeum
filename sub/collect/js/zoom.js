window.onload = function() {
    // let typeBox = document.querySelector(".type-select");
    // let type = document.querySelectorAll(".type-select > li");
    let viewImg = document.querySelector(".type-img > .view");
    // let imgItem = img[0];
    // let i;

    // console.log(imgItem);
    // console.log(imgView);
    
    // typeBox.addEventListener("click", () => {
    //     i = img.indexOf(view);
    //     console.log(img);
    //     console.log(i);
    // });
    
    viewImg.addEventListener("mousemove",
    function zoom(e) {
        let $this = document.querySelector(".type-img > .view"),
            imgS = document.querySelector(".img-s"),
            imgL = document.querySelector(".img-l"),
            zoomLeft = $this.getBoundingClientRect().left,
            zoomTop = window.pageYOffset + $this.getBoundingClientRect().top,
            x = e.pageX - zoomLeft, 
            y = e.pageY - zoomTop,
            imgWidth = imgS.width,
            imgHeight = imgS.height,
            xperc = (x / imgWidth) * 100,
            yperc = (y / imgHeight) * 100;
    
        // Add some margin for right edge
        if (x > 0.01 * imgWidth) {
            xperc += 0.15 * xperc;
        }
    
        // Add some margin for bottom edge
        if (y >= 0.01 * imgHeight) {
            yperc += 0.15 * yperc;
        }
    
        // Set the background of the magnified image horizontal
        imgL.style.backgroundPositionX = xperc - 9 + "%";
        // Set the background of the magnified image vertical
        imgL.style.backgroundPositionY = yperc - 9 + "%";
    
        // Move the magnifying glass with the mouse movement.
        imgL.style.left = x - 125 + "px";
        imgL.style.top = y - 125 + "px";
    }, false);
  }