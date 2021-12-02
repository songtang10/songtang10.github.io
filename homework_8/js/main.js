let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var myFullpage = new fullpage('#fullpage', {
  anchors: ['About me', 'Projects'],
  // #sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['About me', 'Projects']
}); 
