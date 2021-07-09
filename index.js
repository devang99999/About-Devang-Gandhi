function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 // Select the button
 const btn = document.querySelector(".btn-toggle");
 // Select the stylesheet <link>
 const theme = document.querySelector("#theme-link");
 
 // Listen for a click on the button
 btn.addEventListener("click", function() {
   // If the current URL contains "ligh-theme.css"
   if (theme.getAttribute("href") == "index1.css") {
     // ... then switch it to "dark-theme.css"
     theme.href = "index1.css ";
   // Otherwise...
   } else {
     // ... switch it to "light-theme.css"
     theme.href = "index1.css";
   }
 });
 function menufun(){
  var x = document.getElementById("nav");
  if(x.style.width === "0px"){
      x.style.width = "100%";
  }
  else{
      x.style.width = "0px"
  }
}
function menufun1(){
   var y = document.getElementById("nav2");
   if(y.style.left === "-1000px"){
       y.style.left = "0px";
       y.style.top === "-1000px";
       y.style.top = "0px"
   }
   var z = document.getElementById("open");
   if(z.innerHTML === "MENU"){
       z.innerHTML = "CLOSE";
       z.style.backgroundColor === "#454545";
       z.style.backgroundColor = "#cc6424";
   }
   else{
       y.style.left = "-1000px";
       y.style.top = "-1000px";
       z.innerHTML = "MENU";
       z.style.backgroundColor = "#454545";
   }
}
