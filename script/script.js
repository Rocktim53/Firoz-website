
window.onscroll = function() {myFunction()};

function myFunction() {
	// alert(document.documentElement.scrollTop);
	// if(document.documentElement.scrollTop>=392)
	// 	document.getElementById("aboutdetails").style.marginTop="82px";
	// else
	// 	document.getElementById("aboutdetails").style.marginTop="32px";

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixheader").style.top = "0px";
    } else {
        document.getElementById("fixheader").style.top = "-45px";
    }
}