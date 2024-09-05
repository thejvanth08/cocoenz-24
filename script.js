// msg to user
console.log("USE IN DESKTOP FOR BETTER EXPERIENCE");

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the .menu element
  const menu = document.querySelector(".top-nav");

  // Get references to the events, schedule, and about sections
  const eventsSection = document.getElementById("events");
  const scheduleSection = document.getElementById("schedule");
  const aboutSection = document.getElementById("about");

  // Function to check if the scroll position is within a specific section
  function isScrollInSection(section) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.clientHeight;
    return (
      scrollPosition >= sectionOffset &&
      scrollPosition < sectionOffset + sectionHeight
    );
  }

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    if (isScrollInSection(eventsSection)) {
      // If it is, add the .menu-hidden class to hide the menu
      menu.classList.add("menu-hidden");
    } else if (
      isScrollInSection(scheduleSection) ||
      isScrollInSection(aboutSection)
    ) {
      // If it is within the schedule or about section, remove the .menu-hidden class to show the menu
      menu.classList.remove("menu-hidden");
    }
  });
});

// --------------------- For scramble effect
document.addEventListener("DOMContentLoaded", function () {
  // Set effect velocity in ms
  // high means slow
  var velocity = 100;

  var shuffleElements = document.querySelectorAll(".shuffle");

  shuffleElements.forEach(function (element) {
    element.dataset.text = element.textContent;
  });

  var shuffle = function (o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  var shuffleText = function (element, originalText) {
    var elementTextArray = [];
    var randomText = [];

    for (var i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt(i));
    }

    var repeatShuffle = function (times, index) {
      if (index == times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(function () {
        randomText = shuffle(elementTextArray);
        for (var i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  shuffleElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      shuffleText(this, this.dataset.text);
    });
  });
});

// ----------- Hero Timer
const countdownElement = document.getElementById("countdown");
const daysElement = countdownElement.querySelector("#days");
const hoursElement = countdownElement.querySelector("#hours");
const minutesElement = countdownElement.querySelector("#minutes");
const secondsElement = countdownElement.querySelector("#seconds");

// EVENT DATE -> 27/2/24
const endDate = new Date("2024-9-20 00:00:00");
let secondsLeft = (endDate.getTime() - new Date().getTime()) / 1000;

function updateCountdown() {
  secondsLeft -= 1;

  const days = Math.floor((secondsLeft / 86400) % 30);
  daysElement.textContent = days < 10 ? "0" + days : days;

  const hours = Math.floor((secondsLeft % 86400) / 3600);
  hoursElement.textContent = hours < 10 ? "0" + hours : hours;

  const minutes = Math.floor((secondsLeft % 3600) / 60);
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;

  const seconds = Math.floor(secondsLeft % 60);
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (secondsLeft <= 0) {
    const countdownContent = document.querySelector(".countdown-content");
    const countdownContentFinal = document.querySelector(
      ".countdown-content-final",
    );
    countdownContent.classList.add("d-none");
    countdownContentFinal.classList.add("d-flex");
  }
}

setInterval(updateCountdown, 1000);

// --------- To add bg when above some scroll position
const scrollHeader = () => {
  const header = document.getElementById("top-nav");
  // when window is scrolled vertically i.e greater than 50,
  // add the scroll class to the header tag
  // console.log(this); this refers window object which is calling the function as a cb
  this.scrollY >= 100
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// ----------- To automatically close the navbar
const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const checkbox = document.getElementById("main-navigation-toggle");
    checkbox.checked = false;
  });
});

// ********************* Effects ******************
// ----------- Horizontal Scroll

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sliders",
    // pin: ".body",
    pin: true,
    pinSpacing: true,
    scrub: 1,
    end: "+=1500",
  },
});

// ------------------------- For particles enable
const config = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fcee0a",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fffccc",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 6,
        duration: 2,
        opacity: 5,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.3,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

// For about section
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", config);
});

// For team section
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-two-js", config);
});

// ------------------- AOS
const aosConfig = {
  duration: 1000,
};

AOS.init(aosConfig);

// --------------------- About Card hover effect

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

//------------------------ Slider effects
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 1500, // Set the delay between slides in milliseconds (e.g., 3000ms or 3 seconds)
    disableOnInteraction: false, // Set this to true if you want autoplay to stop when the user interacts with the slider (e.g., clicks or swipes)
  },
  loop: true, // Add this line to enable the loop feature
  // Disable autoplay initially
  autoplayDisableOnInteraction: true,
});

// to only start to slide after user is in team section
// Function to start the Swiper autoplay when the team section is in the viewport
function startSwiperAutoplay(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });
}

// Create an Intersection Observer to watch the team section
const teamSection = document.querySelector(".team-section");
const observer = new IntersectionObserver(startSwiperAutoplay, {
  root: null, // Use the viewport as the root
  threshold: 0.5, // When 50% of the section is visible
});

// Observe the team section
observer.observe(teamSection);
