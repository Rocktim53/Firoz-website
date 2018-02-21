
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

    // var height=document.documentElement.scrollHeight;
   var winScroll =document.body.scrollTop || document.documentElement.scrollTop;
     //var scrolled = (winScroll / height)*100;
    //  console.log("Total height: "+document.documentElement.scrollHeight);
    //  console.log("Client height: "+document.documentElement.clientHeight);
    // console.log("difference height: "+height);
    // console.log("scroll: "+winScroll);
    // console.log("calculated: "+scrolled);
   // document.getElementById("bar").style.width = scrolled + "%";

    var home=document.getElementById("home");
    var about=document.getElementById("aboutdetails");
    var ican=document.getElementById("whatIcan");
    var gallery=document.getElementById("gallery");
    var contact=document.getElementById("contact");
    var direction=document.getElementById("direction");

    var fixheader=document.getElementsByClassName("fixheader");
 

     if(winScroll<home.scrollHeight)
     {
     	bottomborderdisable();
        fixheader[0].style.borderBottom="4px solid #4F82C3";
     }

     else if(winScroll>home.scrollHeight && winScroll<(about.scrollHeight+home.scrollHeight))
     {
       bottomborderdisable();
       fixheader[1].style.borderBottom="4px solid #4F82C3";
     }
     else if(winScroll>(about.scrollHeight+home.scrollHeight) && winScroll<(about.scrollHeight+home.scrollHeight+ican.scrollHeight))
     {
     	bottomborderdisable();
       fixheader[2].style.borderBottom="4px solid #4F82C3";
     }
     else if(winScroll>(about.scrollHeight+home.scrollHeight+ican.scrollHeight) && winScroll<(about.scrollHeight+home.scrollHeight+ican.scrollHeight+gallery.scrollHeight))
     {
     	bottomborderdisable();
       fixheader[3].style.borderBottom="4px solid #4F82C3";
     }
     else if(winScroll>(about.scrollHeight+home.scrollHeight+ican.scrollHeight+gallery.scrollHeight) && winScroll<(about.scrollHeight+home.scrollHeight+ican.scrollHeight+gallery.scrollHeight+contact.scrollHeight+direction.scrollHeight))
     {
     	bottomborderdisable();
       fixheader[4].style.borderBottom="4px solid #4F82C3";
     }
     else if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight)
     {
     	bottomborderdisable();
       fixheader[6].style.borderBottom="4px solid #4F82C3";
     }     
     else if(winScroll>(about.scrollHeight+home.scrollHeight+ican.scrollHeight+gallery.scrollHeight+contact.scrollHeight) && winScroll<(about.scrollHeight+home.scrollHeight+ican.scrollHeight+gallery.scrollHeight+contact.scrollHeight))
     {
     	bottomborderdisable();
       fixheader[5].style.borderBottom="4px solid #4F82C3";
     }

}

function bottomborderdisable()
{
	 var fixheader=document.getElementsByClassName("fixheader");
	for(i=0;i<6;i++)
	{
		fixheader[i].style.borderBottom="none";
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
