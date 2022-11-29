$(function() {
    $('.view').on("mousemove", zoom);
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        let $tab_contents = $this.parents('.side-tab').find('.side-con-box');

        $all_tab.removeClass('on');
        $this.addClass('on');

        $tab_contents.find('li').removeClass('view');
        $tab_contents.find(`li:eq(${$index})`).addClass('view');

        $tab_contents.find('.img-l').css("background-image", "url('../collect/image/conserve_texture_damage\(" + $index + "\).png')");
        
        $tab_contents.find(`li:eq(${$index})`).on("mousemove", zoom);
    })
})


let typeSelect = document.querySelector(".type-select");
let typeImg = document.querySelector(".type-img");
let allImg = document.querySelectorAll(".type-img > li");
// let viewImg = document.querySelector(".type-img > .view");
// let imgItem = img[0];
// let i;

// console.log(imgItem);
// console.log(imgView);

// typeSelect.addEventListener("click", () => {
// });

// typeImg.addEventListener("mousemove", (e) => {
//     let li = e.target.closest('li'); // (1)
    
//     if (!li) return; // (2)
    
//     if (!typeImg.contains(li)) return; // (3)
    
    
//     console.log(li);
//     // zoom(li);
//     zoom(e, li);

// }, true);

// viewImg.addEventListener("mousemove", zoom, false);


function zoom(e) {
    let imgS = document.querySelector(".img-s"),
        imgL = document.querySelector(".img-l"),
        imgLeft = this.getBoundingClientRect().left,
        imgTop = window.pageYOffset + this.getBoundingClientRect().top,
        x = e.pageX - imgLeft, 
        y = e.pageY - imgTop,
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
}