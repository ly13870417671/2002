
let ord = 0
let myTimer = null
let $img = $("#img-box>img")
let $li = $("#banner>ul>li")
let hrefs = ["https://www.baidu.com",
    "http://www.1000phone.com",
    "./banner.html"]
function autoPlay() {
    myTimer = setInterval(function () {
        goImg(ord + 1)
    }, 2000)
}

function goImg(transOrd) {
    if (transOrd == ord) {
        return
    }


    let outOrd = ord
    ord = transOrd

    //边界处理
    if (ord > $img.length - 1) {
        ord = 0;
    } else if (ord < 0) {
        ord = $img.length - 1;
    }

    //让一张图片淡出，一张图片淡入
    /* $img.eq(outOrd).animate({
        "opacity": 0
    }, 1000)

    $img.eq(ord).animate({
        "opacity": 1
    }, 1000) */

    $img.eq(outOrd).animate({ "opacity": 0 }, 1000);
    $img.eq(ord).animate({ "opacity": 1 }, 1000);


    //让豆豆变颜色
    $li.eq(outOrd).css({
        "background-color": "#fff",
        "color": "#000"
    }
    )
    $li.eq(ord).css({
        "background-color": "#333333",
        "color": "#ffffff"
    })
}
/*  function stopPlay() {
        window.clearInterval(myTimer)
     myTimer = null
 } */
function stopPlay() {
    window.clearInterval(myTimer);
    myTimer = null;
}

$(function () {
    //自动播放
    autoPlay()

    //点击豆豆跳转到相应的图片
    $("#banner>ul>li").mouseover(function () {
        stopPlay()
        goImg($(this).index())
    })

    //鼠标放入停止
    $("#img-box").mouseover(function () {
        stopPlay()
    })

    //鼠标离开继续播放
    $("#img-box").mouseout(function () {
        autoPlay()
    })


    $("#img-box").click(function () {
        window.open(hrefs[ord])
    });

})


//倒计时
function countDown() {
    var date = new Date()
    var now = date.getTime()
    var str = '2020-6-1 00:00:00'
    var endDate = new Date(str)
    var end = endDate.getTime()
    var timer = end - now
    if (timer >= 0) {
        // var d = parseInt(timer / 1000 / 60 / 60 / 24)
        var h = parseInt(timer / 1000 / 60 / 60 % 24)
        var m = parseInt(timer / 1000 / 60 % 60)
        var s = parseInt(timer / 1000 % 60)
    }
    // document.getElementById('day').innerHTML = buling(d)
    document.getElementById('hour').innerHTML = buling(h)
    document.getElementById('minute').innerHTML = buling(m)
    document.getElementById('second').innerHTML = buling(s)
    setTimeout(countDown, 1000)
}

function buling(num) {
    return num < 10 ? '0' + num : num
}
window.onload = function () {
    countDown()
}


//全部类目

$("#all_class").mouseenter(function () {
    $("#all_class").siblings(".open").css({
        "opacity": "1"
    })
})
$(".open").mouseleave(function () {
    $(".open").css({
        "opacity": "0"
    })
})

$(".tit1").click(function () {
    window.open("list.html", "_blank")
})

//送货地址
$("#address").click(function (event) {
    $(".hd_city").show()
    event.stopPropagation()
})

$(".city_close").click(function () {
    $(".hd_city").hide()
})

$(document).click(function () {
    $(".hd_city").hide()
})

// $("#backTop").click(function () {
//     $("#appfixed").slideUp("slow");
// })

$('#backTop').click(function () {
    $('html,body,#appfixed').animate({ scrollTop: 500 }, 300);
    return false;
});

// if (scrollTop < 1000) {
//     $("##appfixed").hide()
// }

$("#search_txt").click(function () {
    $(".search_history").show()
})

$(".search_history").mouseleave(function () {
    $(".search_history").hide()
})

$(".shoppingCar").click(function () {
    location.href = "shoppingcar.html"
})