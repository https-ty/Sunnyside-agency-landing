// function toggleMenu() {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('active');
//   }

// document.querySelector('.hamburger').addEventListener('click', function() {
//   const navbar = document.querySelector('header .navbar');
//   navbar.classList.toggle('active');
//   navbar.classList.toggle('inactive'); // Add/remove inactive class to sync the spike effect
// });

// // Optional: to ensure spike effect hides after the navbar closes
// document.querySelector('header .navbar').addEventListener('transitionend', function(event) {
//   if (event.propertyName === 'opacity' && !this.classList.contains('active')) {
//     this.classList.add('inactive');
//   }
// });

// document.querySelector('.hamburger').addEventListener('click', function() {
//     const navbar = document.querySelector('header .navbar');
//     navbar.classList.toggle('active');
//   });

//Toggle Hamburger
document.querySelector(".hamburger").addEventListener("click", function () {
  const navbar = document.querySelector("header .navbar");
  navbar.classList.toggle("active");
});

//Desktop to Mobile Img switching
function updateImages() {
  const graphicDesignImg = document.getElementById("graphic-design-img");
  const photographyImg = document.getElementById("photography-img");

  const imageTransformImg = document.getElementById("image-transform");
  const imageStandOutImg = document.getElementById("image-stand-out");

  const imageGalleryMilkbottlesImg = document.getElementById("image-gallery-milkbottles");
  const imageGalleryOrangeImg = document.getElementById("image-gallery-orange");
  const imageGalleryConeImg = document.getElementById("image-gallery-cone");
  const imageGallerySugarcubesImg = document.getElementById("image-gallery-sugar-cubes");

  const screenWidth = window.innerWidth;

  if (screenWidth <= 425) {
    graphicDesignImg.src = "images/mobile/image-graphic-design.jpg";
    photographyImg.src = "images/mobile/image-photography.jpg";

    imageTransformImg.src = "images/mobile/image-transform.jpg";
    imageStandOutImg.src = "images/mobile/image-stand-out.jpg";

    imageGalleryMilkbottlesImg.src = "images/mobile/image-gallery-milkbottles.jpg";
    imageGalleryOrangeImg.src = "images/mobile/image-gallery-orange.jpg";
    imageGalleryConeImg.src = "images/mobile/image-gallery-cone.jpg";
    imageGallerySugarcubesImg.src = "images/mobile/image-gallery-sugar-cubes.jpg";
  } else {
    graphicDesignImg.src = "images/desktop/image-graphic-design.jpg";
    photographyImg.src = "images/desktop/image-photography.jpg";

    imageTransformImg.src = "images/desktop/image-transform.jpg";
    imageStandOutImg.src = "images/desktop/image-stand-out.jpg";

    imageGalleryMilkbottlesImg.src = "images/desktop/image-gallery-milkbottles.jpg";
    imageGalleryOrangeImg.src = "images/desktop/image-gallery-orange.jpg";
    imageGalleryConeImg.src = "images/desktop/image-gallery-cone.jpg";
    imageGallerySugarcubesImg.src = "images/desktop/image-gallery-sugarcubes.jpg";
  }
}
window.onload = updateImages;

window.onresize = updateImages;
//Desktop to Mobile Img switching
