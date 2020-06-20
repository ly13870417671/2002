var localBox = document.querySelector('.hidden_box')
var headerL = document.querySelector(".header_l")
var myJd = document.querySelector('.myjd')
var co = document.querySelector('.co')
var services = document.querySelector('.service_box')
var navWrap = document.querySelector('.nav-wrap')
var lis = document.querySelectorAll('.banner_l li')
var show = document.querySelector('.nav_show')
// local.onmousemove = function () {
//     localBox.style.display = "block"
//     // localBox.style.opacity = 1
// }

// headerL.onmouseleave = function () {
//     localBox.style.display = "none"
//     // localBox.style.opacity = 0
// }

myjd.onmousemove = function () {
    myJd.style.display = "block"
    // myJd.style.opacity = 1
}

myjd.onmouseleave = function () {
    myJd.style.display = "none"
    // myJd.style.opacity = 0
}

company.onmousemove = function () {
    // myJd.style.display = "block"
    // co.style.opacity = 1
    co.style.display = "block"
}

company.onmouseleave = function () {
    co.style.display = "none"
    // co.style.opacity = 0
}

service.onmousemove = function () {
    services.style.display = "block"
    // services.style.opacity = 1
}

service.onmouseleave = function () {
    services.style.display = "none"
    // services.style.opacity = 0
}

nav.onmousemove = function () {
    navWrap.style.display = "block"
    // navWrap.style.opacity = 1
}

nav.onmouseleave = function () {
    navWrap.style.display = "none"
    // navWrap.style.opacity = 0
}


var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletActiveClass: 'my-bullet-active',


    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// for (var i = 0; i < lis.length; i++) {
// lis[0].onmousemove = function () {
//     show.style.display = "block"
// }

// show.onmouseleave = function () {
//     show.style.display = "none"
// }
// }

$('.banner_l li').mousemove(function () {
    $('.nav_show').show()
})

$('.nav_show').mouseleave(function (event) {
    var e = event || window.event
    $('.nav_show').hide()
    e.stopPropagation()
})


$('#local').mousemove(function () {
    $(".hidden_box").show()

})
$('.header_l').mouseleave(function () {
    $(".hidden_box").hide()
})
$('.hidden_box').click(function () {
    let l = $(this).children('.local_box').children('li').text()
    console.log(l);


})
