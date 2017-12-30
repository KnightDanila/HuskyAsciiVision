/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//////////////////
currentImg = 0;
var srcImgArray = ['img/rozetka_logo.png','img/rozetka_logo.jpg','img/rozetka.jpg', 'img/rozetka.jpg','img/5.png', 'img/0.png', 'img/1.jpg', 'img/2.gif', 'img/3.png', 'img/4.jpg','img/Lenna.png', 'img/reWalls.com_70838.jpg', 'img/623998.jpg', 'img/ginnytext.png', 'img/wordle-infoaccess_20080725-51.png'];
srcTexture = srcImgArray[currentImg];
colorSelected = 0;
////////////
START = false;

$(function () {
    $("#checkStart").button();
});
$(function () {
    $("#checkStart").click(function ()
    {
        START = $("#checkStart")[0].checked;
    });
});

///////////////// Load Img
LOADIMG = false;
$(function () {
    $("#buttonLoad").button();
});
$(function () {

    $("#buttonLoad").click(function ()
    {
        changeImg();
    });
});
function changeImg() {
    if (currentImg+1 < srcImgArray.length) {
        currentImg++;
        srcTexture = srcImgArray[currentImg];
    }
    else
    {
        currentImg = 0;
        srcTexture = srcImgArray[currentImg];
    }
    reloadImg();
}

///////////////// GRAYSCALE
GRAYSCALE = false;
$(function () {
    $("#checkGrayscale").button();
});
$(function () {
    $("#checkGrayscale").click(function ()
    {
        GRAYSCALE = $("#checkGrayscale")[0].checked;
    });
});
///////////////// GRAYSCALE     MAX
GRAYSCALE_MAX = false;
$(function () {
    $("#checkGrayscaleMax").button();
});
$(function () {
    $("#checkGrayscaleMax").click(function ()
    {
        GRAYSCALE_MAX = $("#checkGrayscaleMax")[0].checked;
    });
});




;(function($) {
    $.fn.textfill = function(options) {
        var fontSize = options.maxFontPixels;
        var ourText = $('span:visible:first', this);
        var maxHeight = $(this).height();
        var maxWidth = $(this).width();
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        return this;
    };
})(jQuery);

$(document).ready(function() {
    $('.jtextfill').textfill({ maxFontPixels: 36 });
});