const newsData = [
    {
        id: 1,
        image: './assets/images/news__box1.jpeg',
    },
    {
        id: 2,
        image: './assets/images/news__box2.jpeg',
    },
    {
        id: 3,
        image: './assets/images/news__box3.jpeg',
    },
    {
        id: 4,
        image: './assets/images/news__box1.jpeg',
    },
    {
        id: 5,
        image: './assets/images/news__box2.jpeg',
      },
      {
        id: 6,
        image: './assets/images/news__box3.jpeg',
    },
  ]



  
  const renderNews = document.querySelector('.news__slick--carousel');
  const rendernews = newsData.map((data) => {
    return `
       <a href='/newsdetail.html' key=${data.id} class="news__slick--component">
                    <img src=${data.image} alt="bg">


                    <div class="buttonDiv">
                      <button type="button" class="primaryButton">Sự kiện</button>
                      
                      <button type="button" class="primaryButton">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
  
                    <div class="content__box--text">
                      <div class="content__wrapper">
                        <div class="titleBox">
                          Tự tin và thành thạo với Khóa Học Tiếng Anh Đa Dạng!
                        </div>
      
                        <div class="date flex">
                          <i class="fa-regular fa-calendar"></i>
                          <p>27-6-2024</p>
                        </div>
      
                        <div class="subtitleBox">
                          Tự tin giao tiếp Tiếng Anh với Khóa Học Đa Dạng! Tại đây, chúng tôi không chỉ tập trung vào việc rèn luyện.....
                        </div>
                      </div>
                    </div>
                  </a>
    `
  })
  renderNews.innerHTML = rendernews.join('');



  