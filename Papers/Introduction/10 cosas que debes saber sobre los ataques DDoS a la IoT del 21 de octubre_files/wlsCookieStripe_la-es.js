/**
 * Created by tomas.sebo on 7/13/2015.
 */


(function($) {


    if(!getCookie('_AcceptedCookie')) {
        setCookie('_AcceptedCookie', 'true', 365);
    }

    $.extend({
        getValues: function(url) {
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    checkCookie(data);
                }

            });

        }
    });

    $.getValues('/cookieSettings.php');

    function checkCookie(continent) {
         cookieCheck = getCookie('_AcceptedCookie');

        if(continent && continent['continent'] === 'EU' ) {
            if(cookieCheck && cookieCheck === 'true') {
                $("#wls-cookie-fragment").html('<button id="cookieClose" type="button" class="close" data-dismiss="alert">' +
                '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                '<div id="cookie-notice" class="" role="alert">' +
                '<p>Nuestro sitio usa cookies, y al continuar navegando en él estás accediendo a nuestro uso de las mismas. Para más detalles sobre cookies y cómo administrarlas, visita nuestra ' +
                '<a href="/la-es/politica-de-privacidad/" class="cookie-link">Política de Cookies</a></p></div>');
            }

        }


    }


    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";
    }


    $( document ).ready(function() {
        $('#cookieClose').click(function(){
            $('#wls-cookie-fragment').slideUp();
            setCookie('_AcceptedCookie','false',365);

        })
    });
})( jQuery );





