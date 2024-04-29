$(document).ready(function () {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navHide = document.getElementById("nav__hideCT");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      navHide.style.top = "0";
    } else {
      navHide.style.top = "-100px";
    }
  }
});
