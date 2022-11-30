window.addEventListener("load", function () {
    var sliderChange = function(e){
        var sliderPos = e != undefined ? e.target.value : document.querySelector("#slider").value;
        document.querySelector(".foreground-img").style.width = sliderPos + "%";
        document.querySelector(".slider-button").style.left = "calc(" + sliderPos + "% - 24px)";
    }
    sliderChange();
    document.querySelector("#slider").addEventListener("input", sliderChange, false);
    document.querySelector("#slider").addEventListener("change", sliderChange, false);
    
    this.setTimeout(slidermove, 1500);
    
    var sliderPos;
    function slidermove() {
        sliderPos = document.querySelector("#slider").value;
        // for(let i = sliderPos.value; i >= 0; i--) {
            let move1 = setInterval(() => {
                sliderPos--;
                sliderChange();
            }, 8);
            
            if(sliderPos < 1) {
                clearInterval(move1);

                let move2 = setInterval(() => {
                    sliderPos++;
                    sliderChange();
                }, 10);
            }

        // }
    }
})