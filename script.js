let showMenu = (menu) => {
  let menuOptions = document.getElementsByClassName("menu-option");

  for (let i = 0; i < 3; i++) {
    menuOptions[i].style.display = "none";
  }
  if (menu === false) return;
  menuOptions[menu].style.display = "block";
};

let activeRange = 0;

let handleHeaderVideos = () => {
  let headerVideos = document.getElementsByClassName("header-video");
  let ranges = document.getElementsByClassName("range");

  for (let i = 0; i < 3; i++) {
    headerVideos[i].style.display = "none";
    ranges[i].style.display = "none";
  }

  headerVideos[activeRange].style.display = "block";
  ranges[activeRange].style.display = "block";

  activeRange === 2 ? (activeRange = 0) : activeRange++;
};

handleHeaderVideos()

setInterval(() => {
  handleHeaderVideos();
}, 13500);


$(document).ready(function(){
  $('.customer-logos-1').slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    infinite: true,
    rows: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

$(document).ready(function(){
  $('.customer-logos-2').slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    rows: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
