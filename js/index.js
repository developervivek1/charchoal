function initIndexJs(){
 // alert("barba init index");
  $('#fullpage').css("visibility","hidden");
$.fn.fullpage.destroy();
 $('#fullpage').fullpage({
        css3: true,
        easing: 'easeIn',
easingcss3: 'cubic-bezier(.42,1,.58,1)'
    });
$('#fullpage').css("visibility","visible");
// initilation all classes
	var menuIsOpen=false,
		$menu=$(".menu"),
		$menuItem=$(".menu-item"),
		$menuItem1=$(".menu-item1"),
		$menuBg=$(".menu-bg"),
		$menuToggle=$(".menu-toggle"),

		menuWidth=1954,
		menuItemOffset=150,
		menuBgSkew=0,
		timeScale={v:1},
		delaySpeed = 0.3;
	;
	




	TweenMax.globalTimeScale(timeScale.v);
	if($(".pageSeq_volant").val()!=null && $(".pageSeq").val()!='undefined'){
		//alert("volant");


		

	}

	if($(".pageSeq_nspace").val()!=null && $(".pageSeq").val()!='undefined'){
		// alert("nspace");
	}
	// inner page product page animations
	/*if($(".pageSeq").val()!=null && $(".pageSeq").val()!='undefined'){
		
		var tl = new TimelineLite();
			tl.set(".icon-section", {visibility:"visible"})
			.from(".icon-section", 0.5, {left:100, autoAlpha:0})
			.from(".preHeading", 0.5, {left:100, autoAlpha:0}) // autoAlpha handles both css properties visibility and opacity.
			.from(".mainHeading", 0.5, {left:100, autoAlpha:0}, "+=0.25") //add tween 0.25 seconds before previous tween ends
			.from(".description", 0.5, {left:100, autoAlpha:0}, "feature");

			

			$("#play").click(function() {
				//play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
				//if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

				if(tl.progress() != 1){
					//carl just changed this again
					tl.play();
				} else {
					tl.restart();
				}
			});

			$("#pause").click(function() {
				tl.pause();
			});

			$("#reverse").click(function() {
				tl.reverse();
			});

			$("#resume").click(function() {
				tl.resume();
			});

			$("#restart").click(function() {
				tl.restart();
			});
	}
	*/
	// home page product page animations
	if($(".pageSeq_index").val()!=null && $(".pageSeq_index").val()!='undefined'){



	 jQuery( document ).ready(function($) {
        $('.play-btn').click(function(){
          $(".bgvid2").show();
          $(".bgvid2")[0].currentTime = 0; 
          $(".bgvid2")[0].play();
          $(".video-01-box").hide(1000);
          $(".video-02-box").show(1000);
          $(".video-content").hide(1000);
          $(".normal-header").hide(1000);
          $(".menu-toggle").hide(1000);
          $(".video-section").addClass("video-pause");  
          $("video").css("filter", "none");    
        });

        $(".video-02-box").click(function() { 
          $(".bgvid1")[0].currentTime = 0;
          $(".bgvid1")[0].play();
          $(".video-02-box").hide(1000);
          $(".video-01-box").show();
          $(".video-content").show();
          $(".normal-header").show();
          $(".menu-toggle").show();
          $(".video-section").removeClass("video-pause");
          $("video").css("filter", "blur(9px)"); 
        });

//         alert("video initiated")

      });

	
		var tl = new TimelineLite();
			tl.set(".icon-section", {visibility:"visible"})
			.from(".icon-section", 0.5, {scale:1.2, autoAlpha:0})
			.from(".preHeading", 0.5, {left:100, autoAlpha:0}) // autoAlpha handles both css properties visibility and opacity.
			.from(".mainHeading", 0.5, {left:100, autoAlpha:0}, "+=0.25") //add tween 0.25 seconds before previous tween ends
			.from(".description", 0.5, {left:100, autoAlpha:0}, "feature");

			$("#play").click(function() {
				//play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
				//if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

				if(tl.progress() != 1){
					//carl just changed this again
					tl.play();
				} else {
					tl.restart();
				}
			});

			$("#pause").click(function() {
				tl.pause();
			});

			$("#reverse").click(function() {
				tl.reverse();
			});

			$("#resume").click(function() {
				tl.resume();
			});

			$("#restart").click(function() {
				tl.restart();
			});
  	}

	// menubg animation
	TweenMax.set($menuBg,{
		skewX:menuBgSkew
	})
	function setTimescale(v){
		TweenMax.to(timeScale,1,{
			v:v,
			ease:Quad.easeInOut,
			onUpdate:updateTimescale,
			onComplete:updateTimescale
		});
	}
	function updateTimescale(){
		TweenMax.globalTimeScale(timeScale.v);
	}

	// menu open animation
	function openMenu(){
		menuIsOpen=true;
		$menuItem.each(function(i){
      TweenMax.staggerFrom($(this).find("p"), 1, {opacity:0, delay:(delaySpeed * i), ease:Elastic.easeInOut, force3D:true}, 1);
    });
		TweenMax.to($menu,0.5,{
			x:menuWidth,
			force3D:true,
			ease:Back.easeOut,
			easeParams:[0.5,1]
		});
		TweenMax.to($menuBg,0.5,{
			skewX:0,
			force3D:false,
			ease:Back.easeOut,
			easeParams:[0.5,1],
			onComplete:completeHandler
		});
	}
	

	function completeHandler(){
	  $menuItem.each(function(i){
      TweenMax.staggerTo($(this).find(".img-wrapper"), 1 , {opacity:1, delay:(delaySpeed * i), ease:Elastic.easeInOut, force3D:true}, 1);
    });
	}

	// menu close animation 
	function closeMenu(){
		menuIsOpen=false;
		var maxLen = $menuItem.parent().find($menuItem).length;
      $menuItem.each(function(i){
        var tmpdelay = (1*(maxLen-i));
          if(i==maxLen-1){
            TweenMax.staggerTo($(this).find("p"), 0.5 , {opacity:0, delay:(delaySpeed * tmpdelay), ease:Elastic.easeInOut, force3D:true,onComplete:closeCompleteHandler}, 0.5);
          }else{
            TweenMax.staggerTo($(this).find("p"), 0.5 , {opacity:0, delay:(delaySpeed * tmpdelay), ease:Elastic.easeInOut, force3D:true}, 0.5);
          }
      });
	}


	// close menu handler animation
	function closeCompleteHandler(){
	  TweenMax.to($menu,1,{
      x:-100,
      ease:Back.easeOut,
      force3D:false,
      delay:delaySpeed
    });
    TweenMax.set($menuBg,{
      skewX:menuBgSkew,
      force3D:false,
      delay:delaySpeed
    });
	}

	// toggle menu open and close animation
	function toggleMenu(){
		if(menuIsOpen){
			$menuToggle.removeClass('menu-open');
			closeMenu();
		}else{
			$menuToggle.addClass('menu-open');
			openMenu();
		}
	}
	
	// menu toggle animation
	$menuToggle.click(function(){
		toggleMenu();
	});



}


