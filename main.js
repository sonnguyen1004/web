// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 5000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Enable manual navigation
  swiper2.on("slideChangeTransitionEnd", function () {
    swiper2.autoplay.start();
  });
  
  swiper2.on("mouseenter", function () {
    swiper2.autoplay.stop();
  });
  
  swiper2.on("mouseleave", function () {
    swiper2.autoplay.start();
  });

  
  // Navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",windowScrollY > 0);
  });
  
  
  // Responsive navigation menu toggle
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");
  
  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
  
    function hideIntroPage() {
      var introPage = document.querySelector('.intro-page');
      introPage.classList.add('hide');
    }

    
    document.addEventListener("DOMContentLoaded", function() {
      var introPage = document.querySelector('.intro-page');
      var splashScreen = document.querySelector('.splash-screen');
      var audioElement = document.getElementById('intro-audio');
      var exploreLink = document.getElementById('explore-icon');
      var memoriesLink = document.getElementById('contact-icon');
    
      audioElement.addEventListener('canplaythrough', function() {
        // Commented out the autoplay for audioElement
        // audioElement.play();
      });
    
      function hideIntroPage() {
        introPage.classList.add('hide');
        audioElement.pause(); // Pause the audio when hiding the intro page
      }
    
      exploreLink.addEventListener('click', function(event) {
        event.preventDefault();
        hideIntroPage();
        window.open('explore.html', '_blank');
      });
    
      memoriesLink.addEventListener('click', function(event) {
        hideIntroPage();
        // You can replace 'cover.html' with the appropriate URL for your "Memories" page
        window.open('cover.html', '_blank');
      });
    
      window.addEventListener('focus', function() {
        // Resume playing the audio when the window gains focus
        audioElement.play();
      });
    
      window.addEventListener('blur', function() {
        // Pause the audio when the window loses focus
        audioElement.pause();
      });
    
      setTimeout(function() {
        hideIntroPage();
        splashScreen.classList.add('hide');
        audioElement.play(); // Play the audio when hiding the intro page
      }, 4000);
    });
    
 
    const cursor = document.querySelector(".cursor");
    var timeout;
  
    // Follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;
  
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";
  
      // Cursor effects when mouse stopped
      function mouseStopped() {
        cursor.style.display = "none";
      }
  
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });
  
    // Cursor effects when mouseout of the document
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  
    // Check if intro page and toggle cursor visibility
    if (document.body.classList.contains("intro-page")) {
      // Hide cursor only when mouse is inside the intro page content
      document.querySelector(".intro-page").addEventListener("mouseover", () => {
        cursor.style.display = "none";
      });
    } 
  
    // Function to update the header color when scrolling
  function updateHeaderColor() {
    const header = document.getElementById('header');
    const targetElement = document.querySelector('.img-tr');
    const scrollPosition = window.scrollY || window.pageYOffset;
    const targetElementOffset = targetElement.offsetTop;

    if (scrollPosition > 0 && scrollPosition < targetElementOffset) {
      header.classList.add('black-bg');
    } else {
      header.classList.remove('black-bg');
    }
  }

  // Event listener for scroll events
  window.addEventListener('scroll', updateHeaderColor);


document.addEventListener('contextmenu', event => event.preventDefault());
 
    document.onkeydown = function (e) {
 
        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }
