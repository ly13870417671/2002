$("#btn").click(function () {
    //一、前端验证
    if ($("#username").val() == "") {
        alert("请输入账号和密码");
        return;
    }
    if ($("#pass").val() == "") {
        alert("请输入账号和密码");
        return;
    }

    // 二、后端处理
    $.post("loginCheck.php", {
        "username": $("#username").val(),
        "userPass": $("#pass").val()
    }, show);
});

function show(data) {
    if (data = "success") {
        alert("登录成功")
        // $("#msg").css({ "color": "green" }).html("登录成功，<a href='index.html'>首页</a>")
    } else if (data = "fail") {
        alert("登录失败，用户名或者密码不正确")
        // $("#msg").css({ "color": "red" }).html("登录失败，用户名或者密码不正确");
    }
}
