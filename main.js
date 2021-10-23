function showOnClick() {
    var x = document.getElementById("cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function increment() {
    var x = document.getElementById('plus-icon').innerHTML;
    x++;
    document.getElementById('counter-placeholder').innerHTML = x;
}

function decrement() {
    var x = document.getElementById('minus-icon').innerHTML;
    x++;
    document.getElementById('counter-placeholder').innerHTML = x;
}