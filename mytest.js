<script type="text/javascript">
  
var x = document.querySelectorAll(".post");

x.forEach(function(elem,i) {
    if(checkOverflow(elem) == false)
	 x[i].style.height = "auto";
	 
});


x.forEach(function(elem,i) {
    elem.addEventListener("click",function(){
    if(checkOverflow(elem) == true)
     x[i].style.height = "auto";
     document.getElementById("test").style.transform = "rotate(180deg)";
	 
	  
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
  


</script>