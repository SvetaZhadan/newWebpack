let header = document.querySelector('.m-header'),
  headerMobile = document.querySelector('.m-headerMenu'),
  logo = document.querySelector('.m-header__logo'),
  burger = document.querySelector('.b-burger'),
  menuItem = headerMobile.querySelectorAll('.b-textLink');

for (let index = 0; index < menuItem.length; index++) {
  menuItem[index].onclick = function () {
    burger.classList.remove('--close');
    document.body.classList.remove('--no-scroll');
    headerMobile.classList.remove('--active');
    header.classList.remove('--h-100per');

    let scrolled = window.pageYOffset;
    if (scrolled < 10) {
      header.classList.remove('--bg-white');
      header.classList.remove('--h-100per');
      logo.classList.add('--white');
    }
  };
}

function toggleMenu(obj) {
  document.body.classList[obj]('--no-scroll');
  burger.classList[obj]('--close');
  headerMobile.classList[obj]('--active');
  header.classList[obj]('--h-100per');
}

burger.onclick = function () {
  let scrolled = window.pageYOffset;

  //onclose
  if (burger.classList.contains('--close')) {
    toggleMenu('remove');
    if (scrolled <= 10) {
      header.classList.remove('--bg-white');
      logo.classList.add('--white');
    }
  }
  //onopen
  else {
    toggleMenu('add');
    logo.classList.remove('--white');
    header.classList.add('--bg-white');

    if (scrolled >= 10) {
      header.classList.add('--bg-white');
      logo.classList.remove('--white');
    }

    headerMobile.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
