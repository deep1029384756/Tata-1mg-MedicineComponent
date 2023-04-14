var list = ['Overview', 'Uses and benefits', 'Side effects', 'How to use','How drug works','Safety advice','Missed dose','All substitutes','Quick tips','Fact box','Patient concerns'];
var swiper = new Swiper(".component__swiper", { 
      direction: "vertical",
      slidesPerView:2,
      freeMode: {
        enabled:true,
        sticky:false,
      },
      spaceBetween: 0,
      // scrollbar: { el: ".swiper-scrollbar" },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + list[index] + "</span>";
        },
      },
      mousewheel: true,
      keyboard: true,
      speed:900
});

const imageList = document.querySelectorAll("#image--list");
const mainImage = document.querySelector("#modal__img");
const cross= document.querySelector(".modal__container--cross");
const modal= document.querySelector(".modal");
const slides= document.querySelector(".slideshow-container");

// mini swiper
let slideIndex = 1;
showSlides(slideIndex);
let plus = false;
function plusSlides(n) {
  showSlides(slideIndex += n);
  plus=true;
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//modal jsavascript



slides.addEventListener("click",(e)=>{
  console.log(e.target.src)
  mainImage.src = e.target.src;
  if(plus){
    plus =false;
  }else{
    modal.classList.toggle("show");
  }
  imageList.forEach(ele=>{
    if(ele.src === mainImage.src)
    addClass(ele);
  })
})

imageList.forEach(ele=>{
  ele.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target.src);
    mainImage.src = e.target.src;
    addClass(ele)
  })
 
})
cross.addEventListener("click",()=>{
  modal.classList.toggle("show");
})


function remove(){
  imageList.forEach(ele=>{
    ele.classList.remove("border")
  })
}
function addClass(ele){
  remove();
  if(ele.src === mainImage.src){
    console.log("hii")
    console.log(ele.target)
    ele.classList.add("border")
  }
}