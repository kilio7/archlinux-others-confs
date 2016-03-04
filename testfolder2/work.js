$(document).ready(function() {
		// $(".st").click(function(){
  //       //$(".st").slideToggle("slow", directori(left));
  //       $(p).show("slide", { direction: "left" }, 1000);
  //   });
var arr = [1,2,3,4,5], current = 0, all = 4;
myFunction = function(x){
current=current+x;
if(current>all){
	current=0;
}else if(current<0){
	current=all;
}
$("#das").html(arr[current]+ "<br>");
};

window.setInterval(slideint = function(){
current=current+1;
if(current>all){
	current=0;
}else if(current<0){
	current=all;
}
$("#das").html(arr[current]+ "<br>");
},7000);
});

//if (currentImage == locations.length)
//	currentImage = 0;
//document.images["picture"].src = locations[currentImage];
//return false;