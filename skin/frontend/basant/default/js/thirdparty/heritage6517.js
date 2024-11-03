/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

//SnapScroll
//(function(a,b,c,d){var e,f,g;return g="snapscroll",f={botPadding:40,topPadding:40,scrollSpeed:300,scrollEndSpeed:100},e=function(b,c){return this.container=a(b),this.options=a.extend({},f,c),this.init()},e.prototype={init:function(){return this.snapping()},snapping:function(){var d,e,f,g,h,i,j=this;return d=this.container.children(),h=this.options.scrollSpeed,g=this.options.scrollEndSpeed,f=a(c).scrollTop(),i=null,e=!1,a(b).off("scroll.snapscroll").on("scroll.snapscroll",function(){var k,l,m;if(!e)return l=a(c).scrollTop(),m=j.getDirection(f,l),k=j.getTargetChild(d,m,l),k&&(clearTimeout(i),i=setTimeout(function(){return a(b).scrollTo(k,h),k.siblings(".ss-active").removeClass("ss-active"),k.addClass("ss-active"),e=!0,setTimeout(function(){return f=a(c).scrollTop(),e=!1},h+20)},g)),f=l})},getDirection:function(a,b){return a>b?"up":"down"},getTargetChild:function(c,d,e){var f,g,h,i,j,k;return j=this.options,k=a(b).height(),g=e+k,h=c.first().offset().top,i=c.last().offset().top+k,f=null,h<e+j.topPadding&&c.not(".ss-active").each(function(b){var c,h;h=a(this).offset().top,c=h+a(this).height();if(d==="down"){if(h<g&&c>e)return f=a(this),!1}else if(h<e&&e<c)return f=a(this)}),f}},a.fn[g]=function(b){return this.each(function(){if(!a.data(this,"plugin_"+g))return a.data(this,"plugin_"+g,new e(this,b))})}})(jQuery,window,document);

// =============================================
// Heritage page using Skrollr
// =============================================

jQuery(document).ready(function($){
    
    // Setup variables
    $window = $(window);
    $slide = $('.slide');
    $slide100p = $('.fullHeight');
    $slideTall = $('.doubleHeight');
    $slideShort = $('.shortHeight');
    $titleH = $('#title-height').height();
    $body = $('.body');
    $line = $('.line');
    $menu_offset = 45;
    var windowWidth = $(window).width();
    var doubleSlide_array = [2,6,8,9,12];
    var pause_array =[ {slide : 2, height: 0, menu: 1},
                        {slide : 6, height: 5, menu: 5},
                        {slide : 8, height: 8, menu: 7},
                        {slide : 9, height: 10, menu: 8},
                        {slide : 12, height: 14, menu:11},
                    ];               

    //Define menu offset depending on screensize width 
    if($window.width() >= 1200){
        $menu_offset = 95;
    }else if($window.width() >= 900){
        $menu_offset = 80;
    }else if($window.width() >= 600){
        $menu_offset = 45;
    }
    $negative_menu_offset= Math.abs($menu_offset)* -1;

    //Initiate function
    adjustWindow();
    initNavigation();

    //Only if on non-touch device
    if (!Modernizr.touch){
        pauseAnimation();
    }

    /* Gallery Fancybox */
    var gallery3 =[
            {
				 'href' : './skin/frontend/basant/default/images/heritage/img6.jpg',
				'title' : 'With a small factory setup and a handful of workers, Mr. Vinay Kuma in 1998 laid the foundation for BASANT. <br/>The building blocks of BASANT are deep rooted in the family values that have always put people first, with a legacy that spans over two decades BASANT has always strived for a positive impact on the lives of people associated with its functioning. <br/>Jodhpur, where the factory is situated the lives of people have always been intertwined with the city’s rich history and heritage, the ancient sages, Philosopher throughoutcenturies haveadvocated nature worship and advocated protecting the natural balance, Basant has always had a conscious awareness of the environmental impact and has a program under which over 10,000 trees are plantedevery year.'
            }]; 

    var gallery4 = [
            {
                 //'href' : '/skin/frontend/basant/default/images/heritage/img7.jpg',
                'title' :'BASANTwhich means “spring” ,aims to bring joy to everyone associated with its working . <br/><br/>within the BASANT structure, the workforceis first in order of importance. <br/><br/>To achieve production goals of the finest quality furniture and interiors accessories, BASANT is consistently working to improve the working conditions for the employees, by bringing in automation and tools that take off the burden of hard labor associated with furniture manufacturing. <br/><br/>BASANT has been providing healthy meals to all workers and with in-house factory visits by doctors and regular health checkups, BASANT aims to have a positive impact in the quality of life of each individual working at BASANT. <br/><br/>Education of the employees on safety practices has been an exercise atBASANT from the very beginning and by bringing in new technology BASANT aims to reduce the burden at the labor intensive work of manufacturing furniture <br/><br/>BASANT has invested into the education system to further expand opportunities for the families associated with Basant by providing free education for their kids. BASANT believes Education is the means for improving skills and values that are essential to create a better future.<br/> <br/><br/><br/>'
            }
        ];   
    var gallery5 = [
            {
				'title' :'The BASANT factory is looked at as a tool to impact lives and the environment.The factory has over 70 ultra-modern machines and conveyor belt systems to reduce the labor intensive work of manufacturing. <br/>Glues and lacquers used in the manufacturing are as per EU standards, the entire manufacturing process is laid down and based on highest certifications. <br/>The BASANT factory which has a massive area of 9,35,000 sqft and a 3,80,000 sqft-  built up area has invested extensively in alternate sources of energy, almost 50% of total consumption of power is Solar and with a current production averaging to 80-100containers(40ft hq) per month, BASANT aims to continually work with towards eco-friendly sources of energy. <br/>The plant has a massive Water Harvesting tank (2500000 Ltr. per annum) with an additional 20 KLD (tank capacity) tank, this is used to treat and reuse the waste water in the factory to water over 240 trees and the gardens. <br/>With an industry know-how spanning across 25 years, BASANT has always understood the importance of “constant innovation” in design and manufacturing processes in improving existing industrial systems. <br/>With the vision to reduce workload and improve product quality, BASANT Integrated cutting edge technology and machines at the state of the art factory. <br/>BASANT with its strong design team is always looking ahead of the present trends and allowing room to innovate and create products with dynamic range incorporating techniques of inlay, cladding, veneer, embossing, carving, enameling, mix materials, digital printing on wood/MDF and screen printing on wood/MDF under the same roof, changing the face of interior home furnishing and lighting.<br/><br/><br/>'
}
        ];
    //var gallery7 = [
        //    {
         //       "href" : '/skin/frontend/heals/default/images/heritage/1916/gallery7-1.jpg',
       //         'title' : "Portrait of Cecil Brewer (1871 - 1918). "
         //   },
         //   
           
      //  ]; 
        


    var galleries =  {  galleryBtn3 : gallery3,
                        galleryBtn4 : gallery4,
                        galleryBtn5 : gallery5,
                       
                    };
                                       

    //Initiate Fancybox Gallery on btn clicked
    $('.galleryBtn').click(function() {
        var slide = $(this).attr('id');
        var content_gallery = galleries[slide];

        $('body').addClass('stop-scrolling');
        
        $.fancybox(
            content_gallery
        , {
            'scrolling'         : 'no',
            'padding'           : 0,
            'transitionIn'      : 'none',
            'transitionOut'     : 'none',
            'type'              : 'image',
            'changeFade'        : 0,
            'showNavArrows'     : 'true',
           
            'afterClose'  : function() {
                $("body").removeClass('stop-scrolling');
            }

        });
        
        $('.fancybox-title').html($.fancybox.pos);
    });

    //snapToSlide();
  /* $('.test_again').snapscroll({
        scrollSpeed: 500,
        proximity: 150,
        scrollOptions: {
            'offset':$negative_menu_offset,
            'latency':350,
            'proximity':150

        }
    });*/

/*$(".test_again").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});*/


    $(window).resize(function(){
        //reset height
        adjustWindow(); 
        if($window.width() >= 1200){
            $menu_offset = 95;
        }else if($window.width() >= 900){
            $menu_offset = 80;
        }else if($window.width() >= 600){
            $menu_offset = 45;
        }
        $negative_menu_offset= Math.abs($menu_offset)* -1;
    });
    

    function adjustWindow(){
        
        // Get window size
        winH = $window.height();
        winHsmall = winH - ($('#title-height').height() )+ 20; // + half top padding title

         // Keep minimum height 550
        if(winH <= 650) {
            winH = 750;
            winHsmall = 750;
        } 

        $menu_offset_percent = Math.ceil((45/winH)*100);

        //Define menu offset in % depending on screensize Width and Height
        if($window.width() >= 1200){
            $menu_offset_percent = Math.ceil((95/winH)*100);
        }else if($window.width() >= 900){
            $menu_offset_percent = Math.ceil((80/winH)*100);
        }else if($window.width() >= 600){
            $menu_offset_percent = Math.ceil((45/winH)*100);
        }

        $menu_offset_percent = '-'+ $menu_offset_percent + 'p'; // offset need to be negative from top

        //Check Window size
        if(!Modernizr.touch){

            // Init Skrollr
            var s = skrollr.init({
                forceHeight: false,
                mobileCheck: function() {
                    return false;
                },
                constants: {
                    menuoffset : $menu_offset_percent
                }
            });
        }
        
        
        // Resize our slides
        $slide.height(winHsmall - $menu_offset );
        $slide100p.height(winH - $menu_offset);

        if($window.height() <= 650) {
            $slide100p.height(580 - $menu_offset);
        }
        
        if(!Modernizr.touch){
            //Only double height on size higher than tablet
            $slideTall.height((winHsmall*2) - $menu_offset);
           
            //Resize background and Image wrapper 
            $('.background-wrapper .bcg').height(winH);
            //$('.background-wrapper').height((winHsmall - $menu_offset) * 13);
            $('.image-wrapper').height(winHsmall - $menu_offset).css({'top': $menu_offset+'px'});

            // Refresh Skrollr after resizing our sections
            s.refresh($('.fullHeight'));
        }
       
        //line height
        var line_height = winH - ($titleH + 10 + $('.next-slide').height() + $menu_offset);
        $line.height(line_height);

    }


    /* Variable for pause */
    var offset = $titleH;

    function pauseAnimation(){

        $(window).scroll(function(){

            var scrollDistance = $(window).scrollTop();
            var bottom_offset =  $menu_offset + 20;
            var new_height = 50 - (($menu_offset/winH)*100); //Slide being 200% - content need to be 50% of it

            for(i=0 ; i < pause_array.length ; i++){

                var slideH = (winH + pause_array[i].height * winHsmall) - (pause_array[i].menu * $menu_offset) ; // 2 slides height so 2 * $menu_offset
                var pauseLength = (slideH + winHsmall) +10; //- offset;
                var current_slide_num = pause_array[i].slide;
                var next_slide_num = current_slide_num + 1;
                var cur_slide = '#slide'+current_slide_num;
                var next_slide = '#slide'+next_slide_num;

                $(cur_slide +' .content').css({'height':new_height+'%'});

                //Pause
                if(scrollDistance >= slideH   && scrollDistance < pauseLength){
                    $(cur_slide +' .content').css({'position':'fixed','top':$menu_offset});
                    $(cur_slide +' .image-wrapper').css({'position':'fixed','top':$menu_offset+'px'});
                    $(next_slide + ' .content').css({'position':'fixed','top':winHsmall});
                }
                //Before pause
                if(scrollDistance < slideH ){
                    if(current_slide_num != 9 ){ //exeption slide 9
                        $(cur_slide +' .content').css({'position':'relative','top':'0px'});
                    }
                    $(next_slide + ' .content').css({'position':'relative','top':'-'+winHsmall+'px' });
                }
                //After pause
                if(scrollDistance > (pauseLength-12) ){
                    $(cur_slide +' .content').css({'position':'absolute','top':'inherit','bottom':bottom_offset+'px'});
                    $(cur_slide +' .image-wrapper').css({'position':'absolute','top':'inherit','bottom':'0px'});
                    $(next_slide + ' .content').css({'position':'relative','top':'0px'});
                }   
            }

        });
    }



    function initNavigation(){

        /* ----- NAVIGATION ----- */
        var links = $('.navigation-slider').find('li');
        var slide = $('.slide');
        var button = $('.button-next');
        var mywindow = $(window);
        var htmlbody = $('html,body');


        /* ----- NAVIGATION ----- */
        // Highlight the section currently scrolling DOWN
        slide.waypoint(function(direction) {
            //get data-slide
            dataslide = $(this).attr('data-slide');
     
            if (direction === 'down') {
                $('.navigation-slider li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
            }
        }, { offset: '50%' });

        // Highlight the section currently scrolling UP
        slide.waypoint(function(direction) {
             dataslide = $(this).attr('data-slide');

            if (direction === 'up') {
                $('.navigation-slider li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
            }
        }, {
          offset: function() {
            // This is the calculation that would give you
            // "bottom of element hits middle of window"
            return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
          }
        });

        //Slide to correct slide with easing effect
        function goToByScroll(dataslide) {

            
            var doubleSlide = false;
            for(var i=0; i < doubleSlide_array.length; i++){
                if( doubleSlide_array[i] == dataslide){
                    doubleSlide = true;
                }
            }

            if(doubleSlide && !Modernizr.touch){
                htmlbody.animate({
                    scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - $menu_offset + winHsmall
                }, 3000, 'easeInOutQuint');

            }else{

                htmlbody.animate({
                    scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - $menu_offset
                }, 3000, 'easeInOutQuint');
            } 
        } 
       
         
        //On Navigation click
        links.click(function (e) {
            dataslide = $(this).attr('data-slide');
            links.removeClass('active');
            $(this).addClass('active');
            goToByScroll(dataslide);
        });
     
        //On button next arrow click
        button.click(function (e) {
            e.preventDefault();
            dataslide = $(this).attr('data-slide');
            links.removeClass('active');

            $('.navigation-slider').find('li').each(function(){
                if($(this).attr('data-slide') == dataslide){
                    $(this).addClass('active');
                }
            })
            
            goToByScroll(dataslide);
        });
    
    } 

    


    function snapToSlide(){

     //Slide to correct slide with easing effect
       /* function goToByScroll(dataslide) {
            $('html,body').animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - $menu_offset
            }, 800, 'easeInOutQuint');
        } */

       

        $(window).scroll($.debounce( 250, true, function(){
            $('html,body').unbind();
        }));
        $(window).scroll($.debounce( 250, function(){
            //stop scrolling
            $('#scrollMsg').html('STOP!');

            dataslide = $('.button-slider.active').attr('data-slide');

            goToByScroll(dataslide);
        }));

        /*$(window).scroll(_.debounce(function(){
            $('#scrollMsg').html('SCROLLING!');
             $('html,body').unbind();
        }, 150, { 'leading': true, 'trailing': false }));

        $(window).scroll(_.debounce(function(){
            $('#scrollMsg').html('STOPPED!');
             dataslide = $('.button-slider.active').attr('data-slide');

            goToByScroll(dataslide);
        }, 150));*/

    } 

});
