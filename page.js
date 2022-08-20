var modal= document.getElementById("myModal");
var btn =document.querySelectorAll("#myBtn")

 var span=document.getElementById("close");

 btn[0].addEventListener("click", function(){
   modal.style.display="block";
   btn.textContent="you clicked";
 })
 btn[1].addEventListener("click", function(){
  modal.style.display="block";
  btn.textContent="you clicked";
})
btn[2].addEventListener("click", function(){
  modal.style.display="block";
  btn.textContent="you clicked";
})
 span.addEventListener('click',function(){
   modal.style.display ="none"
 }) 

 window.addEventListener("click", function(event){
   if (event.target == modal){
    modal.style.display ="none"
   }
 })
 /*btn.onclick=function(){
   modal.style.display="block";
   btn.textContent="you clicked";
 }*/