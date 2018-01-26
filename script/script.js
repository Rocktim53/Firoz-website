
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixheader").style.top = "0px";
    } else {
        document.getElementById("fixheader").style.top = "-45px";
    }
}