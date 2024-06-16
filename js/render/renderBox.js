const boxData = [
    {
        id: 1,
        image: './assets/images/image__box1.jpeg',
        title: 'Tự tin và thành thạo với Khóa học Tiếng Anh đa dạng',
        subtitle: 'Tự tin giao tiếp Tiếng Anh với Khóa Học Đa Dạng! Tại đây, chúng tôi không chỉ tập trung vào việc rèn luyện.....',
    },
    {
        id: 2,
        image: './assets/images/image__box2.jpeg',
        title: 'Tự tin và thành thạo với Khóa học Tiếng Anh đa dạng',
        subtitle: 'Tự tin giao tiếp Tiếng Anh với Khóa Học Đa Dạng! Tại đây, chúng tôi không chỉ tập trung vào việc rèn luyện.....',
    },
    {
        id: 3,
        image: './assets/images/image__box3.jpeg',
        title: 'Tự tin và thành thạo với Khóa học Tiếng Anh đa dạng',
        subtitle: 'Tự tin giao tiếp Tiếng Anh với Khóa Học Đa Dạng! Tại đây, chúng tôi không chỉ tập trung vào việc rèn luyện.....',
    },
    {
        id: 4,
        image: './assets/images/image__box4.jpeg',
        title: 'Tự tin và thành thạo với Khóa học Tiếng Anh đa dạng',
        subtitle: 'Tự tin giao tiếp Tiếng Anh với Khóa Học Đa Dạng! Tại đây, chúng tôi không chỉ tập trung vào việc rèn luyện.....',
    },
]

const renderBox = document.querySelector('.section__content');

const renderbox = boxData.map((data) => {
    return `
       <a href="/#" key=${data.id} class="content__box">
                <img src=${data.image} alt="image__box1">

                <div class="content__box--btnDiv">
                  <button type="button" class="primaryButton">Sự kiện</button>
                    
                  <button type="button" class="primaryButton"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>

                <div class="content__box--text">
                  <div class="content__wrapper">
                    <div class="titleBox">${data.title}</div>
  
                    <div class="date flex">
                      <i class="fa-regular fa-calendar"></i>
                      <p>27-6-2024</p>
                    </div>
  
                    <div class="subtitleBox">
                      ${data.subtitle}
                    </div>
                  </div>
                </div>
              </a>
    `
})
renderBox.innerHTML = renderbox.join('');
