$(function(){

    /* '手机号'和'账号密码'Tab 切换 */ 
    $('.tab-login-item').click(function(){
        var i = $(this).index();
        $('.tab-login-item').eq(i)
        .attr('class','tab-login-item active')
        .siblings()
        .attr('class','tab-login-item');

        $('.box .login-main-content').eq(i)
        .css('display','block')
        .siblings()
        .css('display','none');
    });

    /* 右侧栏点击咨询 */ 
    $('.gb').on('click',function(){
        $('.zx').css('display','none');
    });

    /* 手机号快捷登录 */ 

    /* 输入手机号 */ 
    var isok1 = false;
    $('.content .tel').on('blur',function(){
        if($.trim($('.content .tel').val())){
            if(checkReg.tel($('.content .tel').val())){
                $('.content .tishi').html('√');
                $('.content .tishi').css('color','#58bc58');
                $('.content .telts').css('display','none');
                isok1 = true;
            }else{
                $('.content .tishi').html('X');
                $('.content .tishi').css('color','red');
            }
        }else{
            $('.content .telts').css('display','block');
        }
    });
    /* 输入验证码 */ 
    var isok2 = false;
    function yzm(num) {
        var arr = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJLQWERTYUIOP';
        var str = '';
        for (var i = 0; i < num; i++) {
            str += arr.charAt(parseInt(Math.random() * arr.length));
        }
        // console.log(str);
        return str;
    }
    $('.image-code .txyzm').html(yzm(4));
    $('.image-code .txyzm').on('click',function(){
        $('.image-code .txyzm').html(yzm(4));
    });
    $('.content .yzm').on('blur',function(){
        if($.trim($('.content .yzm').val())){
            if($('.content .yzm').val().toLowerCase() == $('.image-code .txyzm').html().toLowerCase()){
                $('.content .ztts').html('√');
                $('.content .ztts').css('color','#58bc58');
                $('.content .yzmts').css('display','none');
                isok2 = true;
            }else{
                $('.content .ztts').html('X');
                $('.content .ztts').css('color','red');
            }
        }else{
            $('.content .yzmts').css('display','block');
        }
    });

    $('.form-items .dl').on('click',function(){
        if(isok1 && isok2){
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                async:true,
                data: {
                    fn: 'reg',
                    phone: $('.content .tel').val()
                },
                success: function(str){
                    console.log(str);
                    if(str == '1'){
                        var local = window.localStorage;
                        local.phone = $('.content .tel').val();
                        window.location.href = '../main.html?' + local.phone;
                        alert('登录成功！！');
                    }
                }
            });
        }else{
            alert('请填写完整的信息！');
        }
    });
})