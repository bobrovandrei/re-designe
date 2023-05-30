document.body.addEventListener("click", (e) => {
    if (!e.target.matches("#program")) return;
    document.querySelector(".pic img" ).src = e.target.dataset.src;
  
    document
      .querySelectorAll("#program")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  });

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}