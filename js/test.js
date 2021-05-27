//返回頂端
function goTop() {
    $("html,body").animate({
        scrollTop: 0
    }, 500)
}

//回上一頁
function goBack() {
    window.history.back();
}

//向下捲到錨點
function scrollToAnchor(id) {
    let Anchor = $("div[id='" + id + "']");
    $('html,body').animate({ scrollTop: Anchor.offset().top }, 'slow');
}

// IOS SWITCH
function SwitchCheck(a, e) {
    let input = $(a).find('input[type=checkbox]');
    input.prop('checked', !input.prop('checked'));
    e.stopPropagation();
}

//讀取圖片
function readURL(input, elem) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            $(elem).find('a').attr('href', e.target.result),
            $(elem).find('img').attr('src', e.target.result),
            $(elem).show();
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

//判斷特定URL參數是否存在
function findParams(url, field){
    //console.log(url);
    if(url.indexOf(field) != -1)
    return true;
}

//移除所有URL參數
function removeAllParams() {
    let url = window.location.href;
    window.location = url.split('?')[0];
}

//移除特定URL參數
function removeParams(sParam) {
    if(sParam){
        let url = window.location.href.split('?')[0] + '?';
        let sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i=0; i<sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] != sParam) {
                url = url + sParameterName[0] + '=' + sParameterName[1] + '&'
            }
        }
        return url.substring(0, url.length - 1);
    }
}

//前往指定的網址
function goURL(newUrl) {
    window.location = newUrl;
}

//開啟對話框
var openDialogue = (a, b) => {
    $("body").addClass("noscroll");
    $(a).removeClass("hidden");
    $(b).addClass("show").removeClass("hide");
}

//關閉對話框
var removeDialogue = (a, b) => {
    $("body").addClass("noscroll");
    $(b).addClass("hide").removeClass("show");
    setTimeout(function() {
        $(a).remove();
    }, 600);
}

//隱藏對話框
var closeDialogue = (a, b) => {
    $("body").removeClass("noscroll");
    $(b).addClass("hide").removeClass("show");
    setTimeout(function() {
        $(a).addClass("hidden");
        //移除URL參數
        let url = window.location.href;
        if(findParams(url, 'sysmsg')){
            window.location = removeParams('sysmsg');
        }
        if(findParams(url, 'sysmsg2')){
            window.location = removeParams('sysmsg2');
        }
    }, 600);
}

//下拉選單變色
function SpexialSelect(t, e) {
    let val = $(t).val();
    val == 'N' ? (
        $(t).addClass('spexial')
    ) : (
        $(t).removeClass('spexial')
    );
    if (e) { e.stopPropagation(); }
}

function HSSelect(a) {
    $(a).each(function(e) {
        SpexialSelect(this, event);
    });
    $(a).on('change', function(e) {
        SpexialSelect(this, event);
    });
}