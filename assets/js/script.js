
function menuSandwich() {
    var x = document.getElementById("options");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


/* Mobile Slider */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "inline-flex";
    dots[slideIndex - 1].className += " active";
}


/* JSON */
var products = document.getElementById("product-info");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/aldiransantos/teste-profite/master/products.json');
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(JSON.parse(ourRequest.responseText));
};
ourRequest.send();

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<img src=" + data[i].img + " alt=" + data[i].name + ">";
        htmlString += "<p>" + data[i].name + "</p>";
        htmlString += "<img class='stars' src=" + data[i].rating + ">";
        htmlString += "<div class='oldPrice'> de R$ " + data[i].oldPrice + "</div>";
        htmlString += "<div class='price'> por " + data[i].price + "</div>";
        htmlString += "<div class='time'> ou em " + data[i].time + "</div>";
        htmlString += "<button><span class='icon'><svg width='40' height='40' viewBox='0 0 30 20' fill='none' xmlns ='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M10.4748 8.27786H12.3905V5.42072H15.264V3.51596H12.3905V0.658813H10.4748V3.51596H7.6012V5.42072H10.4748V8.27786ZM6.64374 16.8492C5.5901 16.8492 4.73761 17.7064 4.73761 18.754C4.73761 19.8016 5.5901 20.6588 6.64374 20.6588C7.69738 20.6588 8.55945 19.8016 8.55945 18.754C8.55945 17.7064 7.69738 16.8492 6.64374 16.8492ZM16.2221 16.8492C15.1685 16.8492 14.316 17.7064 14.316 18.754C14.316 19.8016 15.1685 20.6588 16.2221 20.6588C17.2757 20.6588 18.1378 19.8016 18.1378 18.754C18.1378 17.7064 17.2757 16.8492 16.2221 16.8492ZM6.80632 13.754L6.83506 13.6397L7.69713 12.0874H14.8331C15.5515 12.0874 16.1837 11.6969 16.5094 11.1064L20.2067 4.43022L18.54 3.51594H18.5305L17.4768 5.4207L14.8331 10.1826H8.109L7.98448 9.92546L5.83889 5.4207L4.92893 3.51594L4.02855 1.61118H0.896362V3.51594H2.81207L6.26035 10.7445L4.96724 13.0778C4.81399 13.3445 4.72778 13.6588 4.72778 13.9921C4.72778 15.0397 5.58985 15.8969 6.64349 15.8969H18.1377V13.9921H7.04579C6.92127 13.9921 6.80632 13.8874 6.80632 13.754Z' fill='white' /></svg></span>Comprar</button>";
    }

    products.insertAdjacentHTML('beforeend', htmlString);
}