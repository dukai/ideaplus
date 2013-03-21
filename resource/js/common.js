
var scrollBody = 'document';
if($.browser.mozilla){
	scrollBody = 'html';
}

if($.browser.msie){
	scrollBody = 'html';
}

if($.browser.webkit){
	scrollBody = 'body';
}

$('.glare').css('opacity', 1);
/*
setTimeout(function(){
	$('#loading').addClass('inview');
	var preloadImages = document.getElementsByTagName('img');
	var progressbarWidth = 0;
	var loadedNum = 0;
	for(var i = 0; i < preloadImages.length; i++){
		var img = new Image();
		img.onload = function(){
			loadedNum++;
			$('#loading .bar').css('width', Math.floor(190 * loadedNum / preloadImages.length));
			$('#loading .loadinfo span').html( loadedNum + ' / ' + preloadImages.length);


			if(loadedNum == preloadImages.length){
				resourceLoaded();
			}
		};

		img.src = preloadImages[i].src;
	}
}, 600);


var resourceLoaded = function(){
	$('#loading').removeClass('inview');
	setTimeout(function(){
		$('#loading').hide();
		setStyles(mainArray, styles_m);

		//main section 动画完成后取消transition delay，并将marginTop添加到集合中
		setTimeout(function(){
			for(var i = 0; i < mainArray.length; i++){
				var target = mainArray[i];
				$(target.dom).css({'-webkit-transition-delay':'0', '-moz-transition-delay': '0s'});
				mainArray[i].marginTop = parseInt(styles_m[i].marginTop);
			}
		}, 1000);
	}, 300);
	
}
*/
$('#loading').hide();


/*
var timer = setInterval(function(){
	$('#loading .bar').css('width', progressbarWidth++);
	if(progressbarWidth > 190){
		clearInterval(timer);
	}
}, 100);
*/

//设置集合样式
function setStyles(collection, styles){
	for(var i = 0, len = collection.length; i < len; i++){
		$(collection[i].dom).css(styles[i]);
	}
}
//获取集合内容
function getCollection(selector, collection){
	$(selector).each(function(index){
		var obj = {};
		obj.dom = this;
		collection.push(obj);
	});
}
//获取元素在文档中的位置
var getPositionInDoc = function(target, parent) {
	var left = 0,
		top = 0;
	do {
		left += target.offsetLeft || 0;
		top += target.offsetTop || 0;
        target = target.offsetParent;
		if(parent && target == parent){
			break;
		}
	} while (target);
	return {
		left: left,
		top: top
	};
}

//取消延时显示
var removeDelay = function(colletion){
	for(var i = 0; i < colletion.length; i++){
		$(colletion[i].dom).css({'-webkit-transition-delay':'0', '-moz-transition-delay': '0s'});
	}
}
var serviceArray = [];
var serviceArray2 = [];
var mainArray = [];
var worksArray = [];
var aboutArray = [];

var lastPosition = 0;

//窗口高度
var windowHeight = $(window).height();

var perScreen = windowHeight;



/*设置首页和末页高度*/
$('#main_sec').css('height', windowHeight);
$('#main_sec .inset').css('height', windowHeight - 200);
$('#about_sec').css('height', windowHeight);

//文档高度
var docHeight = $(document).height();
//关于部分开始
var aboutStart =  docHeight - windowHeight - windowHeight;

//初始化集合
getCollection("#main_sec .inset img", mainArray);
getCollection('#service_sec .inset img', serviceArray);
getCollection('#service_sec_2 .inset img', serviceArray2);
getCollection('#works_sec .inset a.title', worksArray);
getCollection('#works_sec .inset ul li', worksArray);
getCollection('#about_sec .inset .content', aboutArray);
//初始化jQuery.scrollTo和jQuery.localScroll
$('header').localScroll(400);
$('#main_sec').localScroll(200);

//为main secition images 添加动画类
$('#main_sec img').addClass('anim');
//定义main section images样式
var styles_m = [
	{marginLeft: '-340px', marginTop: '-240px', opacity: 1, '-webkit-transition-delay': '.1s', '-webkit-transform': 'scale(1)', '-moz-transition-delay': '.1s', '-moz-transform': 'scale(1)'},
	{marginLeft: '-100px', marginTop: '-160px', opacity: 1, '-webkit-transition-delay': '.2s','-webkit-transform': 'scale(1)', '-moz-transition-delay': '.2s','-moz-transform': 'scale(1)'},
	{marginLeft: '-200px', marginTop: '-20px', opacity: 1, '-webkit-transition-delay': '.3s','-webkit-transform': 'scale(1)', '-moz-transition-delay': '.3s','-moz-transform': 'scale(1)'},
	{marginLeft: '-260px', marginTop: '30px', opacity: 1, '-webkit-transition-delay': '.4s','-webkit-transform': 'scale(1)', '-moz-transition-delay': '.4s','-moz-transform': 'scale(1)'},
	{marginLeft: '100px', marginTop: '20px', opacity: 1, '-webkit-transition-delay': '.5s','-webkit-transform': 'scale(1)', '-moz-transition-delay': '.5s','-moz-transform': 'scale(1)'}
];

setStyles(mainArray, styles_m);

//main section 动画完成后取消transition delay，并将marginTop添加到集合中
setTimeout(function(){
	for(var i = 0; i < mainArray.length; i++){
		var target = mainArray[i];
		$(target.dom).css({'-webkit-transition-delay':'0', '-moz-transition-delay': '0s'});
		mainArray[i].marginTop = parseInt(styles_m[i].marginTop);
	}
}, 1000);

var styles_s = [
	{marginLeft: '-240px', marginTop: '-250px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.1s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.1s'},
	{marginLeft: '-400px', marginTop: '-50px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.2s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.2s'},
	{marginLeft: '-160px', marginTop: '20px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.3s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.3s'},
	{marginLeft: '-450px', marginTop: '100px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.4s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.4s'},
	{marginLeft: '-60px', marginTop: '160px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.5s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.5s'}
];



var styles_s2 = [
	{marginLeft: '-340px', marginTop: '-300px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.1s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.1s'},
	{marginLeft: '-250px', marginTop: '-240px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.2s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.2s'},
	{marginLeft: '-460px', marginTop: '-130px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.3s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.3s'},
	{marginLeft: '-500px', marginTop: '-20px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.4s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.4s'},
	{marginLeft: '-160px', marginTop: '50px', opacity: 1, '-webkit-transform': 'scale(1)', '-webkit-transition-delay': '.5s', '-moz-transform': 'scale(1)', '-moz-transition-delay': '.5s'}
];

var styles_w = [
	{'-webkit-transition-delay': '.1s', '-moz-transition-delay': '.1s'},
	{'-webkit-transition-delay': '.2s', '-moz-transition-delay': '.2s'},
	{'-webkit-transition-delay': '.3s', '-moz-transition-delay': '.3s'},
	{'-webkit-transition-delay': '.4s', '-moz-transition-delay': '.4s'},
	{'-webkit-transition-delay': '.5s', '-moz-transition-delay': '.5s'},
	{'-webkit-transition-delay': '.6s', '-moz-transition-delay': '.6s'},
	{'-webkit-transition-delay': '.7s', '-moz-transition-delay': '.7s'}
];


//about section 样式
var styles_a = [
	{marginTop: '-140px'},
	{marginTop: '-200px'},
	{marginTop: '-300px'}
];


setStyles(aboutArray, styles_a);
/*
$('#service_sec .inset img').each(function(index){
	serviceArray[index].position  = getPositionInDoc(this);
});
*/

for(var i = 0; i < serviceArray.length; i++){
	var position = getPositionInDoc(serviceArray[i].dom);
	position.top += parseInt(styles_s[i].marginTop);
	serviceArray[i].position = position;
}

for(var i = 0; i < serviceArray2.length; i++){
	var position = getPositionInDoc(serviceArray2[i].dom);
	position.top += parseInt(styles_s2[i].marginTop);
	serviceArray2[i].position = position;
}



for (var i = 0; i < aboutArray.length; i++) {
	aboutArray[i].marginTop = parseInt(styles_a[i].marginTop);
};




var mainSecFn = function(scrollTop){
	if(scrollTop > perScreen){
		$('#main_sec .inset').hide();
	}else{
		$('#main_sec .inset').show();
		//console.log('scroll');
		$('#main_sec .inset img').removeClass('anim');
		var diff = scrollTop % perScreen;
		var persent = diff / perScreen;

		for (var i = 0; i < mainArray.length; i++) {
			var courage = 240 * i;
			var origMarginTop = mainArray[i].marginTop;
			var x = Math.ceil((500 + courage) / perScreen) * diff / 5;
			var marginTop = origMarginTop - x ;
			//console.log(marginTop);
			$(mainArray[i].dom).css('marginTop', marginTop);
		};
	}
	
}

var serviceSecFn = function(scrollTop){
	var secTop = getPositionInDoc(document.getElementById('service_sec'));
	if(scrollTop > secTop.top - (perScreen / 2)){
		if(!$('#service_sec').hasClass('inview')){
			$('#service_sec img').addClass('anim');
			$('#service_sec').addClass('inview');
			setStyles(serviceArray, styles_s);

			setTimeout(function(){
				removeDelay(serviceArray);
			}, 1000);
		}
		

		for(var i = 0; i < serviceArray.length; i++){
			var target = serviceArray[i];
			if(target.position.top - scrollTop < 140){
				$(target.dom).css('opacity', .05);
			}else if(target.position.top - scrollTop > 140){
				$(target.dom).css('opacity', 1);
			}
			
		}


		
	}
	var sec2Top = getPositionInDoc(document.getElementById('service_sec_2'));
	if(scrollTop > sec2Top.top - (perScreen / 2)){
		if(!$('#service_sec_2').hasClass('inview')){
			$('#service_sec_2 img').addClass('anim');
			$('#service_sec_2').addClass('inview');
			setStyles(serviceArray2, styles_s2);

			setTimeout(function(){
				removeDelay(serviceArray2);
			}, 1000);
		}
		

		for(var i = 0; i < serviceArray2.length; i++){
			var target = serviceArray2[i];
			if(target.position.top - scrollTop < 140){
				$(target.dom).css('opacity', .05);
			}else if(target.position.top - scrollTop > 140){
				$(target.dom).css('opacity', 1);
			}
			
		}
	}
}

var worksSecFn = function(scrollTop){
	var secTop = getPositionInDoc(document.getElementById('works_sec'));
	if(scrollTop > secTop.top - (perScreen / 2)){
		if(!$('#works_sec').hasClass('inview')){
			for(var i = 0; i < worksArray.length; i++){
				worksArray[i].position = getPositionInDoc(worksArray[i].dom);
			}
			$('#works_sec a').addClass('anim');
			
			$('#works_sec li').addClass('anim');
			setStyles(worksArray, styles_w);
			$('#works_sec').addClass('inview');
			setTimeout(function(){
				removeDelay(worksArray);
			}, 1000);
		}
		

		for(var i = 0; i < worksArray.length; i++){
			var target = worksArray[i];
			if(target.position.top - scrollTop < 140){
				$(target.dom).css('opacity', .05);
			}else if(target.position.top - scrollTop > 140){
				$(target.dom).css('opacity', 1);
			}
			
		}
	}
}


var aboutSecFn = function(scrollTop){
	var secTop = getPositionInDoc(document.getElementById('about_sec'));
	if(scrollTop > secTop.top - perScreen){
		
		var diff = scrollTop - secTop.top + perScreen;
		//console.log(diff);

		for (var i = 0; i < aboutArray.length; i++) {
			var target = aboutArray[i];
			var marginTop = parseInt(target.marginTop);
			var marginTopDiff = (0 - marginTop) * diff / perScreen;
			$(target.dom).css('marginTop', target.marginTop + marginTopDiff);
		};


		if(scrollTop >= docHeight - perScreen - 20){
			$('#map').addClass('open');
		}else{
			$('#map').removeClass('open');
		}

	}


}



$(window).scroll(function(e){
	//var diff =  document.body.scrollTop - lastPosition;
	var scrollTop = $(scrollBody).scrollTop();
	
	mainSecFn(scrollTop);

	serviceSecFn(scrollTop);

	worksSecFn(scrollTop);

	aboutSecFn(scrollTop);
	
	lastPosition = document.body.scrollTop;
});
var worksShow = {
	show: function(){

	},
	imgs: ['resource/images/big/1.png', 
	'resource/images/big/2.png', 
	'resource/images/big/3.png', 
	'resource/images/big/4.png', 
	'resource/images/big/5.png', 
	'resource/images/big/6.png']
};

$('#works_show').css('line-height', perScreen + 'px');
$('#works_sec a.more').click(function(e){
	var li = this.parentNode.parentNode;
	var position = getPositionInDoc(li);
	position.top = position.top - $(scrollBody).scrollTop() + 5;
	position.left = position.left + 5;
	worksShow.position = position;
	$(li).addClass('flip');
	worksShow.li = li;
	var imgSrc = worksShow.imgs[$(li).attr('data-index')];
	setTimeout(function(){
		
		$('#works_show').css({'top': position.top, 'left': position.left, 'opacity': 0}).show();
		$('#works_show').addClass('fullscreen');
		$('#works_show').animate({'top': 0, 'left': 0, 'width': '100%', 'height': '100%', 'opacity': 1}, 500, function(){
			$('body').css('overflow', 'hidden');
			var img = new Image();
			img.onload = function(){

				$('#works_show img').attr('src', imgSrc);
			}

			img.src = imgSrc;

		});
	}, 400);
	

	e.preventDefault();
	return false;
});


$('#works_show .closebtn').click(function(){
	$('body').css('overflow', 'auto');
	$('#works_show').animate({'top': worksShow.position.top, 'left': worksShow.position.left, 'width': '294px', 'height': '221px', 'opacity': 0}, 500, function(){
		$(worksShow.li).removeClass('flip');
		$('#works_show').removeClass('fullscreen').hide();
		$('#works_show img').attr('src', 'resource/images/loader.gif');
	});
});