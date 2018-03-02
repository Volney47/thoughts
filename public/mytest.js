
var x = document.querySelectorAll(".post");

x.forEach(function(elem,i) {
    if(checkOverflow(elem) == false)
	 x[i].style.height = "auto";
	 
});


x.forEach(function(elem,i) {
    elem.addEventListener("click",function(){
    if(checkOverflow(elem) == true)
     x[i].style.height = "auto";
     else
	 x[i].style.height = "18rem";
	  
    })
});




function checkOverflow(el)
{
   var curOverflow = el.style.overflow;

   if ( !curOverflow || curOverflow === "visible" )
      el.style.overflow = "hidden";

   var isOverflowing = el.clientWidth < el.scrollWidth ||      el.clientHeight < el.scrollHeight;

   el.style.overflow = curOverflow;

   return isOverflowing;
}
  
