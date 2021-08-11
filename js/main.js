const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navbar = document.querySelector('.title-links');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  //   console.log(scrollHeight);
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     // prevent default
//     // e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute('href').slice(1);
//     // console.log(id);
//     const element = document.getElementById(id);
//     // calculate the heights;
//     const navHeight = navbar.getBoundingClientRect().height;
//     console.log(navHeight);
//     // links height container selection
//     let position = element.offsetTop - navHeight;
//     console.log(position);
//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // fix links drop down in the mobile view
//   });
// });
