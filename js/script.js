

// Slider parent

let slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//   mobile dropdown menu

const element = document.getElementById("nf-menu-toggle");
    element.addEventListener("click", mobilemenu);
    
    function mobilemenu() {
       console.log( document.getElementById('nf-header-menu').classList.toggle('active'));
       console.log(element.classList.toggle('active'));
    }


    //select dropdown select

    function selectdropdownvalue(evt,getcurrentdropid){
        //console.log(evt.currentTarget.innerHTML);
        document.getElementById(getcurrentdropid).innerHTML =evt.currentTarget.innerHTML;
     }