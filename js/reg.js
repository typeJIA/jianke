$(function(){


    /* 右侧栏点击咨询 */ 
    $('.gb').on('click',function(){
        $('.zx').css('display','none');
    });

    /* 新用户注册 */ 
    var isok1 = false;
    $('.content .phone').on('blur',function(){
        if($.trim($('.content .phone').val())){
            if(checkReg.tel($('.content .phone').val())){
                $.ajax({
                    type: 'post',
                    url: '../api/reg.php',
                    async: true,
                    data: {
                        fn: 'checkname',
                        phone: $('.content .phone').val()
                    },
                    success: function(str){
                        console.log(str);
                        if(str == '0'){
                            $('.content .tishi').html('√');
                            $('.content .tishi').css('color','#58bc58');
                            isok1 = true;
                        }else{
                            $('.content .tishi').html('手机号已被注册！');
                            $('.content .tishi').css('color','#red');
                        }
                    }
                });
            }else{
                $('.content .tishi').html('X');
                $('.content .tishi').css('color','red');
            }
        }else{
            alert('手机号码不能为空');
        }
    });

    /* 验证码 */ 
    function yzm(num) {
        var arr = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJLQWERTYUIOP';
        var str = '';
        for (var i = 0; i < num; i++) {
            str += arr.charAt(parseInt(Math.random() * arr.length));
        }
        // console.log(str);
        return str;
    }
    var isok2 = false;
    $('.image-code-box .yzm').html(yzm(4));
    $('.content .text').on('blur',function(){
        if($.trim($('.content .text').val())){
            if($('.content .text').val().toLowerCase() == $('.image-code-box .yzm').html().toLowerCase()){
                $('.content .yzts').html('√');
                $('.content .yzts').css('color','#58bc58');
                isok2 = true;
            }else{
                $('.content .yzts').html('X');
                $('.content .yzts').css('color','red');
            }
        }else{
            alert('验证码不能为空！');
        }
    });
    $('.image-code-box .qh').on('click',function(){
        $('.image-code-box .yzm').html(yzm(4));
    });

    /* 设置密码 */ 
    var isok3 = false;
    $('.content .pwd').on('blur',function(){
        if($.trim($('.content .pwd').val())){
            if(checkReg.psweasy($('.content .pwd').val())){
                $('.content .mmts').html('√');
                $('.content .mmts').css('color','#58bc58');
                isok3 = true;
            }else{
                $('.content .mmts').html('X');
                $('.content .mmts').css('color','red');
            }
        }else{
            alert('密码不能为空！');
        }
    });
    
    /* 确认密码 */ 
    var isok4 = false;
    $('.content .qrpwd').on('blur',function(){
        if($.trim($('.content .qrpwd').val())){
            if(checkReg.pwwagain($('.content .pwd').val(),$('.content .qrpwd').val())){
                $('.content .qrmm').html('√');
                $('.content .qrmm').css('color','#58bc58');
                isok4 = true;
            }else{
                $('.content .qrmm').html('X');
                $('.content .qrmm').css('color','red');
            }
        }else{
            alert('密码不能为空！');
        }
    });

    /* 立即注册 */ 
    $('.content .button').on('click',function(){
        if(isok1 && isok2 && isok3 && isok4){
            $.ajax({
                type: 'post',
                url: '../api/reg.php',
                async: true,
                data: {
                    fn: 'reg',
                    phone: $('.content .phone').val(),
                    password: $('.content .pwd').val()
                },
                success: function(str){
                    console.log(str);
                    var ret = confirm('确定跳转至登录！');
                    alert('注册成功！！');
                    if(str == 'yes'){
                        if(ret){
                            var local = window.localStorage;
                            local.phone = $('.content .phone').val();
                            window.location.href = 'login.html?' + local.phone;
                        }
                    }
                }
            })
        }else{
            alert('请填写完整的信息！');
        }
    });
})