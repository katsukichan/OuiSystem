$(() => {
    //用户名输入框
    var $inputUser = $("#inputUser");
    //密码输入框
    var $inputPassword = $("#inputPassword");
    //登录按键
    var $loginBtn = $("a");

    //登录判断函数
    var judge = async () => {
        if ($inputUser.val().trim() == '') {
            alert('请输入用户名');
            $inputUser.val('');
            return false;
        }
        if ($inputPassword.val().trim() == '') {
            alert('请输入密码');
            $inputPassword.val('');
            return false;
        }
        var user = $inputUser.val();
        //发送请求
        let adminData = await new Promise((resolve, reject) => {
            $.ajax({
                type: 'post',
                url: 'http://localhost:8080/OuiSystem/login.do',
                data: {
                    user
                },
                success(data) {
                    resolve(data);
                }
            })
        })
        //用户名对应数据查询结果判断
        if (adminData.length > 0) {
            if (adminData[0].password == $inputPassword.val()) {
                location.href = "page/show.jsp";
            } else {
                alert('用户名或密码错误');
                return false;
            }
        } else {
            alert('用户名或密码错误');
            return false;
        }
    }

    //登录按键点击监听
    $loginBtn[0].addEventListener('click', judge);

    //按下回车，触发judge函数
    $(document).keydown( (event) => {
        if (event.keyCode == "13") {
            judge();
        }
    });

})