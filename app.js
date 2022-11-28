function copyMnu() {
  var dptCatgory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departmants");
  dptPlace.innerHTML = dptCatgory.innerHTML;

  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMnu();

const menuButtom = document.querySelector(".triger"),
  closeButtom = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");
menuButtom.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});
closeButtom.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand")
    this.closest(".has-child").classList.toggle("expand");
}

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
const searchButtom = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");

searchButtom.addEventListener('click', () => {
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', () => {
  showClass.classList.remove("showsearch");
})
