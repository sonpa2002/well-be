(function() {
    const newsData = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, 
        { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, 
        { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },

        { id: 15 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 5 }, 
        { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, 
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 15 },

        { id: 1 }, { id: 3 }, { id: 13 }, { id: 14 }, { id: 15 }, 
        { id: 4 }, { id: 5 }, { id: 8 }, { id: 9 }, { id: 10 }, 
        { id: 2 }, { id: 9 }, { id: 1 }, { id: 12 }, { id: 1 },
    ];

    const newsContainer = document.querySelector('.news__container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const pageNumbersContainer = document.querySelector('.page-numbers');
    const newsPerPage = 15;
    let currentPage = 1;
    const totalPages = Math.ceil(newsData.length / newsPerPage);

    function renderNews(page) {
        const start = (page - 1) * newsPerPage;
        const end = start + newsPerPage;
        const newsToRender = newsData.slice(start, end).map(data => {
            return `
                <a href='/newsdetail.html' key=${data.id} class="news__component">
                    <img src='../assets/images/blog/blogbox/blog__box${data.id}.jpeg' alt="bg">
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
                </a>
            `;
        });
        newsContainer.innerHTML = newsToRender.join('');
    }

    function updatePaginationButtons() {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        
        pageNumbersContainer.innerHTML = '';
        
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('page-number');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                renderBlogs(currentPage);
                updatePaginationButtons();
            });
            pageNumbersContainer.appendChild(button);
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderBlogs(currentPage);
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderNews(currentPage);
            updatePaginationButtons();
        }
    });

    // Initial setup
    renderNews(currentPage);
    updatePaginationButtons();
})();