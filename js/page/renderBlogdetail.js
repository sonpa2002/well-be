const blogDetailData = [
    {
        id: 1,
        image: './assets/images/news__box1.jpeg',
    },
    {
        id: 2,
        image: './assets/images/image__box10.jpeg',
    },
    {
        id: 3,
        image: './assets/images/image__box9.jpeg',
    },
    {
        id: 4,
        image: './assets/images/news__box1.jpeg',
    },
  ]



  
  const renderBlogDetail = document.querySelector('.rightContainer');
  const renderblogDetail = blogDetailData.map((data) => {
    return `
       <div key=${data.id} class="rightContainer__component">
                    <img src=${data.image} alt="bg">


                    <div class="buttonDiv">
                      <button type="button" class="primaryButton">Bài viết</button>
                      
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
                  </div>
    `
  })
  renderBlogDetail.innerHTML = renderblogDetail.join('');



  