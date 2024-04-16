
// Function to change the color of the header, body, and navigation bar based on the page
function changeColor() {
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

// Function to retrieve the dropdown menu 
function displayContinents() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Function to close the dropdown menu if the user clicks outside of it
// Reference: https://www.w3schools.com/howto/howto_js_dropdown.asp
function closeDropdowns(event) {
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