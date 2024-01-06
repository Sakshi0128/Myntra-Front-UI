window.addEventListener('scroll', function() {
    var circle = document.querySelector('.circle');
    if (window.pageYOffset > 50) { // change 50 to your desired scroll position
      circle.style.display = 'none';
    } else {
      circle.style.display = 'block';
    }
 });

// var codeImg = document.querySelector('.code img');

// codeImg.addEventListener('click', function() {
 
//  window.open('https://www.myntra.com/online-fashion-store', '_blank');
// });


var codeImgElements = document.querySelectorAll('.code img');

for (var i = 0; i < codeImgElements.length; i++) {

 codeImgElements[i].addEventListener('click', function() {


    var url = 'https://www.myntra.com/online-fashion-store';
    if (this.alt === 'Image2') {
      url = 'https://www.myntra.com/online-fashion-store';
    }

       window.open(url, '_blank');
 });
}

var codeImgElements = document.querySelectorAll('.home');

for (var i = 0; i < codeImgElements.length; i++) {

 codeImgElements[i].addEventListener('click', function() {


    var url = 'https://www.myntra.com/online-fashion-store';
    if (this.alt === 'Image2') {
      url = 'https://www.myntra.com/online-fashion-store';
    }

       window.open(url, '_blank');
 });
}
   
   document.querySelector('.text4').addEventListener('click', function() {
    var url = 'https://www.myntra.com/online-fashion-store';
    window.open(url, '_blank');
   });

   document.querySelector('.card').addEventListener('click', function() {
    var url = 'https://www.myntra.com/puma?f=Categories%3ACasual%20Shoes%2CSports%20Shoes&rawQuery=puma&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0';
    window.open(url, '_blank');
   });

   document.querySelector('.card1').addEventListener('click', function() {
    var url = 'https://www.myntra.com/lingerie?f=Brand%3AJockey%2CVan%20Heusen&rf=Price%3A219.0_2519.0_219.0%20TO%202519.0';
    window.open(url, '_blank');
   });
   document.querySelector('.card2').addEventListener('click', function() {
    var url = '   https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&sort=popularity';
    window.open(url, '_blank');
   });
   document.querySelector('.card3').addEventListener('click', function() {
    var url = '   https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&sort=popularity';
    window.open(url, '_blank');
   });
   document.querySelector('.card4').addEventListener('click', function() {
    var url = 'https://www.myntra.com/myntrafwd?f=Brand%3ACHIC%20BY%20TOKYO%20TALKIES%2CCURVE%20BY%20KASSUALLY%2CKASSUALLY%2CSASSAFRAS%2CSASSAFRAS%20BASICS%2CSASSAFRAS%20Curve%2CSASSAFRAS%20worklyf%2CTokyo%20Talkies%3A%3AQuick%20Filters%3AHot%20Trends&rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&sort=new';
    window.open(url, '_blank');
   });
   document.querySelector('.card5').addEventListener('click', function() {
    var url = '  https://www.myntra.com/mensfwdexcl?f=Brand%3AHIGHLANDER%2CWROGN%2CWROGN%20ACTIVE%3A%3AQuick%20Filters%3AHot%20Trends&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0&sort=new';
    window.open(url, '_blank');
   });
   document.querySelector('.card6').addEventListener('click', function() {
    var url = '   https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&sort=popularity';
    window.open(url, '_blank');
   });
   document.querySelector('.card7').addEventListener('click', function() {
    var url = 'https://www.myntra.com/mowmensethniccategorystore?f=Brand%3AAnouk%2CHangup%2CHouse%20of%20Pataudi%2CKISAH%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A65.0_100.0_65.0%20TO%20100.0';
    window.open(url, '_blank');
   });

   document.querySelector('.card8').addEventListener('click', function() {
    var url = ' https://www.myntra.com/footwear?f=Brand%3AADIDAS%3A%3ACategories%3ACasual%20Shoes%2CSports%20Shoes&rawQuery=footwear&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0';
    window.open(url, '_blank');
   });
   document.querySelector('.card9').addEventListener('click', function() {
    var url = '   https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0';
    window.open(url, '_blank');
   });
   document.querySelector('.card10').addEventListener('click', function() {
    var url = '  https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0';
    window.open(url, '_blank');
   });

   document.querySelector('.footer-img').addEventListener('click', function() {
    var url = 'https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059?mt=8';
    window.open(url, '_blank');
   });
 
// let profile = document.querySelector('.profile');

// document.querySelector('#menu-btn').onclick = () =>{
//   profile.classList.toggle('active') ;
// }
// let drop = document.querySelector('.dropdown-content');

// document.querySelector('#search-btn').onclick = () =>{
//     drop.classList.toggle('active') ;
// }
function toggleMenu() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}