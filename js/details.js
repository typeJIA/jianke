$(function () {
    // function gwc(){
    //     $.ajax({
    //         type:'post',
    //         url:'../api/list.php',
    //         data:{
    //             id:
    //         }
    //     })
    // }

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
    
    /* 右侧栏点击咨询 */ 
    $('.gb').on('click',function(){
        $('.zx').css('display','none');
    });

    /* '建议搭配' */ 
    function aaa() {
        $('.specif').on('click','a',function(){
            var i = $(this).index();
            $('.specif a').eq(i)
            .attr('class','active_a')
            .siblings()
            .attr('class','');
        });
      }
    

    /* 放大镜 */ 
    var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	
	var arr = ["../image/2018121217581856!320x320.jpg","../image/2017101617544160!320x320.jpg","../image/20171616629500!320x320.jpg","../image/20171616625453!320x320.jpg","../image/20171616633750!320x320.jpg"];
	var oarr = ["../image/2018121217581856.jpg","../image/2017101617544160.jpg","../image/20171616629500.jpg","../image/20171616625453.jpg","../image/20171616633750.jpg"];
	itwo.each(function(i){
		$(this).mousemove(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		});
		
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css('display','block')
			var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=175){
				ol=175
			}
			if(ot>=175){
				ot=175
			}
			$(".wai span").css({'left':ol,'top':ot});
			var ott = ot/350*800;
			var oll = ol/350*800;
			tthe.css({'left':-oll,'top':-ott});
		});
		ione.mouseout(function(){
			ithe.css('display','none');
		});
    });
    

    /* 回到顶部 */ 
    $(window).on('scroll',function(){
        var scrollTop = window.scrollY;
        if(scrollTop >= 200){
           $('.re-top').css('display','block'); 
        }else{
            $('.re-top').css('display','none');
        }
    });
    $('.re-top').on('click',function(){
        $('html,body').animate({'scrollTop':'0px'},300,'linear');
    });
    
    /* 右侧栏导航 */ 
    var Ih = $('.jiankecode').outerHeight();
    $('.wx').css('top',0);
    $('.codeshow').css('left','-200px');
    $('.codeshow').css('display','none');
    $('.jiankecode').hover(function(){
        $('.wx').animate({'top':-Ih},500,'linear');
        $('.codeshow').animate({'left':'-185px'},500,'linear');
        $('.codeshow').css('display','block');
    },function(){
        $('.wx').animate({'top':0},500,'linear');
        $('.codeshow').animate({'left':'-200px'},500,'linear');
        $('.codeshow').css('display','none');
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


    /* 获取列表页商品的data-id进行查询渲染 */ 
    var data = decodeURI(location.search);
    var iD = data.slice(1);
    // console.log(iD);
    $.ajax({
        type: 'post',
        url: '../api/details.php',
        async: true,
        data: 'id=' + iD,
        success: function(str){
            // console.log(str);
            var arr = JSON.parse(str);
            // console.log(arr);
            var html = arr.map(function(item){
                return `<div class="detail_box" data-id="${item.id}">
                            <div class="det_title">
                                <div class="baidu_po">
                                    <div class="baidu_img">
                                        <a href="###">
                                            <span>百度认证</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="widet">
                                    <h1>${item.text}</h1>
                                    <span>特惠+好礼 为养家男人撑腰</span>
                                </div>
                            </div>
                            <div class="effect_p">
                                <span class="text">调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。</span>
                            </div>
                            <div class="jk_appewm">
                            <img src="../image/ewm_app.jpg" alt="">
                            <p class="txt_ewm">扫码下载领1000元</p>
                        </div>
                        <div class="hd_by">
                            <a href="###" class="hd_title">【戳我下载APP 立省1000元】</a>
                            <a href="###" class="zpbz"></a>
                        </div>
                        <dl class="assort tongyong">
                            <dt>通用名称：</dt>
                            <dd>
                                <a href="###" class="sbp">肾宝片</a>
                                <img src="${item.img2}" alt="">
                            </dd>
                        </dl>
                        <dl class="assort">
                            <dt>产品编号：</dt>
                            <dd>B12002011692</dd>
                        </dl>
                        <dl class="assort tongyong">
                            <dt>批准文号：</dt>
                            <dd>
                                <span>国药准字Z20080627</span>
                                <a href="###">
                                    <span class="fn_blue">（国家食药总局查询）</span>
                                </a>
                            </dd>
                        </dl>
                        <dl class="assort tongyong">
                            <dt>商品评分：</dt>
                            <dd>
                                <div class="fl">
                                    <div class="star sa4"></div>
                                    <a href="###">(已有
                                        <span>6511</span>人评价)
                                    </a>
                                </div>
                            </dd>
                        </dl>
                        <dl class="jk_syncdata">
                            <div class="onePackage">
                                <!-- 处方 非处方 -->
                                <div class="Price_info">
                                    <dl class="assort bigPrice">
                                        <dt>价      格：</dt>
                                        <dd>
                                            <em>￥${item.price}</em>
                                        </dd>
                                    </dl>
                                    <dl class="assort detailYhq">
                                        <dt>优 惠  券：</dt>
                                        <dd class="coupons">
                                            <a href="###">满1932-322</a>
                                            <a href="###">满322-40</a>
                                        </dd>
                                    </dl>
                                    <dl class="assort spe_info spe_cx1">
                                        <dt>促销信息：</dt>
                                        <dd class="coupons">
                                            <p>
                                                <i>领券1盒立减40，仅需282元！2盒立减80，买6盒仅需5盒的价格！2盒一疗程！治疗阳痿早泄搭配<固本回元口服液>效果好！4盒起赠送价值¥98的VIP性福大礼包......</i>
                                                <em class="cx_more1">查看更多</em>
                                            </p>
                                        </dd>
                                    </dl>
                                    <dl class="assort spe_info spe_yyxz">
                                        <dt>用药须知：</dt>
                                        <dd class="coupons">
                                            <p>
                                                <i>治疗阳痿早泄搭配<固本回元口服液>效果更好（详情见推荐套餐1）！</i>
                                            </p>
                                        </dd>
                                    </dl>
                                    <dl class="assort spe_info guige tzxzz">
                                        <dt>建议搭配：</dt>
                                        <dd class="specif jk_xztz">
                                            <a href="###" class="active_a">一件体验装</a>
                                            <a href="###">烈焰强肾坚挺装(肾宝片+艾力达)</a>
                                            <a href="###">阳痿早泄克星装(肾宝片+固本回元口服液)</a>
                                            <a href="###">固本生精助育装(肾宝片+生精片)</a>
                                            <a href="###">固肾护腺强效装(肾宝片+前列回春胶囊)</a>
                                            <a href="###">补肾阳延缓时长(肾宝片+秘鲁黑玛咖)</a>
                                        </dd>
                                    </dl>
                                    <dl class="assort spe_info guige">
                                        <dt>产品规格：</dt>
                                        <dd class="specif">
                                            <a href="###" class="active_a">126s(片剂)(汇仁)</a>
                                        </dd>
                                    </dl>
                                    <dl class="assort">
                                        <dt>生产厂家：</dt>
                                        <dd>
                                            <a href="###" class="active_a sds">江西汇仁药业股份有限公司</a>
                                        </dd>
                                    </dl>
                                </div>
                                <!-- 非处方 购买部分按钮 -->
                                <div class="btn_pay_box">
                                    <div class="btn_box">
                                        <dl class="assort pro_num">
                                            <dt>购买数量：</dt>
                                            <dd>
                                                <input type="text" value="1" class="inp_box">
                                                <a href="###" class="btntop imgbg_i"></a>
                                                <a href="###" class="btnbottom imgbg_i"></a>
                                            </dd>
                                        </dl>
                                        <div class="yunfei">
                                            <a href="###">运费详细>></a>
                                        </div>
                                        <a href="###" class="pay_now imgbg_i"></a>
                                        <div class="pro_box clearfixs">
                                            <a href="###" class="imgbg_i"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dl>
                        <dl class="commit assort">
                            <dt>健客承诺：</dt>
                            <dd>
                                <span>
                                    <i class="com_z"></i>
                                    <a href="###">正品保证</a>
                                </span>
                            </dd>
                            <dd>
                                <span class="p1">
                                    <i class="com_f"></i>
                                    <a href="###">货到付款 银行汇款/转账 在线支付 </a>
                                </span>
                            </dd>
                        </dl>
                        <dl class="tjtpis">【此产品为特例产品，不支持使用优惠券】</dl>
                    </div>
                </div>
                <div class="tag_seo">
                    <span class="tit1_tag">标签：</span>
                    <a href="###" class="txt_tag">领券+好礼】汇仁肾宝片126s价格</a>
                    <a href="###" class="txt_tag">领券+好礼】汇仁肾宝片126s图片</a>
                    <a href="###" class="txt_tag">领券+好礼】汇仁肾宝片126s问答</a>
                    <a href="###" class="txt_tag">领券+好礼】汇仁肾宝片126s资讯</a>
                </div>`;
            }).join('');
            $('.big_box').html(html);
            aaa();
            /* 点击'加入购物车' */ 
            $('.pro_box .imgbg_i').on('click',function(){
                var num = $('.cart em').text() * 1;
                num++;
                $.ajax({
                    type: 'post',
                    url: '../api/details2.php',
                    async: true,
                    data:{
                        id:iD,
                        Nums:num,
                        tel:phone
                    },
                    // data: 'id=' + iD + '&Nums=' + num + '&tel=' + phone,
                    success: function(str){
                        // console.log(str);
                        if(str == '1'){
                            alert('商品成功添加至购物车！');
                            gxsj();
                            // numjia();
                        }
                    }
                });
            });
            $('.btn_pay_box .btntop').on('click',function(){
                var num = $('.btn_pay_box .inp_box').val() * 1;
                num++;
                // $.ajax({
                //     type: 'post',
                //     url: '../api/jiajian.php',
                //     async: true,
                //     data:{
                //         id:iD,
                //         Nums:num
                //     },
                //     success: function(str){
                //         console.log(str);
                //         if(str == '1'){
                            $('.btn_pay_box .inp_box').val(num);
                            // numjia();
                //         }
                //     }
                // });
            });
            $('.btn_pay_box .btnbottom').on('click',function(){
                var num = $('.btn_pay_box .inp_box').val() * 1;
                num--;
                // $.ajax({
                //     type: 'post',
                //     url: '../api/jiajian.php',
                //     async: true,
                //     data:{
                //         id:iD,
                //         Nums:num,
                //         tel:phone
                //     },
                //     success: function(str){
                //         console.log(str);
                //         if(str == '1'){
                            if(num <= 1){
                                num = 1;
                            }
                            $('.btn_pay_box .inp_box').val(num);
                            // numjian();
                //         }
                //     }
                // });
            });
        }
    });
    function gxsj(){
        $.ajax({
            type: 'post',
            url: '../api/gwc.php',
            async: true,
            data: '',
            success:function(arr){
                // console.log(arr);
                var reg = JSON.parse(arr);
                // console.log(reg);
                $('.abox-cart em').text(reg.length);
                $('.roof .ling').text(reg.length);
            }
        });
    }gxsj();
    // function numjia(){
    //     $.ajax({
    //         type: 'post',
    //         url: '../api/chaxun.php',
    //         async: true,
    //         data: '',
    //         success: function(str){
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             // console.log(arr);
    //             $('.btn_pay_box .inp_box').text(arr.jia);
    //         }
    //     });
    // }numjia();
    // function numjian(){
    //     $.ajax({
    //         type: 'post',
    //         url: '../api/chaxun.php',
    //         async: true,
    //         data: '',
    //         success: function(str){
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             // console.log(arr);
    //             $('.btn_pay_box .inp_box').html(arr.jian);
    //         }
    //     });
    // }numjian();
    
    $('.abox-cart .cart').on('click',function(){
        window.location.href = 'cart.html?';
    });
})