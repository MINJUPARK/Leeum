window.addEventListener("load", function () {
    var sliderChange = function(e){
        var sliderPos = e != undefined ? e.target.value : document.querySelector("#slider").value;
        document.querySelector(".foreground-img").style.width = sliderPos + "%";
        document.querySelector(".slider-button").style.left = "calc(" + sliderPos + "% - 24px)";
    }
    sliderChange();
    document.querySelector("#slider").addEventListener("input", sliderChange, false);
    document.querySelector("#slider").addEventListener("change", sliderChange, false);
})