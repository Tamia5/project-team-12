    // <div class="switch-toggler">
    //     <label class="switch-mobile" for="theme-toggle">
    //         <input type="checkbox" id="theme-toggle">
    //         <span class="slider-mobile round"></span>
    //     </label>
// </div>

  const sliderEls = document.querySelectorAll('[type="checkbox"]');

  sliderEls.forEach((sliderEl) => {
    sliderEl.addEventListener('change', handlerChangeThemes);
  });

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
    sliderEls.forEach((sliderEl) => {
      sliderEl.checked = true;
    });
  }