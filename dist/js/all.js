const navigationIcon = document.querySelector(".material-symbols-outlined");
const navigationList = document.querySelector(".navigation__list");


navigationIcon.addEventListener("click", function () {
  if (navigationIcon.innerText === "menu") {
    navigationIcon.innerText = "close";
  } else {
    navigationIcon.innerText = "menu";
  }
  navigationList.classList.toggle("invisible");
});

const mediaQuery = window.matchMedia("(min-width: 768px)");
if (mediaQuery.matches == true) {
  navigationList.classList.remove("invisible");
  
}

if (window.matchMedia("(max-width: 768px)").matches == true) {
  navigationList.classList.add("invisible");
  
}

if (window.matchMedia("(min-width: 1200px)").matches == true) {
  
}


