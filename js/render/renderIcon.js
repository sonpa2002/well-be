const iconsData = [
    {
        id: 1,
        color: 'rgba(24, 119, 242, 1)',
        image: './assets/icons/facebook.svg',
        href: 'https://www.facebook.com/',
    },
    {
        id: 2,
        color: 'rgba(29, 161, 242, 1)',
        image: './assets/icons/twitter.svg',
        href: 'https://x.com',
    },
    {
        id: 3,
        color: 'rgba(255, 255, 255, 1)',
        image: './assets/icons/google.svg',
        href: 'https://google.com'
    },
    {
        id: 4,
        color: 'rgba(240, 0, 115, 1)',
        image: './assets/icons/instagram.svg',
        href: 'https://instagram.com'
    },
    {
        id: 5,
        color: 'rgba(255, 0, 0, 1)',
        image: './assets/icons/youtube.svg',
        href: 'https://youtube.com'
    },

  ]



  
  const renderIcons = document.querySelector('.icon__container');
  const rendericons = iconsData.map((data) => {
    return `
      <a href='${data.href}' key=${data.id} style="background-color: ${data.color};" class="icon__bg">
            <img src=${data.image} alt="">
        </a>
    `
  })
  renderIcons.innerHTML = rendericons.join('');



  