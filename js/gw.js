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
		
		//购物的hover效果
		$('.rr a').hover(function(){
			$('.rr a ').css({'background':'#003150'})
			$('.rr a span').css('color','#fff')
			$('.rr a b ').css('color','#fff')
		},function(){
			$('.rr a ').css({'background':'#fff'})
			$('.rr a span').css('color','#003150')
			$('.rr a b ').css('color','#003150')
		})
		$('.br').hover(function(){
			$(this).css('border','5px solid lightgray')
		},function(){
			$(this).css('border','0px')
		})
		
		$('.bl').hover(function(){
			$(this).css('border','5px solid lightgray')
		},function(){
			$(this).css('border','1px solid #EFF1F3')
		})
		
		$('.xg').hover(function(){
			$(this).css({'background':'#fff','color':'#003150','border':'1px solid black'})
		},function(){
		    $('.xg').css({'background':'#003150','color':'#fff','border':'0px'})
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
})