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