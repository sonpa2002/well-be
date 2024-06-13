$(document).ready(function () {
    
});
// add active button
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section__btndiv .Button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// render

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

$(document).ready(function(){
  $('.slick__carousel').on('init', function(event, slick){
      // Add custom content to each dot
      $('.slick-dots li').each(function(index){
          $(this).find('button').html('<span class="custom-dot"></span>');
      });
  });

  $('.slick__carousel').slick({
      slidesToShow: 4,
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
  });
});



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