const giftData = [
    {
        id: 1,
        image: './assets/images/image__box1.jpeg',
    },
    {
        id: 2,
        image: './assets/images/image__box2.jpeg',
    },
    {
        id: 3,
        image: './assets/images/image__box3.jpeg',
    },
    {
        id: 4,
        image: './assets/images/image__box4.jpeg',
    },
    {
        id: 5,
        image: './assets/images/image__box4.jpeg',
    },
    ]
    
    const renderGift = document.querySelector('.textContent--container');
    const rendergift = giftData.map((data) => {
      return `
         <div class="box">
                             <div class="box__imgDiv">
                              <img src="./assets/images/image__box1.jpeg" alt="">
                             </div> 
    
                             <div class="box__text">
                                <div class="primaryButton">
                                  Tài liệu
                                </div>
                                <p>Tư vấn 6 chỉ số huyết áp và sức khỏe</p>
                             </div>
                          </div>
      `
    })
    renderGift.innerHTML = rendergift.join('');