const openCity = (evt, blockOrder) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("main__wrapper--section-3--content-table--tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("main__wrapper--section-3--content--tab--tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(blockOrder).style.display = "flex";
    evt.currentTarget.className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";  
  dots[slideIndex - 1].className += " active";
}

// function for cost range display
const cost_range_function = () => {
  let x = document.getElementById("c_range").ariaValueMax;
  document.getElementById("").innerHTML;
}

