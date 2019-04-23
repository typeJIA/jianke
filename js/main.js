$(function(){
    /*
        1. 先将字幕移动到可视区的下方
        2. 让字幕轮播起来
        3. 鼠标进入可视区停止轮播
    */ 
    var iH = $('#nav li').outerHeight(); // 获取轮播一条字幕的高度
    $('#nav li').css('top',iH); //所有字幕放在可视区的下方
    $('#nav li').eq(0).css('top',0); // 第一条字幕出现在可视区

    var num = 0;
    var timer = setInterval(next,2000);//每2秒轮播下一条字幕
    function next(){
        // 可视区旧字幕挪走
        $('#nav li').eq(num).animate({'top':-iH,'opacity':0},1000,'linear');
        // 临界值判断
        num = ++num > $('#nav li').size()-1 ? 0 : num;
        //再后来的新字幕放在下方
        $('#nav li').eq(num).css('top',iH);
        // 新字幕进入可视区
        $('#nav li').eq(num).animate({'top':0,'opacity':1},1000,'linear');
    }
    $('#jk_nav').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(next,2000);
    });

    /* 控制健客热线上下运动 */ 
    setInterval(function(){
        $('.jkn_hot1').animate({'top':'-13px'},500,'linear');
        $('.jkn_hot1').animate({'top':'-5px'},500,'linear');
    },1000);
    setInterval(function(){
        $('.jkn_hot2').animate({'top':'-13px'},500,'linear');
        $('.jkn_hot2').animate({'top':'-5px'},500,'linear');
    },1000);

    /* 右侧栏点击咨询 */ 
    $('.gb').on('click',function(){
        $('.zx').css('display','none');
    });

    /* 右侧浮动栏 */ 
    $('.ew').hover(function(){
        $('.tm').css('display','block');
        $('.tm').animate({'left':'-344px'},500,'linear');
    },function(){
        $('.tm').animate({'left':'-200px'},500,'linear');
        $('.tm').css('display','none');
    });
    $('.yhfk').hover(function(){
        $('.dtu').animate({'top':'0'},500,'linear');
    },function(){
        $('.dtu').animate({'top':'75px'},500,'linear');
    });



    /* 商品数据渲染 */ 
    $.ajax({
        type : 'post',
        url : 'api/jtcb.php',
        async : true,
        data: '',
        success : function(str){
            // console.log(str);
            var arr = JSON.parse(str); // 字符串转成数组
            // console.log(arr);
            var html = arr.map(function(item){
                return `<dl id="${item.id}" class="jk_mode">
                            <div class="jkn_add">
                                <a href="#">
                                    <img src="${item.img14}" alt="">
                                    <span>
                                        <img src="${item.img15}" alt="">
                                    </span>
                                </a>
                            </div>
                            <dt>${item.dt}</dt>
                            <dd>
                                <div class="foor_left">
                                    <a href="#">
                                        <img src="${item.img1}" alt="">
                                    </a>
                                    <div class="floor_left_box">
                                        <ul class="left_box_top">
                                            <li><a href="#">${item.li1}</a></li>
                                            <li class="mar_left"><a href="#">${item.li2}</a></li>
                                            <li class="mar_top"><a href="#">${item.li3}</a></li>
                                            <li class="mar_left mar_top"><a href="#">${item.li4}</a></li>
                                        </ul>
                                        <ul class="left_box_bot">
                                            <li>
                                                <a href="#">
                                                    <img src="${item.img2}" alt="">
                                                </a>
                                            </li>
                                            <li class="bor_left">
                                                <a href="#">
                                                    <img src="${item.img3}" alt="">
                                                </a>
                                            </li>
                                            <li class="bor_top">
                                                <a href="#">
                                                    <img src="${item.img4}" alt="">
                                                </a>
                                            </li>
                                            <li class="bor_top bor_left">
                                                <a href="#">
                                                    <img src="${item.img5}" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="foor_right">
                                    <div class="foor_right_l">
                                        <a href="#">
                                            <img src="${item.img13}" alt="">
                                            <div class="floor_r_t">
                                                <h3>${item.h3}</h3>
                                                <p>${item.p}</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="foor_right_r">
                                        <ul class="right_box_l">
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text1}</p></div>
                                                    <img src="${item.img6}" alt="">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text2}</p></div>
                                                    <img src="${item.img7}" alt="">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text3}</p></div>
                                                    <img src="${item.img8}" alt="">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text4}</p></div>
                                                    <img src="${item.img9}" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="right_box_r">
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text5}</p></div>
                                                    <img src="${item.img10}" alt="">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text6}</p></div>
                                                    <img src="${item.img11}" alt="">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div><p>${item.text7}</p></div>
                                                    <img src="${item.img12}" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </dd>
                        </dl> `;
            }).join('');
            $('.wrap_middle').html(html);
        }
    });


    /* 资讯平台 */ 
    $('.jk_ul li').mouseover(function(){
        $('.jk_ul li').attr('class','');
        $('.jkn_zx .jk_box').css('display','none');
        var i = $(this).index();
        $('.jk_ul li').eq(i).attr('class','active');
        $('.jkn_zx .jk_box').eq(i).css('display','block');
    });

    /* link平台 */
    $('.jk_uls li').mouseover(function(){
        $('.jk_uls li').attr('class','');
        $('.jk_con_links .jk_tcon_links').css('display','none');
        var i = $(this).index();
        $('.jk_uls li').eq(i).attr('class','active');
        $('.jk_con_links .jk_tcon_links').eq(i).css('display','block');
    });

    /* 回到顶部 */ 
    $(window).on('scroll',function(){
        var scrollTop = window.scrollY;
        if(scrollTop >= 800){
            $('.re_top').css('display','block');
        }else{
            $('.re_top').css('display','none');
        }
    });
    $('.re_top').on('click',function(){
        $('html,body').animate({'scrollTop':'0px'},300,'linear');
    });
    

    // 1.先把所有的图片移动到右侧
    var iW = $('.info_nav li').outerWidth(); // 图片的宽度
    $('.info_nav li').css('left',iW); // 所有图片移动到右侧
    $('.info_nav li').eq(0).css('left',0); // 第一张图片在可视区

    // 2.设置定时器 让图片轮播起来
    var nums = 0;
    var Timer = setInterval(nexts,2000);

    function nexts(){
        // 可视区旧图挪走
        $('.info_nav li').eq(nums).animate({'left':-iW,'opacity':0},1000,'linear');
        // 临界值判断
        nums = ++nums > $('.info_nav li').size()-1 ? 0 : nums;
        // 新图进入可视区 再后来的新图放在右侧
        $('.info_nav li').eq(nums).css('left',iW);
        $('.info_nav li').eq(nums).animate({'left':0,'opacity':1},1000,'linear');
        light();
    }
    function prev(){
        // 切换上一张图
        $('.info_nav li').eq(nums).animate({'left':iW,'opacity':0},1000,'linear'); // 可视区旧图挪走
        nums = --nums < 0 ? $('.info_nav li').size()-1 : nums;
        // 新图进入可视区 
        $('.info_nav li').eq(nums).css('left',-iW);
        // 再后来的新图放在左侧
        $('.info_nav li').eq(nums).animate({'left':0,'opacity':1},1000,'linear');
        light();
    }

    // 3.动态生成焦点 焦点跟随图片轮播
    $('.info_nav li').each(function(i,item){ // for...each
        $span = $('<span>'+ (i + 1) +'</span>');
        $('.light').append($span); // 插入父元素节点中
    });
    $('.light').find('span').eq(nums).addClass('active'); // 让第一个焦点高亮
    // 让焦点跟随+排他
    function light(){
        $('.light').find('span').eq(nums).addClass('active').siblings().removeClass('active');
    }

    // 4.点击左右切换上下图
    // 鼠标进入可视区停止定时器显示左右切换图按钮
    $('.nav #box').hover(function(){
        clearInterval(Timer);
        $('.passbtn').css('display','block');
    },function(){
        Timer = setInterval(nexts,2000);
        $('.passbtn').css('display','none');
    });
    $('.passbtn .last').on('click',function(){
        prev();
    });
    $('.passbtn .next').on('click',function(){
        // 切换下一张图
        nexts();
    });

    // 5.点击焦点自由切换图片
    $('.light').on('click','span',function(ev){
        var index = ev.target.innerHTML - 1;
        if(nums > index){
            $('.info_nav li').eq(nums).animate({'left':iW,'opacity':0},1000,'linear');
            $('.info_nav li').eq(index).css('left',-iW);
            $('.info_nav li').eq(index).animate({'left':0,'opacity':1},1000,'linear');
        }
        if(nums < index){
            $('.info_nav li').eq(nums).animate({'left':-iW,'opacity':1},1000,'linear');
            $('.info_nav li').eq(index).css('left',iW);
            $('.info_nav li').eq(index).animate({'left':0,'opacity':1},1000,'linear');
        }
        nums = index;
        light();
    });

    /* 登录注册更新状态 */ 
        var local = window.localStorage;
        var phone = local.phone;
        // 登录状态
        if(phone){
            $('.mdl').css('display','none');
            $('.mzc').css('display','none');
            $('.zt').css('display','block');
            $('.zt').html(phone + '，欢迎您！');
            $('.tuichu').css('display','block');
        }else{
            $('.mdl').css('display','block');
            $('.mzc').css('display','block');
            $('.zt').css('display','none');
            $('.tuichu').css('display','none');
        }
    $('.tuichu').on('click',function(){
        $('.mdl').css('display','block');
        $('.mzc').css('display','block');
        $('.zt').css('display','none');
        $('.tuichu').css('display','none');
    });

    
})