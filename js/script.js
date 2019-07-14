function init() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
}

window.addEventListener("load", init);