    // <div class="switch-toggler">
    //     <label class="switch-mobile" for="theme-toggle">
    //         <input type="checkbox" id="theme-toggle">
    //         <span class="slider-mobile round"></span>
    //     </label>
// </div>

const sliderEl = document.querySelector('[type="checkbox"]');

sliderEl.addEventListener('change', handlerChangeThemes);

function handlerChangeThemes() {
  try {
    if (localStorage.getItem('theme') === 'black') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'black');
    }

    addDarkTheme();
  } catch (err) {
    console.error(err);
  }
}

function addDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'black') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  } catch (err) {
    console.error(err);
  }
}

if (localStorage.getItem('theme') === 'black') {
  addDarkTheme();
  sliderEl.checked = true;
}



// const sliderTheme = document.querySelector('.switch-toggler');
// sliderTheme.addEventListener('change', handlerChangeTheme);

// function handlerChangeTheme() {
//   if (localStorage.getItem('theme') === null) {
//     localStorage.setItem(
//       'theme',
//       document.documentElement.getAttribute('class')
//     );
//   }else if (localStorage.getItem('theme') === 'light') {
//     document.documentElement.classList.remove('light');
//     document.documentElement.classList.add('dark');
//     localStorage.setItem(
//       'theme',
//       document.documentElement.getAttribute('class')
//     );
//     return;
//   }
//   document.documentElement.classList.remove('dark');
//   document.documentElement.classList.add('light');
//   localStorage.setItem('theme', document.documentElement.getAttribute('class'));
// }