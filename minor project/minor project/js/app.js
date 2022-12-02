//filter image 
$(document).ready(function() {
    $('.filter-btn').click(function() {
        var buttonvalue = $(this).attr('data-filter');

        if (buttonvalue == 'all') {
            $('.image-filter').show('1000');
        } else {
            $('.image-filter').not('.' + buttonvalue).hide('200');
            $('.image-filter').filter('.' + buttonvalue).show('200');
        }

    });
});
$(document).ready(function() {
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

//overlay effect
setTimeout(() => {
    var overlay = document.querySelector(".overlay");
    overlay.style.width = "50%";
}, 1000);
setTimeout(() => {
    var content = document.querySelector(".content");
    content.style.display = "block";
}, 3000);


//auto text changer
$(function() {
    $(".typed").typed({
        strings: ["Labour Directory", "Here we provide Helper"],

        stringsElement: null,

        typeSpeed: 35,

        startDelay: 1500,

        backSpeed: 35,

        backDelay: 500,

        loop: true,

        loopCount: Infinity,


        cursorChar: "|",

        attr: null,

        contentType: 'html',

        callback: function() {},

        preStringTyped: function() {},

        onStringTyped: function() {},

        resetCallback: function() {}
    });
});
// menu
$(document).ready(function() {

    //hamburger Toggle
    $('.humbarger').click(function(event) {
        $('.menu-list').slideToggle(500);
        event.preventDefault();

        $('.menu-list li a').click(function(event) {
            if ($(window).width() < 768) {
                $('.menu-list').slideUp(500);
                event.preventDefault();
            }
        });
    });

});


//smooth scroll
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 300, 'swing', function() {
            window.location.hash = target;
        });
    });
});



// form details 


const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', function() {
    var infoContent = document.querySelector(".info-content");
    infoContent.style.display = "none";
    var infoContact = document.querySelector(".info-contact");
    infoContact.style.display = "none";
    var infoFooter = document.querySelector(".info-footer");
    infoFooter.style.display = "none";
    var detail = document.querySelector(".details");
    detail.style.display = "block";
});

const hireBtn = document.getElementById('hire-now');
hireBtn.addEventListener('click', function() {
    var detail = document.querySelector(".details");
    detail.style.display = "none";
    var firstName = document.getElementById('fisrtname').value;
    var lastName = document.getElementById('lastname').value;
    document.getElementById('fulName').innerHTML = firstName + " " +
        lastName;
    var address = document.getElementById('address').value;
    document.getElementById('Address').innerHTML = address;
    var city = document.getElementById('city').value;
    document.getElementById('City').innerHTML = city;
    var code = document.getElementById('code').value;
    document.getElementById('Code').innerHTML = code;
    var phone = document.getElementById('phone').value;
    document.getElementById('number').innerHTML = phone;
    var email = document.getElementById('email').value;
    document.getElementById('mail').innerHTML = email;
    var checkDetail = document.querySelector(".checkout-detail");
    checkDetail.style.display = "block";
    var infoFooter = document.querySelector(".info-footer");
    infoFooter.style.display = "block";
});