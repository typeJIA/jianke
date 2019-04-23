$(function(){

    /* 右侧栏点击咨询 */ 
    $('.gb').on('click',function(){
        $('.zx').css('display','none');
    });
    
    /* 购物车数量加和减 */ 
    $('.orderbox').on('click','.increase',function(){
        // console.log($(this));
        var num = $(this).prev().val() * 1; //当前点击的上一个兄弟元素
        num++;
        if(num >= 100){ //输入框临界值
            num = 100;
        }
        $(this).prev().val(num); //赋值
        goodTotal($(this));
        totalNum();
    });
    $('.orderbox').on('click','.reduce',function(){
        // console.log($(this));
        var num = $(this).next().val() * 1; //当前点击的上一个兄弟元素
        num--;
        if(num <= 1){ //输入框临界值
            num = 1;
        }
        $(this).next().val(num); //赋值
        goodTotal($(this));
        totalNum();
    });

    /* 小计（元）随数量而变化 */ 
    function goodTotal(now){
        var num = now.parent().find('.product_nums').val() * 1;
        var price = now.parent().prev().find('.final_price').text();
        var totalPrice = (num * price).toFixed(2);
        // console.log(num,price,totalPrice);
        now.parent().next().html(totalPrice);
    }
    
    /* 手动修改数量自动计算小计 */ 
    $('.orderbox').on('input','.product_nums',function(){
        goodTotal($(this));
        totalNum();
    });

    /* 删除当行 */ 
        $('.orderbox').on('click','.delete_shop',function(){
            $.ajax({
                type: 'post',
                url: '../api/cart2.php',
                async: true,
                data: 'id=' + $(this).parent().parent().parent().parent().attr('data-id'),
                success: function(str){
                    console.log(str);
                    if(str == '1'){
                        var res = confirm('确认删除？');
                        if(res){
                            $(this).parent().parent().parent().parent().remove();
                        }
                        xrgwc();
                    }
                }
            });
            totalNum();
            window.location.reload();
        });

    // 全选商品
    $('.my_cart_goods .abox').on('click',function(){
        if($('.my_cart_goods .abox').prop('checked')){
            // 全选
            $('.product_contain .cbox').prop('checked',true);
            // $('.product_contain .bbox').prop('checked',true);
            // $('.labelly .box').prop('checked',true);
        }else{
            // 全不选
            $('.product_contain .cbox').prop('checked',false);
            // $('.product_contain .bbox').prop('checked',false);
            // $('.labelly .box').prop('checked',false);
        }
        totalNum();
        
    });
    // 勾选商品控制全选checked
    $('.product_contain .cbox').on('click',function(){
        var check = $('.product_contain .cbox:checked').size();
        if(check == $('.product_contain .cbox').size()){
            $('.my_cart_goods .abox').prop('checked',true);
            // $('.product_contain .bbox').prop('checked',true);
            $('.labelly .box').prop('checked',true);
        }else{
            $('.my_cart_goods .abox').prop('checked',false);
            // $('.product_contain .bbox').prop('checked',false);
            $('.labelly .box').prop('checked',false);
        }
        totalNum();
    });
    function gxsp(){
        $('.product_contain .cbox').on('click',function(){
            var check = $('.product_contain .cbox:checked').size();
            if(check == $('.product_contain .cbox').size()){
                $('.my_cart_goods .abox').prop('checked',true);
                // $('.product_contain .bbox').prop('checked',true);
                $('.labelly .box').prop('checked',true);
            }else{
                $('.my_cart_goods .abox').prop('checked',false);
                // $('.product_contain .bbox').prop('checked',false);
                $('.labelly .box').prop('checked',false);
            }
            totalNum();
        });
    }
    $('.labelly .box').on('click',function(){
        if($('.labelly .box').prop('checked')){
            // $('.my_cart_goods .abox').prop('checked',true);
            // $('.product_contain .bbox').prop('checked',true);
            $('.product_contain .cbox').prop('checked',true);
        }else{
            // $('.my_cart_goods .abox').prop('checked',false);
            // $('.product_contain .bbox').prop('checked',false);
            $('.product_contain .cbox').prop('checked',false);
        }
        totalNum();
    });

    // 总数量和总价的更新
    var arr = [];
    function totalNum(){
        arr = [];
        $('.product_contain .cbox').each(function(i,item){
            if($('.product_contain .cbox').eq(i).prop('checked')){
                arr.push(i);
            }
        });
        // console.log(arr);
        var num = 0; //存总数量
        var priceSum = 0; //存总价
        arr.forEach(function(item){
            num += $('.product_nums').eq(item).val() * 1;
            priceSum += $('.sum').eq(item).text() * 1;
        });
        // console.log('总数量是：' + num);
        // console.log('总价格是：' + priceSum);
        $('i').html(num);
        $('.yahei').html('￥' + priceSum.toFixed(2) + '元');
        if(num != 0 && priceSum != 0){
            $('.account').css('background','#E4393C');
            $('.account').css('color','#fff');
        }else{
            $('.account').css('background','#ccc');
            $('.account').css('color','#666');
        }
    }

    // 全删
    $('.delall').on('click',function(){
        // console.log(arr);
        $.ajax({
            type: 'post',
            url: '../api/deleteall.php',
            async: true,
            data: '',
            success: function(str){
                console.log(str);
                if(str){
                    var ret = confirm('确定删除所选商品？');
                    if(ret){
                        for(var i = arr.length - 1; i >= 0; i--){ //从后面开始删除商品
                            $('.orderbox li').eq(arr[i]).remove();
                        }
                        xrgwc();
                    }
                }
            }
        });
        arr = []; //删除了清空数组
        totalNum();
        window.location.reload();
        // xrgwc();
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
            $('.my_cart_log .login_warn').css('display','none');
        }else{
            $('.mdl').css('display','block');
            $('.mzc').css('display','block');
            $('.zt').css('display','none');
            $('.tuichu').css('display','none');
            $('.my_cart_log .login_warn').css('display','block');
        }
    $('.tuichu').on('click',function(){
        $('.mdl').css('display','block');
        $('.mzc').css('display','block');
        $('.zt').css('display','none');
        $('.tuichu').css('display','none');
    });

    // var data = decodeURI(location.search);
    // var iD = data.slice(1);
    // console.log(iD);
    function xrgwc(){
        $.ajax({
            type: 'post',
            url: '../api/cart.php',
            async: true,
            data: '',
            success: function(str){
                // console.log(str);
                var idnum = [];
                var arr=JSON.parse(str);
                for(var i=0;i<arr.length;i++){
                    idnum.push(arr[i].spid);
                }
                // console.log(idnum);
                var html='';
                for(var j=0;j<idnum.length;j++){
                    $.ajax({
                        type:'post',
                        url:'../api/details.php',
                        data:{
                            id:idnum[j]
                        },
                        success:function(str){
                            // console.log(str);
                            var arr = JSON.parse(str);
                            // console.log(arr);
                            html += arr.map(function(item){
                                return `<li class="clearfix" data-id="${item.id}">
                                            <dl class="clearfix">
                                                <dd class="product_class clearfix ">
                                                    <span class="labelly">
                                                        <input type="checkbox" class="checkb cbox">
                                                    </span>
                                                    <a href="###">
                                                        <img src="${item.img1}" alt="">
                                                    </a>
                                                    <div class="products_name">
                                                        <p class="shop_name fl">
                                                            <a href="###">${item.text}</a>
                                                        </p>
                                                        <p class="shop_spec fr">
                                                            <em>规格：</em>
                                                            <span>126s(片剂)(汇仁)</span>
                                                        </p>
                                                    </div>
                                                    <div class="price_info">
                                                        <p class="final_price">${item.price}</p>
                                                        <del>${item.price2}</del>
                                                        <div class="promotions_info">
                                                            <div class="promotion">促销信息</div>
                                                        </div>
                                                    </div>
                                                    <div class="shop_num">
                                                        <a href="###" class="reduce fl"> - </a>
                                                        <input type="text" class="product_nums fl" value="1">
                                                        <a href="###" class="increase fr"> + </a>
                                                    </div>
                                                    <div class="sum total">${item.price}</div>
                                                    <div class="shop_ctrl clearfix">
                                                        <a href="###" class="move_to_fav">移入收藏夹</a>
                                                        <a href="###" class="delete_shop">删除</a>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </li>`;
                            }).join('');
                            $('.orderbox').html(html);
                            gxsp();
                            totalNum();
                        }
                    });
                }
            }
        });
    }
    xrgwc();
    function jia(){
        $.ajax({
            type: 'post',
            url: '../api/chaxun.php',
            async: true,
            data: '',
            success: function(str){
                // console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                $('.orderbox .product_nums').val(arr.jia);
            }
        });
    }jia();
})