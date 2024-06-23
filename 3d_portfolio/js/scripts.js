const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');

        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex=20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex=20 + index;
            }, 500);
            
        }

    }
});

// contact me button when click

const pages =document.querySelectorAll('.book-page.page-right');
const contactBtn = document.querySelector('.btn.contact-me');

contactBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index +1)*200 +100);
    });
}


// create reverse index function
let totalPage = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pages[pageNumber].classList.remove('turn');
    pageNumber = (pageNumber + 1) % totalPage;
}

// back profile button when click

const backprofileBtn = document.querySelector('.btn.back-profile');
backprofileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index +1)*200 +100);
    });
}


// open animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);
// open animation (page open left or profile animation)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// open animation (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index +1)*200 + 2100);
});
