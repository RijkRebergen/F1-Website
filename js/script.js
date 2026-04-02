document.addEventListener("DOMContentLoaded",function(){
var btn=document.getElementById("menuToggle");
if(btn){
btn.addEventListener("click",function(){
var menu=document.getElementById("menu");
menu.style.display=(menu.style.display==="block")?"none":"block";
});
}
});