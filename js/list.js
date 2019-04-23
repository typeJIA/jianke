$(function () {

    /*
       1. 先将字幕移动到可视区的下方
       2. 让字幕轮播起来
       3. 鼠标进入可视区停止轮播
   */
    var iH = $('#nav li').outerHeight(); // 获取轮播一条字幕的高度
    $('#nav li').css('top', iH); //所有字幕放在可视区的下方
    $('#nav li').eq(0).css('top', 0); // 第一条字幕出现在可视区

    var num = 0;
    var timer = setInterval(next, 2000);//每2秒轮播下一条字幕
    function next() {
        // 可视区旧字幕挪走
        $('#nav li').eq(num).animate({ 'top': -iH, 'opacity': 0 }, 1000, 'linear');
        // 临界值判断
        num = ++num > $('#nav li').size() - 1 ? 0 : num;
        //再后来的新字幕放在下方
        $('#nav li').eq(num).css('top', iH);
        // 新字幕进入可视区
        $('#nav li').eq(num).animate({ 'top': 0, 'opacity': 1 }, 1000, 'linear');
    }
    $('#jk_nav').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(next, 2000);
    });

    /* 控制健客热线上下运动 */
    setInterval(function () {
        $('.jkn_hot2').animate({ 'top': '-13px' }, 500, 'linear');
        $('.jkn_hot2').animate({ 'top': '-5px' }, 500, 'linear');
    }, 1000);

    /* '全部商品分类' 鼠标移入显示下拉菜单 */
    $('.jk_nav_l .mt').mouseover(function () {
        $('.jk_nav_l .mc').css('display', 'block');
    });
    $('.jk_nav_l .mt').mouseout(function () {
        $('.jk_nav_l .mc').css('display', 'none');
    });

    /* 列表数据渲染 */
    var ipage = 1; //当前页
    var inum = 8; //当前页显示的商品条数
    $.ajax({
        type: 'post',
        url: '../api/list.php',
        data: 'page=' + ipage + '&num=' + inum,
        async: true,
        success: function (str) {
            // console.log(str);
            var arr = JSON.parse(str); //字符串转成数组
            // console.log(arr);
            var str = arr.reg;
            var html = str.map(function (item) {
                return `<li data-id="${item.id}">
                            <div class="lihover">
                                <div class="imgbig">
                                    <img src="${item.img1}" alt="">
                                </div>
                            </div>
                            <div class="pro-botxt">
                                <span>￥<i>${item.price}</i></span>
                                <s>￥${item.price2}</s>
                                <p><a href="#">
                                    <img src="${item.img2}" alt="">${item.text}
                                </a></p>
                                <div class="btn_Add pro_box">
                                    <a href="#">${item.text2}</a>
                                </div>
                            </div>
                        </li>`;
            }).join('');
            $('.pro-con').html(html);

            // 动态生成页码数：= 总数量 / 每页条数
            var paGe = Math.ceil(arr.total / arr.num);
            // console.log(paGe); //15条 2页
            var jd = '';
            for(var i = 0; i < paGe; i++){
                jd += `<a href="javascript:;">${i + 1}</a>`;
            }
            $('.pages').append(jd);
            $('.pages a').eq(0).attr('class','active');

            // 点击切换分页
            $('.pages a').click(function(){
                var i = $(this).index();
                $('.pages a').eq(i)
                .attr('class','active')
                .siblings()
                .attr('class','');
                var ipage = $(this).html(); //获取当前点击页码数的值
                var inum = 8; //显示的数量条数
                // console.log(ipage,inum);
                // 更新商品列表数据
                $.ajax({
                    type: 'post',
                    url: '../api/list.php',
                    data: 'page=' + ipage + '&num=' + inum,
                    async: true,
                    success: function(str){
                        // console.log(str);
                        var arr = JSON.parse(str); //字符串转成数组
                        // console.log(arr);
                        var str = arr.reg;
                        var html = str.map(function (item) {
                            return `<li data-id="${item.id}">
                                        <div class="lihover">
                                            <div class="imgbig">
                                                <img src="${item.img1}" alt="">
                                            </div>
                                        </div>
                                        <div class="pro-botxt">
                                            <span>￥<i>${item.price}</i></span>
                                            <s>￥${item.price2}</s>
                                            <p><a href="#">
                                                <img src="${item.img2}" alt="">${item.text}
                                            </a></p>
                                            <div class="btn_Add pro_box">
                                                <a href="#">${item.text2}</a>
                                            </div>
                                        </div>
                                    </li>`;
                        }).join('');
                        $('.pro-con').html(html);
                    }
                });
                $('.price-icon a').click(function(){
                    $.ajax({
                        type: 'post',
                        url: '../api/rank.php',
                        data: 'page=' + ipage + '&num=' + inum,
                        async: true,
                        success: function(att){
                            // console.log(att);
                            var str = JSON.parse(att);
                            console.log(str);
                            var html = str.map(function (item) {
                                return `<li data-id="${item.id}">
                                            <div class="lihover">
                                                <div class="imgbig">
                                                    <img src="${item.img1}" alt="">
                                                </div>
                                            </div>
                                            <div class="pro-botxt">
                                                <span>￥<i>${item.price}</i></span>
                                                <s>￥${item.price2}</s>
                                                <p><a href="#">
                                                    <img src="${item.img2}" alt="">${item.text}
                                                </a></p>
                                                <div class="btn_Add pro_box">
                                                    <a href="#">${item.text2}</a>
                                                </div>
                                            </div>
                                        </li>`;
                            }).join('');
                            $('.pro-con').html(html);
                        }
                    })
                });
            });
        }
    });

    /* 点击价格排序 */ 
    $('.price-icon a').click(function(){
        $.ajax({
            type: 'post',
            url: '../api/rank.php',
            data: 'page=' + ipage + '&num=' + inum,
            async: true,
            success: function(jg){
                // console.log(jg);
                var str = JSON.parse(jg);
                // console.log(str);
                var html = str.map(function (item) {
                    return `<li data-id="${item.id}">
                                <div class="lihover">
                                    <div class="imgbig">
                                        <img src="${item.img1}" alt="">
                                    </div>
                                </div>
                                <div class="pro-botxt">
                                    <span>￥<i>${item.price}</i></span>
                                    <s>￥${item.price2}</s>
                                    <p><a href="#">
                                        <img src="${item.img2}" alt="">${item.text}
                                    </a></p>
                                    <div class="btn_Add pro_box">
                                        <a href="#">${item.text2}</a>
                                    </div>
                                </div>
                            </li>`;
                }).join('');
                $('.pro-con').html(html);
            }
        });
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
    
    $('.pro-con').on('click','li',function(){
        var id = $(this).attr('data-id');
        window.location.href = 'details.html?' + id;
    });
})