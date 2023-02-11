
let menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);






let image = document.getElementsByClassName('parallax-ima');
      new simpleParallax(image, {
            scale: 1.3
      });

let imagef = document.getElementsByClassName('ima-serv-flores');
      new simpleParallax(imagef, {
            scale: 1.3
      });






if(document.querySelector('#container-slider')){
   setInterval('fntExecuteSlide("next")',5000);
}

if(document.querySelector('.listslider')){
   let link = document.querySelectorAll(".listslider li a");
   link.forEach(function(link) {
      link.addEventListener('click', function(e){
         e.preventDefault();
         let item = this.getAttribute('itlist');
         let arrItem = item.split("_");
         fntExecuteSlide(arrItem[1]);
         return false;
      });
    });
}

function fntExecuteSlide(side){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for(let i=0; i<elements.length;i++){

        if(elements[i].style.opacity==1){
            curElement = i;
            break;
        }
    }
    if(side == 'prev' || side == 'next'){

        if(side=="prev"){
            nextElement = (curElement == 0)?elements.length -1:curElement -1;
        }else{
            nextElement = (curElement == elements.length -1)?0:curElement +1;
        }
    }else{
        nextElement = side;
        side = (curElement > nextElement)?'prev':'next';

    }
    
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity=0;
    elements[curElement].style.zIndex =0;
    elements[nextElement].style.opacity=1;
    elements[nextElement].style.zIndex =1;

}







window.onscroll = function() {
  let y = window.scrollY;
  document.getElementById('y').innerText = y;
};


$(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 250) {
            $('.caja-menu').removeClass('normal').addClass('sticky');
            $('.logo').removeClass('invisible').addClass('visible');
        } else if (scroll < 250) {
            $('.caja-menu').removeClass('sticky').addClass('normal');
            $('.logo').removeClass('visible').addClass('invisible');
        }
    });
});








