

var data = 1;

//printing default value of data that is 0 in h2 tag
document.getElementById("counter-label").innerText = data;

//creation of increment function
function increment() {
    data += 1;
    document.getElementById("counter-label").innerText = data;
}
//creation of decrement function
function decrement() {
    if (data > 1) data -= 1;
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

function showCart() {
    let x = document.getElementById('cart');
    if (x.style.display === 'block')
        x.style.display = 'none';
    else
        x.style.display = 'block'
}

function borderImage1() {
    let x = document.getElementById('image4');
    let w = document.getElementById('image3');
    let z = document.getElementById('image2');
    let y = document.getElementById('image1');

    let xBIg = document.getElementById('image4-big');
    let wBIg = document.getElementById('image3-big');
    let zBIg = document.getElementById('image2-big');
    let yBIg = document.getElementById('image1-big');

    y.style.border = '2px solid var(--primary-color)';
    y.style.filter = 'grayscale(50%)';
    y.style.filter = 'blur(0.5px)';
    yBIg.style.display = 'inline-block';

    x.style.border = 'none';
    z.style.border = 'none';
    w.style.border = 'none';
    xBIg.style.display = 'none';
    zBIg.style.display = 'none';
    wBIg.style.display = 'none';
}
function borderImage2() {
    let x = document.getElementById('image4');
    let w = document.getElementById('image3');
    let z = document.getElementById('image2');
    let y = document.getElementById('image1');

    let xBIg = document.getElementById('image4-big');
    let wBIg = document.getElementById('image3-big');
    let zBIg = document.getElementById('image2-big');
    let yBIg = document.getElementById('image1-big');

    z.style.border = '2px solid var(--primary-color)';
    z.style.filter = 'grayscale(50%)';
    z.style.filter = 'blur(0.5px)';
    zBIg.style.display = 'inline-block';

    y.style.border = 'none';
    w.style.border = 'none';
    x.style.border = 'none';
    yBIg.style.display = 'none';
    wBIg.style.display = 'none';
    xBIg.style.display = 'none';
}
function borderImage3() {
    let x = document.getElementById('image4');
    let w = document.getElementById('image3');
    let z = document.getElementById('image2');
    let y = document.getElementById('image1');

    let xBIg = document.getElementById('image4-big');
    let wBIg = document.getElementById('image3-big');
    let zBIg = document.getElementById('image2-big');
    let yBIg = document.getElementById('image1-big');

    w.style.border = '2px solid var(--primary-color)';
    w.style.filter = 'grayscale(50%)';
    w.style.filter = 'blur(0.5px)';
    wBIg.style.display = 'inline-block';

    y.style.border = 'none';
    z.style.border = 'none';
    x.style.border = 'none';
    yBIg.style.display = 'none';
    zBIg.style.display = 'none';
    xBIg.style.display = 'none';
}
function borderImage4() {
    let x = document.getElementById('image4');
    let w = document.getElementById('image3');
    let z = document.getElementById('image2');
    let y = document.getElementById('image1');

    let xBIg = document.getElementById('image4-big');
    let wBIg = document.getElementById('image3-big');
    let zBIg = document.getElementById('image2-big');
    let yBIg = document.getElementById('image1-big');

    x.style.border = '2px solid var(--primary-color)';
    x.style.filter = 'grayscale(50%)';
    x.style.filter = 'blur(0.5px)';
    xBIg.style.display = 'inline-block';

    y.style.border = 'none';
    z.style.border = 'none';
    w.style.border = 'none';
    yBIg.style.display = 'none';
    zBIg.style.display = 'none';
    wBIg.style.display = 'none';
}