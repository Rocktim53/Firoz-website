window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixheader").className = "fixscroll";
    } else {
        document.getElementById("fixheader").className = "";
    }
}