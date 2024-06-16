const carouselData = [
    {
        id: 1,
        name: 'Zaire Vaccaro',
        image: './assets/images/user/user1.jpeg',
        
        subtitle: '"Khóa học thú vị và phong phú về nội dung. Giáo viên thân thiện, luôn sẵn lòng giúp đỡ và tạo điều kiện cho sự tiến bộ của mỗi học viên."',
    },
    {
        id: 2,
        name: 'Cheyenne Geidt',
        image: './assets/images/user/user1.jpeg',
        
        subtitle: '"Tôi rất ấn tượng với cách mà khóa học kết hợp giữa lý thuyết và thực hành. Điều này giúp tăng cường khả năng giao tiếp của tôi một cách đáng kể."',
    },
    {
        id: 3,
        name: 'Lydia Levin',
        image: './assets/images/user/user3.jpeg',
        
        subtitle: '"Khóa học thú vị và phản ánh chân thực cuộc sống hàng ngày. Tôi đã học được nhiều từ vựng và cụm từ mới thông qua các tình huống thực tế."',
    },
    {
        id: 4,
        name: 'Jordyn Philip',
        image: './assets/images/user/user4.jpeg',
        
        subtitle: '"Tôi đã trải qua nhiều khóa học Tiếng Anh trước đây nhưng chỉ ở đây tôi cảm thấy thực sự tự tin khi giao tiếp. Cảm ơn đội ngũ giảng viên tận tâm!"',
    },
    {
        id: 5,
        name: '',
        image: './assets/images/user/user1.jpeg',
        
        subtitle: '"Tôi đã trải qua nhiều khóa học Tiếng Anh trước đây nhưng chỉ ở đây tôi cảm thấy thực sự tự tin khi giao tiếp. Cảm ơn đội ngũ giảng viên tận tâm!"',
      },
      {
        id: 6,
        name: '',
        image: './assets/images/user/user2.jpeg',
        
        subtitle: '"Tôi đã trải qua nhiều khóa học Tiếng Anh trước đây nhưng chỉ ở đây tôi cảm thấy thực sự tự tin khi giao tiếp. Cảm ơn đội ngũ giảng viên tận tâm!"',
    },
  ]
  
  const renderCarousel = document.querySelector('.slick__carousel');
  const rendercarousel = carouselData.map((data) => {
    return `
       <div key=${data.id} class="slick__component">
          <div class="subtitleBox">
            ${data.subtitle}
          </div>
          <div class="slick__component--user">
            <div class="imgDiv">
              <img src=${data.image} alt="">
            </div>
  
            <div class="user__content">
              <p class="user__content--name">
                ${data.name}
              </p>
  
              <p class="user__content--birthday">
                26 April 2024
              </p>
  
              <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
    `
  })
  renderCarousel.innerHTML = rendercarousel.join('');



 