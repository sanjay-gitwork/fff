(function($) {
    'use strict';
    let active = '70';
    let time = '60';
    let late = '10';
    let total = '200'; // let num = '200';
   
    ;

    $('.active-tasks').rProgressbar({
        
        percentage: active,
        fillBackgroundColor: '#39B54A',

        // value: num
    });
    $('.on-time-tasks').rProgressbar({
        percentage: time,
        fillBackgroundColor: '#FCAB10'
    });



    $('.running-late-tasks').rProgressbar({
        percentage: late,
        fillBackgroundColor: '#F8333C'
    });



    $('.total-tasks').rProgressbar({
        percentage: total,
        fillBackgroundColor: '#1AA2E5'
    });











})(jQuery);