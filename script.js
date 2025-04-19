const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

function addToCart() {
    const toast = document.getElementById("toast");

    toast.classList.add("show");
      setTimeout(() => {
        toast.classList.add("disappear");
          }, 3200);
    toast.classList.remove("disappear");
}      
