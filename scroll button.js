$(function() {
let btn = document.querySelector('.toTop')
function magic () {
  if (window.pageYOffset > 50) {
    btn.style.opacity = '0.7'
  } else { btn.style.opacity = '0' }
}

btn.onclick = function () {
	window.scrollTo(0,0)
}
window.onscroll = magic

});