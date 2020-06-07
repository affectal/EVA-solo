$(function() {

    var dp1 = document.getElementById('sum1');
    var dp2 = document.getElementById('sum2');
    var v1, Sump;
    document.getElementById('number').oninput = function() {
        v1 = parseInt(this.value);
        Sump = v1 * 4850;
        dp1.innerHTML = Sump;
        dp2.innerHTML = Sump;
    }


    var dropDownBtn = $(".navicon");
    var top = $(".header__inner");
    // var topDropDown = $(".header__inner-drop");

    dropDownBtn.click(function() {
        if (top.hasClass('drop')) {
            top.removeClass('drop');
        } else {
            top.addClass('drop');
        }
        // topDropDown.animate({ width: 'toggle' }, 350);
    });

});