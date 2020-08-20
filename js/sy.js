
$(function(){
	$('.a1').click(function(){
		$('.kfwf').slideToggle()
		
	})
	
	//用hover事件实现背景色的变化
	$('.kfwf').hover(function(){//客户服务的移入效果
		$('.a1').css('background','#003150')
	},function(){
		$('.kfwf').delay(3000).slideUp()
		$('.a1').css('background','#ABB0B3')
	})
	$('.kfwf a').hover(function(){//客户服务的移入效果
		$(this).css('background','rgba(255,255,255,0.1)')
	},function(){
		$('.kfwf a').css('background','#003150')
	})
	
	
	$('.sang .left-L a').hover(function(){//上导航栏a标签的移入效果
		$(this).css('background','#003150')
	},function(){
		$(this).css('background','#ABB0B3')
	})
	$('.sang .left-L p').hover(function(){//上导航栏p标签的移入效果
		$(this).css('background','#003150')
	},function(){
		$(this).css('background','#ABB0B3')
	})
	$('.sang .right-R').hover(function(){//上导航栏左边标签的移入效果
		$(this).css('background','#003150')
	},function(){
		$(this).css('background','#ABB0B3')
	})

//轮播图走动
       var time;                                            //定义一个循环定时器的变量
       var num = 0;                                         //定义一个变量
        time=setInterval(function(){                        //设置循环定时器让图片动起来
		num++;                                              //为判断条件num的自增效果
		if(num>4){                                          //判断结束条件
			$('.imgs').append($('.imgs li').first())        //当结束条件满足时将第一的一张图片插到最后
			$('.imgs').css('left','-2658px')                //从第二张图片开始循环
			num = 4                                         //从新赋值
		}
		var obj = {left:-1329*num+'px'}                     //将图片移动的位置赋值给变量obj
		$('.imgs').animate(obj,500)                         //图片移动时用动画更好看
	},3000)
	
	$('.imgbox').hover(function(){                          //移入移出的使用
		clearInterval(time)                                 //移入时清除定时器
	},function(){
		time=setInterval(function(){                        //移出时执行定时器
			num++;
			if(num>4){
				$('.imgs').append($('.imgs li').first())
				$('.imgs').css('left','-2658px')
				num = 4
			}
			var obj = {left:-1329*num+'px'}
			$('.imgs').animate(obj,500)
		},3000)
	})
	$('.left').click(function(){                           //左按钮的点击事件
		clearInterval(time)
		num--;
		if(num<0){
			$('.imgs').prepend($('.imgs li').last())
			$('.imgs').css('left','-1329px')
			num = 0;
		}
	})
	$('.right').click(function(){                          //右按钮的点击事件
		clearInterval(time)
		num++;
		if(num>4){
			$('.imgs').append($('.imgs li').first())
			$('.imgs').css('left','-2658px')
			num = 2
		}
		var obj = {left:-1329*num+'px'}
		$('.imgs').animate(obj,500)
	})
	$('.bor ul').hover(function(){
		$(this).css('border','5px solid lightgray')
	},function(){
		$('.bor ul').css('border','0.5px solid lightgray')
	})
	//浪琴世界的滑动
	//bar的移动
	var obj;
	$(window).scroll(function(){
		obj =$(window).scrollTop()
		if(obj>=110){
			$(document).mousewheel(function(event){
				console.log(event.deltaY)
				if(event.deltaY>0){
					$('.bar1').slideDown()
				}else{
					$('.bar1').slideUp()
				}
			})
		}
		// console.log($(window).scrollTop())
	})
	
	//线条hr移动
	$('.lq1').hover(function(){
		$('.one hr').eq(1).animate({'margin-left':'0px'},1000)
		$('.mainstyle').slideDown()
	},function(){
		
	})
	
	$('.lq2').hover(function(){
		$('.one hr').eq(0).animate({'margin-left':'0px'},1000)
		$('.mainstyle2').slideDown()
	},function(){
		
	})
	$('.pp').hover(function(){
		$('.h1').eq(0).animate({'margin-left':'0px'},1000)
		$('.mainstyle3').slideDown()
		},function(){
		
		})
		//点击关闭按钮关闭
	    $('.gb').click(function(){
			$('.h1').eq(0).animate({'margin-left':'-65px'},1000)
			  $('.mainstyle3').slideUp()
			  $('.one hr').eq(0).animate({'margin-left':'-60px'},1000)
			  $('.mainstyle2').slideUp()
			  $('.one hr').eq(1).animate({'margin-left':'-60px'},1000)
			  $('.mainstyle').slideUp()
		})
		$('.wenben ul a').hover(function(){
			$(this).css('color','#003150')
		},function(){
			$('.wenben ul a').css('color','#737373')
		})
		
		$('.bot ul li').hover(function(){
			$(this).css('color','#003150')
		},function(){
			$('.bot ul li').css('color','#737373')
		})
		
		var nu=0;
		var sm = 0 ;
		
		
		$('.leftb').click(function(){ 
			sm--;
			
				if(sm<0){
			   sm=2
			    }$('.bi li').css('display','none')
			     $('.bi li ').eq(sm).css('display','block')
				
				 $('.mo').prepend($('.mo li').last())
				$('.mo').eq(sm).css('left','-864px')
				
				
			
			// console.log(sm)
			//左按钮的点击事件
		
		})
		
		$('.rightb').click(function(){                          //右按钮的点击事件
			sm++;
			
			if(sm>2){
				sm= 0
				 $('.bi li').css('display','none')
			}$('.mo').append($('.mo li').first())
				$('.mo').eq(sm).css('left','-1728px')
				
				 $('.bi li ').eq(sm).css('display','block')
				
				console.log(nu)
				
		})
	
	 })