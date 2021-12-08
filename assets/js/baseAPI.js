// 注意每次调用$.get()或者$.post()或者$.ajax()的时候会先调用ajaxPrefiler()这个函数

// 在这个函数中，可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    console.log(options.url);

    // 在发起真正的ajax请求之前统一拼接请求的根路径
    options.url='http://api-breakingnews-web.itheima.net'+options.url
})