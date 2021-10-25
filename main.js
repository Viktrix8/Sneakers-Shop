function showOnClick() {
    var x = document.getElementById("cart");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//initialising a variable name data

var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counter-label").innerText = data;

//creation of increment function
function increment() {
    data += 1;
    document.getElementById("counter-label").innerText = data;
}
//creation of decrement function
function decrement() {
    if (data > 0) data -= 1;
    document.getElementById("counter-label").innerText = data;
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Nav

function showNav() {
    let x = document.getElementById('header-nav');
    x.style.display = 'block';

}

function hideNav() {
    let x = document.getElementById('header-nav');
    x.style.display = 'none';
}