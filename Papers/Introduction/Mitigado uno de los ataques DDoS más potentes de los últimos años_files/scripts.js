var didScroll;var lastScrollTop=navbarHeight=0;var delta=5;var winHeight=$(window).height();var ajaxurl=$('#ajaxurl').val()+'/wp-admin/admin-ajax.php';$(document).click(function(e){var targetbox=$('.buscar');if(!targetbox.is(e.target)&&targetbox.has(e.target).length===0){targetbox.removeClass('abierto');}});$(document).ready(function(){$("#botonmasposts").hover(function(){$(this).parent().find('#cargarmasposts').addClass('hoverajax');},function(){$(this).parent().find('#cargarmasposts').removeClass('hoverajax');});checkAceptaCookies();$('.search input').focus(function(){$('.buscar').addClass('abierto');});var years=$('.year');if(years.length){$('.year').click(function(e){years.removeClass('selected');$(this).addClass('selected');$('.meses').hide();$('.content-'+$(this).html()).show();});}
checkStickyEspecial();readLogOut();setPopUps();});function loadAjaxMasArticulos(){var paged=parseInt($('#paged').val())+1;$('#paged').val(paged);$('#cargarmasposts').addClass('enaccion');$.ajax({type:"POST",url:ajaxurl,data:"action=ajax_masarticulos&paged="+paged+"&norepetir="+$('#norepetir').val()+"&cat="+$('#cat').val(),dataType:"html",success:function(data){$("#excesivo").append(data);$('#cargarmasposts').removeClass('enaccion');$('html,body').animate({scrollTop:$("#paged"+paged+" .post").offset().top},'slow');var stateObj={page:paged};history.pushState(stateObj,'/page/'+paged,'/page/'+paged);ga('send','event','ajax_masarticulos','home',window.location.href);}});}
function loadAjaxMasPosts(action,div){var paged=parseInt($('#paged').val())+1;$('#paged').val(paged);$('#cargarmasposts').addClass('enaccion');var category=$('.activa').data('slug');if(category){category="&category="+category;}else{category="";}
$.ajax({type:"POST",url:ajaxurl,data:"action="+action+"&paged="+paged+category,dataType:"html",success:function(data){if(data){$("."+div).append(data);$('#cargarmasposts').removeClass('enaccion');$('html, body').stop().animate({scrollTop:$(".botonhub").offset().top});ga('send','event',action,div,window.location.href);}else{$('.wrap.extremo').remove();}}});}
function checkAceptaCookies(){var aceptaCookies=store("aceptaCookies");if(!aceptaCookies){var cukis=$('.cookies');cukis.slideDown().find('.closeCookies').click(function(){cukis.slideUp();});}
store("aceptaCookies",1);}
function getParam(param){var url=window.location.href.slice(window.location.href.indexOf('?')+ 1).split('&');for(var i=0;i<url.length;i++){var params=url[i].split("=");if(params[0]==param)
return params[1];}
return false;}
function putMessage(txt){$(".header-secciones").append("<div class='mensaje'>"+txt+"</div>");setTimeout(function(){$('.mensaje').slideUp('slow');},3000);}
function readLogOut(){if(getParam('sesion')=='cerrada'){putMessage("Has cerrado sesión correctamente");}else if(getParam('sesion')=='abierta'){putMessage("Has iniciado sesión correctamente");}else if(getParam('userpass')=='incorrecto'){putMessage("Usuario o contraseña incorrectos");}else if(getParam('password')=='reset'){putMessage("Acabamos de enviarte el link para restaurar tu contraseña. Por favor, revisa tu email");}else if(getParam('password')=='resetok'){putMessage("Tu contraseña ha sido restaurada. Por favor, inicia sesión");}}
function setPopUps(){initPopUps('triggerPopup','popup-noPublicidad');initPopUps('loginPopup','popup--register');}
function initPopUps(cclick,cshow){$('.'+cclick).click(function(){$('.'+cshow).fadeIn();$(document).bind('keydown',function(e){if(e.which==27){$('.'+cshow).fadeOut();if(cclick=='triggerPopup'){trackInGA('ocultar publicidad','cerrar');}}});$('.btn--close').click(function(){$('.'+cshow).fadeOut();});if(cclick=='loginPopup'){bodyCargando("loginnormal");$('.recordar').click(function(event){event.preventDefault();$('#recordarpass').slideToggle();$('#loginnormal').slideToggle();bodyCargando("recordarpass");});}else{trackInGA('ocultar publicidad','abrir aviso');}});}
function bodyCargando(formulario){var $form=$('#'+formulario);$form.submit(function(event){event.preventDefault();$('body').addClass('cargando');$form.get(0).submit();});}
$(window).scroll(function(event){didScroll=true;});var barraup=setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},245);function hasScrolled(){var st=$(this).scrollTop();var resta=Math.abs(lastScrollTop- st);if(Math.abs(lastScrollTop- st)<=delta)
return;var clase='nav-up';var elemento='#hs';var body=$("body");var catpat=$(".patrocinada");var banner=$(".banner");if(body.hasClass("single")&&!body.hasClass("single-patrocinado")&&banner.length&&!catpat.length){clase='slidedown';elemento=".avisoheader";}
if(st>lastScrollTop&&st>55){$(elemento).addClass(clase);}else{if(st+ winHeight<$(document).height()){$(elemento).removeClass(clase);}}
lastScrollTop=st;}
function trackInGA(category,action){ga('send','event',category,action,window.location.href);}
function resizeStickyEspecial(especial,background){background=background.replace('url("','').replace('")','');var bg=new Image;bg.src=background;var newpos=(((bg.height*$(window).width())/1920)-600)/2;especial.css('background-position',"center -"+ newpos+"px");}
function checkStickyEspecial(){var especial=$('.home .especial');if(especial.length){var background=especial.css('background-image');if(background!='none'){$(window).resize(function(){resizeStickyEspecial(especial,background);});resizeStickyEspecial(especial,background);}}}
var month=new Array();month[0]="Enero";month[1]="Febrero";month[2]="Marzo";month[3]="Abril";month[4]="Mayo";month[5]="Junio";month[6]="Julio";month[7]="Agosto";month[8]="Septiembre";month[9]="Octubre";month[10]="Noviembre";month[11]="Diciembre";