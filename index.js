function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("acol").classList.toggle("acolb")
    document.getElementById("acol2").classList.toggle("acolb")
 }

function myFunction3() {
  document.getElementById("nav").classList.toggle("navd")
  document.getElementById("nav2").classList.toggle("nav2d")
  var z = document.getElementById("open");
   if(z.innerHTML === "CLOSE"){
       z.innerHTML = "MENU";
       z.style.backgroundColor === "#cc6224";
       z.style.backgroundColor = "#454545";
   }
   else{
           z.innerHTML = "CLOSE";
           z.style.backgroundColor = "#cc6224";
   }
}
