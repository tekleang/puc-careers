$(document).ready(function(){


  // counter number
	$.fn.scrollCountNumber = function(options) {
    var eThis = this;
    // for inline selector in html (data-count, data-duration, data-sign)

    // for use obj in jquery
    var setting = {
        sign: '+',//sign in object
        duration: 3000//duration
    };
    options = $.extend(setting, options);
    return this.each(function() {
        var a = 0;
        $(window).scroll(function() {
            var oTop = eThis.offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $("[data-count]").each(function() {
                    var mainDuration = '';
                    var mainSign = '';
                    var $this = $(this),
                        countTo = $this.attr('data-count'),
                        durationData = $this.attr('data-duration'),
                        signData = $this.attr('data-sign');
                    if (typeof durationData !== 'undefined' && durationData != '') {
                        mainDuration = parseInt(durationData);
                    } else {
                        mainDuration = options.duration;
                    }
                    if (typeof signData !== 'undefined' && signData != '') {
                        mainSign = signData;
                    } else {
                        mainSign = options.sign;
                    }

                    $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                        duration: mainDuration,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum) + mainSign);
                        },
                        complete: function() {
                            $this.text(this.countNum + mainSign);
                        }
                    });
                });
                a = 1;
            }
        });
    });
};
$('#counter').scrollCountNumber();
});
