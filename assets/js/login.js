$(function () {
    // 点击去注册账号的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })


    // 点击去登录的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })


    // 从layui中获取form对象
    var form = layui.form

    // 通过form.verify()函数来自定义校验规则
    form.verify({

        // 自定义了一个叫做pwd的校验规则
        'pwd': [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],


        //   校验两次密码是否一致的规则
        repwd: function (value) {

            // 通过形参拿到的是确认密码框的内容，还需要拿到密码框中的内容，然后进行一次等于的判断

            // 如果判断失败，则return一个错误的提示消息
            var pwd = $('.reg-box [name=password]').val()

            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })


    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        $.post('http://api-breakingnews-web.itheima.net/api/reguser', {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }, function (res) {
            if (res.stauts !== 0) {
                return console.log(res.message);
            }
            console.log('注册成功');
        })
    })
})