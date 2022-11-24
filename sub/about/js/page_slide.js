// $(function() {
//    $('#close a').click(function(e) {
//         $('.slide-in')
//         .animate({marginTop : "100vh"}, 300)
//     });
// });

window.onload = function() {
    const close = document.querySelector('.close > a');
    const slide = document.querySelector('.slide-in');
    
    close.onclick = function(e) {
        e.preventDefault();
        slide.classList.add("silde-out")
        e.history.back();
    }

    // function link() {
    //     setTimeout(function() {
    //         location.href = 'http://www.google.com';
    //     }, 300);
    // }
}