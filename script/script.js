
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


var slideIndex=1;
var click=0;
var time1;

function plusSlide(n)
{
	click=1;
	showSlides(slideIndex+=n);
}

function currentSlide(n)
{
	click=1;
	showSlides(slideIndex=n);
}

function showSlides(n)
{
	var i;
	var slides=document.getElementsByClassName("slideimg");
	var dots=document.getElementsByClassName("dots");
	if(n>slides.length)
		slideIndex=1;
	if(n<1)
		slideIndex=slides.length;

	for(i=0;i<slides.length;i++)
	{
	  slides[i].style.display="none";
	  dots[i].className = dots[i].className.replace(" active"," ");
	}

	slides[slideIndex-1].style.display = "block";  
  	dots[slideIndex-1].className += " active";

  	if(click==0)
  		time1=setTimeout(function(){showSlides(slideIndex+=1);},4000);
  	else if(click==1)
    	 click=0;

}

function initMap()
{
	var location={lat:26.756239,lng: 94.215883};
	var map=new google.maps.Map(document.getElementById("map"),{
		zoom: 15,
		center: location
	});

	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}