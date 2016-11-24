/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

jQuery(document).ready(function(){
	var navfilteroptions = $( "#wnavtopfilter .options" );
	jQuery('#wnavtopfilter a.toggle').click(function(e){
		e.preventDefault();
		if (navfilteroptions.is( ":visible" )){
			navfilteroptions.hide();
			jQuery(this).removeClass('open');
		} else {
			navfilteroptions.show();
			jQuery(this).addClass('open');
		}
	});
	var navfilteroptions = $( "#wlanguagefilter .options" );
	jQuery('#wlanguagefilter a.toggle').click(function(e){
		e.preventDefault();
		if (navfilteroptions.is( ":visible" )){
			navfilteroptions.hide();
			jQuery(this).removeClass('open');
		} else {
			navfilteroptions.show();
			jQuery(this).addClass('open');
		}
	});
	$(".widget_popular_and_tags .wtabheader a").click(function(){
		var rel = $(this).attr('rel');

		$(".widget_popular_and_tags .wtabheader a").removeClass('active');
		$(this).addClass('active');

		$(".widget_popular_and_tags .wtabcontent").hide();
		$(".widget_popular_and_tags ." + rel + "").show();
	});
	
	$(".widget_social_media a.fb").click(function(){popwin($(this));return false;});
	$(".widget_social_media a.tw").click(function(){popwin($(this));return false;});
	$(".widget_social_media a.in").click(function(){popwin($(this));return false;});
	$(".widget_social_media a.gp").click(function(){popwin($(this));return false;});
	
	function popwin($obj){
		var url = $obj.attr('href');
		window.open(url,'Follow Us','width=800,height=600,scrollbars=1,toolbar=1,status=1,resizable=1');
		return false;
	}
	
	
	$(".widget_archive_list .archive_text").click(function(){
		var archiveObj = $(".widget_archive_list .archive_list_wrap");
		if (archiveObj.is(":visible")){
			archiveObj.hide();
		}
		else{
			archiveObj.show();
		}
	});
	$(".widget_archive_list .archive_list_wrap").mouseleave(function(){
		$(this).hide();
	});
	$(".widget_archive_list .archive_list_wrap li").click(function(){
		window.location.href = $(this).find('a').attr('href');
	});
    var authormore = $(".wauthorlistingboxsingle .thumbnail a");
    var authormoredesc = $(".wauthorlistingboxsingle a.more_info");
    var aObj = $(".wauthorlistingboxsingle a.more_info");
    
    if (authormore.length>0){
        authormore.click(function(){
            var authordesc = authormore.parent().parent().find("div.smore_info");
            var authordescmore = authormore.parent().parent().find("a.more_info");
            if (authordesc.is(":visible")){
                authordesc.slideUp("fast");
                aObj.text($('#more-label').attr('class'));
            }
            else {
                authordesc.slideDown("fast");
                aObj.text($('#less-label').attr('class'));
            }
        });
    }

    if (authormoredesc.length>0){
        authormoredesc.click(function(){
            var authordesc = authormoredesc.parent().find("div.smore_info");
            if (authordesc.is(":visible")){
                authordesc.slideUp("fast");
                aObj.text($('#more-label').attr('class'));
            }
            else{
                authordesc.slideDown("fast");
                aObj.text($('#less-label').attr('class'));
            }
        });
    }
    
    $('.pageletters a').click(function () {
    	$('.pageletters a').removeClass('curr');
    	$(this).addClass('curr');
    });

});

jQuery(function() 
{
	
if ( $(window).width() > 1130) {    

    var $sidebar   = $(".wlistingsinglesocialmedia,.table-of-contents"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 30;
	var w_w=$window.width();
	var w_h=$window.height();
	var sb_h=$sidebar.height();
	var f_s=1150;
	$window.resize(function(){
		w_w=$window.width();
		w_h=$window.height();
		sb_h=$sidebar.height();
		checkScroll();
	});
	function checkScroll()
	{
		if (offset != undefined) {
	        if ($window.scrollTop() > offset.top && w_w>f_s) 
	        {
	            $sidebar.css("margin-top",$window.scrollTop() - offset.top + topPadding);
	        }
	        else 
	        {
	            $sidebar.stop().animate({
	                marginTop: 0
	        	});
	        }
        }
	}
    $window.scroll(checkScroll);
	

}
/*
if ( $(window).width() < 768) {
    $('.wlistingsinglesocialmedia').insertAfter('.wlistingsingletext');
}

$(window).resize(function(){ 
if ( $(window).width() < 768) { 
$('.wlistingsinglesocialmedia').insertAfter('.wlistingsingletext');
}
else { 
$('.wlistingsinglesocialmedia').insertAfter('.wlistingsingleheader');
}
});
*/
$('.post_tags .label').click(function(){ $('.post_tags .tags').fadeToggle(); });

    $('.table-of-contents').mCustomScrollbar();
    $('input, textarea').placeholder();

	$('.share-article-via-email').click(function(e) {
		e.preventDefault();
		$('#share-overlay').fadeIn();
	});
	$('.closewin').click(function(e) {
		e.preventDefault();
		$('#share-overlay').fadeOut();
	});

    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([A-Za-z0-9]{2,6}(?:\.[A-Za-z0-9]]{2})?)$/i;
        return re.test(email);
    }

    function validateMessage(msg) {
        var reg =  /^[A-Za-z0-9!@#$%^&*() _'+\-"\[\]]{1,800}$/;
        return reg.test(msg);
    }

    $("#share-mail-form").submit(function(e) {
    	e.preventDefault();
    	$('p.err').hide(); $('p.success').hide();
    	var msgError = "<br/><strong>Required fields:</strong><br/>";
    	var recipient = $("#your-recipient").val();
    	var name = $("#your-name").val();
    	var email = $("#your-email").val();
    	var plink = $("#frm-permalink").val();
    	var excerpt = $("#frm-excerpt").val();
        var postTitle = $("#frm-title").val();
        var msg = $("#your-msg").val();
    	var formerr = msgError;
    	var err = 0;
    	if (recipient == '') {formerr+=$("#frm-no-recipient").val()+"<br/>";err++;}
    	if (name == '') {formerr+=$("#frm-no-name").val()+"<br/>";err++;}
    	if (email == '') {formerr+=$("#frm-no-email").val()+"<br/>";err++; }

        if(recipient != '') if (validateEmail(recipient) == false) {formerr+=$("#frm-no-recipient").val()+"<br/>";err++;}
        if(email != '') if (validateEmail(email) == false) {formerr+=$("#frm-no-email").val();err++; }
        if(msg != '') if (validateMessage(msg) == false) {formerr+=$("#frm-no-msg").val()+"<br/>";err++;}


        if (err > 0) {
            $('p.err').fadeIn().html(formerr);
        } else {
            var url = '/sendMail.php';
            load();
            $.post(url,{recipient:recipient,name:name,email:email,plink:plink,excerpt:excerpt,msg:msg, postTitle:postTitle}, function (response) {
                if (response == 'ok') {

                    $('#share-mail-form').slideUp(function(){
                        $('#share-mail-form').remove();
                        $('div#emailSuccess').slideDown();
                    });

                }
            });
        }
        return false;
    });
});

function mailMe(sDom, sUser){
	return("mail"+"to:"+sUser+"@"+sDom.replace(/%23/g,"."));
}
function backToTop() {
	jQuery(window).scrollTop(0);
}
function load() {
	var xhr;

    if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0", 
                        "MSXML2.XmlHttp.4.0",
                        "MSXML2.XmlHttp.3.0", 
                        "MSXML2.XmlHttp.2.0",
                        "Microsoft.XmlHttp"]

		for(var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch(e){}
		} // end for
	}

    xhr.onreadystatechange = ensureReadiness;
    function ensureReadiness() {
        if(xhr.readyState < 4) {
            return;
        }
         
        if(xhr.status !== 200) {
            return;
        }

        // all is well  
        if(xhr.readyState === 4) {
            callback(xhr);
        }           
    }
}