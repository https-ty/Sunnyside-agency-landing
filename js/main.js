//Toggle Hamburger
// document.querySelector(".hamburger").addEventListener("click", function () {
//   const navbar = document.querySelector("header .navbar");
//   navbar.classList.toggle("active");
// });

// function toggleMenu() {
//   const hamburger = document.querySelector(".hamburger");
//   const hamburgerClose = document.querySelector(".hamburger-close");
//   const navbar = document.querySelector("header .navbar");

//   // Toggle the navbar active class
//   navbar.classList.toggle("active");

//   // Toggle the visibility of the hamburger and close icons
//   if (navbar.classList.contains("active")) {
//     hamburger.style.display = "none";
//     hamburgerClose.style.display = "block";
//   } else {
//     hamburger.style.display = "block";
//     hamburgerClose.style.display = "none";
//   }
// }

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerClose = document.querySelector(".hamburger-close");
  const navbar = document.querySelector("header .navbar");

  // Toggle the navbar active class
  navbar.classList.toggle("active");

  // Toggle the visibility of the hamburger and close icons
  if (navbar.classList.contains("active")) {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
  } else {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
  }
}




//

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
//
