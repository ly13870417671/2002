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