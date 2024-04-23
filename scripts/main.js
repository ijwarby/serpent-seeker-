function changeColor() {
  /*Function to control color change for pages, modifies CSS class depending on page name*/
  var header = document.querySelector(".header");
  var body = document.body;
  var colorElements = document.querySelectorAll(".default-color");
  var navBar = document.querySelector(".nav-bar");
  var pageName = window.location.pathname.split("/").pop().split(".")[0];

  if (pageName === "index") {
    navBar.classList.add("default-nav");
    header.classList.add("default-header");
    body.classList.add("default-body");
    colorElements.forEach(function(element) { 
      element.classList.add("default-color");
    });
  } else if (pageName !== "index") {
    navBar.classList.remove("default-nav");
    navBar.classList.add(pageName + "-nav");
    header.classList.remove("default-header");
    header.classList.add(pageName + "-header");
    body.classList.remove("default-body");
    body.classList.add(pageName + "-body");
    colorElements.forEach(function(element) {
      element.classList.remove("default-color");
      element.classList.add(pageName + "-color");
    });
  }
};


function displayContinents() {
  /*Function to display continents in dropdown menu, called from HTML*/
  document.getElementById("myDropdown").classList.toggle("show");
}


function closeDropdowns(event) {
  /*Function to close dropdown menu when clicked outside of it.
    iterate through each dropdown item under the class name "dropdown-content", 
    checks to see if the dropdown is open, and if so, closes it
    Reference: https://www.w3schools.com/howto/howto_js_dropdown.asp */
  if (!event.target.matches('#cont-dropbtn')) {
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


// Call functions
console.log("changeColor function called");
changeColor();
window.onclick = closeDropdowns;