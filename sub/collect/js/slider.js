window.addEventListener("load", function () {
    
    var sliderChange = function(e){
        var sliderPos = e != undefined ? e.target.value : document.querySelector("#slider").value;
        document.querySelector(".foreground-img").style.width = sliderPos + "%";
        document.querySelector(".slider-button").style.left = "calc(" + sliderPos + "% - 24px)";
    }
    
    let move
    let sliderPos = document.querySelector("#slider");
    
    function slidermove() {
        move = setInterval(() => {
            sliderPos.value++;
            sliderChange();
        }, 7);
    }
    
    
    this.setTimeout(slidermove, 1200);
    sliderChange();        
    document.querySelector("#slider").addEventListener("input", sliderChange, false);
    document.querySelector("#slider").addEventListener("change", sliderChange, false);
    document.querySelector("#slider").addEventListener("touchstart", () => clearInterval(move), false);
    document.querySelector("#slider").addEventListener("mouseover", () => clearInterval(move), false);
})