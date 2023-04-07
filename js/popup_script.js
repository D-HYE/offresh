$('.radio_list_wrap .radio_list .img_box').click(function(){
    let soldOut_check = $(this).closest('.radio_list').hasClass('sold_out');
    let checkde_radio2 = $(this).find('input:radio').is(':checked');
    if(soldOut_check !== true){
        if(checkde_radio2 !== true){
            $(this).closest('.radio_list_wrap').find('.radio_list').removeClass('checked');
            $(this).closest('.radio_list').addClass('checked');

            $(this).closest('.radio_list_wrap').find('.radio_box_wrap').removeClass('checked');
            $(this).find('.radio_box_wrap').addClass('checked');

            $(this).closest('.radio_list_wrap').find('input:radio').attr('checked', false);
            $(this).closest('.radio_list').find('input:radio').attr('checked', true)
        }else{
            $(this).closest('.radio_list_wrap').find('.radio_list').removeClass('checked');
            $(this).closest('.radio_list_wrap').find('.radio_box_wrap').removeClass('checked');
            $(this).closest('.radio_list_wrap').find('input:radio').attr('checked', false);
        }
    }
});

$('ol .radio_box_wrap').click(function(){
    let checkde_radio1 = $(this).find('input:radio').is(':checked');
    if(checkde_radio1 !== true){
        $(this).parents().find('.radio_box_wrap').removeClass('checked');
        $(this).addClass('checked');
        $(this).parents().find('input:radio').attr('checked', false);
        $(this).find('input:radio').attr('checked', true)
    };
});

$('.privacy_policy_area .check_box_wrap').click(function(){
    let checkde_checkbox1 = $(this).find('input:checkbox').is(':checked');
    if(checkde_checkbox1 !== false){
        $(this).closest('.privacy_policy_area').addClass('open');
    }else{
        $(this).closest('.privacy_policy_area').removeClass('open')
    }
});

$('.privacy_policy_area .agreement_btn').click(function(){
    let has_open = $(this).closest('.privacy_policy_area').hasClass('open')
    if(has_open !== true){
        $(this).closest('.privacy_policy_area').addClass('open');
    }else{
        $(this).closest('.privacy_policy_area').removeClass('open')
    }
});

$('.inquiry_case_list li').click(function(){
    $(this).closest('.inquiry_case_list').find('li').removeClass('on');
    $(this).addClass('on');
});

$('.inquiry_btn_wrap.single_choice li').click(function(){
    $(this).closest('.inquiry_btn_wrap').find('li').removeClass('checked');
    $(this).addClass('checked');
});
$('.inquiry_btn_wrap.multiple_choice li').click(function(){
    $(this).toggleClass('checked');
});

// ------ 서비스 문의, 메인 창
$('#service_inquiry1, #service_inquiry_main2').find('.prev_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry_main1').addClass('on');
});

$('#inquiry_case_btn1').on('click', function () {
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry1').addClass('on');
});
$('#inquiry_case_btn2').on('click', function () {
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry_main2').addClass('on');
});

$('#service_inquiry_main2 .inquiry_case_list li').on('click', function(){
    $('#service_inquiry_main2 .inquiry_case_list li').removeClass('on');
    $(this).addClass('on');
    $('#service_inquiry_main2 .next_btn').attr('disabled', false);
});
$('#service_inquiry_main2 .next_btn').on('click', function(){
    let firstBtn_has = $('#inquiry_case_btn4').hasClass('on');
    let lastBtn_has = $('#inquiry_case_btn5').hasClass('on');
    if(firstBtn_has == true){
        $('.inquiry_popup').removeClass('on');
        $('#service_inquiry2_1').addClass('on');
    }else if(lastBtn_has == true){
        $('.inquiry_popup').removeClass('on');
        $('#service_inquiry4_1').addClass('on');
    }
});


// ---------- 구독 서비스
$('#service_inquiry_main2').nextUntil('#service_inquiry2_4').find('.next_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $(this).closest('.inquiry_popup').next().addClass('on');
});
$('#service_inquiry4_1').prevUntil('#service_inquiry_main2').find('.prev_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $(this).closest('.inquiry_popup').prev().addClass('on');
})


// ----------- 스토어 서비스
$('#service_inquiry4_1 .prev_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry_main2').addClass('on');
})
$('#service_inquiry3').prevUntil('#service_inquiry4_1').find('.prev_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $(this).closest('.inquiry_popup').prev().addClass('on');
})
$('#service_inquiry2_4').nextUntil('#service_inquiry4_2_2').find('.next_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $(this).closest('.inquiry_popup').next().addClass('on');
});

$('#service_inquiry2_4 .next_btn').on('click', function(){
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry3').addClass('on');
})

// confirm
$('.confirm_btn').on('click', function () {
    $('.alert_dim').removeClass('on');
    $('.inquiry_alert_popup').removeClass('on');
    $('html, body').removeClass('hidden');
});

// 정보 수정
$('.edit_btn1').on('click', function () {
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry2_1').addClass('on');
});
$('.edit_btn2').on('click', function () {
    $('.inquiry_popup').removeClass('on');
    $('#service_inquiry4_1').addClass('on');
});


// text_box
$('.input_wrap input').on('focus', function () {
    $(this).closest('.input_wrap').find('.delete_btn').addClass('on');
});
$('.input_wrap input').on('blur', function () {
    $(this).closest('.input_wrap').find('.delete_btn').removeClass('on');
});
$('.input_wrap .delete_btn').on('mousedown', function () {
    $(this).closest('.input_wrap').find('input').val('');
});

//phone_number
$('.phoneNum_area .input_wrap input').on('keyup propertychange change', function () {
    let number_check = /^[0-9]*$/;
    let number_length = $(this).val().length;
    if (!number_check.test(this.value) || number_length !== 11) {
        $(this).closest('.phoneNum_area').find('em').addClass('on');
        $(this).closest('.phoneNum_area').find('.btn').attr('disabled', true);
    } else {
        $(this).closest('.phoneNum_area').find('em').removeClass('on');
        $(this).closest('.phoneNum_area').find('.btn').attr('disabled', false);
    }
})

//code_number
$('.codeNum_area .input_wrap input').on('keyup propertychange', function () {
    $(this).closest('.codeNum_area').find('.btn').attr('disabled', false);
})

$('.codeNum_btn').on('click', function () {
    $('.alert_dim').addClass('on');
    $('#inquiry_alert_popup1').addClass('on');
    $('.codeNum_area').addClass('on');

    let countDown_item = $(this).closest('.popup_content_area').find('.codeNum_area');
    let countDown_val = countDown_item.find('.countDown_area i').text();
    countDown_item.find('.countDown_area').show();
    countDown_item.find('em').removeClass('on');
    countDown_item.find('.complete_btn').removeClass('on');
    countDown_item.find('.check_btn').addClass('on');
    countDown_item.find('.input_wrap input').attr('disabled', false);
    countDown_item.find('.btn').attr('disabled', false);
    countDown_val = 9;

    let countDown_event = setInterval(function () {
        if (countDown_val == 0) {
            clearInterval(countDown_event);
            countDown_item.find('em').removeClass('on');
            countDown_item.find('.code_num_caution1').addClass('on');
            countDown_item.find('.input_wrap input').attr('disabled', true);
            countDown_item.find('.btn').attr('disabled', true);
        }
        countDown_item.find('.countDown_area i').text(countDown_val);
        countDown_val--;
    }, 1000);

    $('.check_btn').on('click', function () {
        let code_check = /^[0-9]*$/;
        let codeNum_val = countDown_item.find('.input_wrap input').val();
        if (code_check.test(codeNum_val) || codeNum_length !== 0) {
            clearInterval(countDown_event);
        }
    })

});

$('.check_btn').on('click', function () {
    let code_check = /^[0-9]*$/;
    let codeNum_val = $(this).closest('.codeNum_area').find('.input_wrap input').val();
    let codeNum_length = codeNum_val.length;

    if (!code_check.test(codeNum_val) || codeNum_length == 0) {
        $(this).closest('.codeNum_area').find('.code_num_caution2').addClass('on');
        $(this).closest('.codeNum_area').find('.btn').attr('disabled', true);
    } else {
        $(this).closest('.codeNum_area').find('em').removeClass('on')
        $(this).closest('.codeNum_area').find('.countDown_area').hide();
        $(this).closest('.codeNum_area').find('.check_btn').removeClass('on');
        $(this).closest('.codeNum_area').find('.complete_btn').addClass('on');
        $(this).closest('.codeNum_area').find('.input_wrap input').attr('disabled', true);

        $('.alert_dim').addClass('on');
        $('#inquiry_alert_popup3').addClass('on');
    }
})

// email
function email_check(email) {
    var regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));
}

$('.email_area .input_wrap input').on('keyup propertychange change', function () {
    var email = $(this).val();
    if (email == '' || email == 'undefined') return;
    if (!email_check(email)) {
        $(this).closest('.email_area').find('em').addClass('on');
        return false;
    } else {
        $(this).closest('.email_area').find('em').removeClass('on');

    }
})

$('.check_box_wrap').on('click', function () {
    let checkbox_checked = $(this).find('input').is(':checked')
    if (checkbox_checked !== false) {
        $(this).closest('.popup_content_area').find('.submit_btn').attr('disabled', false)
    } else {
        $(this).closest('.popup_content_area').find('.submit_btn').attr('disabled', true)
    }
})
$('.submit_btn1').on('click', function () {
    $('.alert_dim').addClass('on');
    $('#inquiry_alert_popup2').addClass('on');
});
$('.submit_btn2').on('click', function () {
    $('.alert_dim').addClass('on');
    $('#inquiry_alert_popup2_1').addClass('on');
});

$('#inquiry_alert_popup2 .confirm_btn').on('click', function () {
    $('.alert_dim').addClass('on');

    $('.inquiry_popup').removeClass('on');
    $('#inquiry_alert_popup2').removeClass('on');
    $('#inquiry_alert_popup4').addClass('on');

});

$('#inquiry_alert_popup2_1 .confirm_btn').on('click', function () {
    $('.alert_dim').addClass('on');

    let option_has = $('#option_select_btn li').eq(0).hasClass('checked');
    if(option_has !== false){
        $('.inquiry_popup').removeClass('on');
        $('#inquiry_alert_popup2').removeClass('on');
        $('#inquiry_alert_popup5_2').addClass('on');
    }else{
        $('.inquiry_popup').removeClass('on');
        $('#inquiry_alert_popup2').removeClass('on');
        $('#inquiry_alert_popup5_1').addClass('on');
    }
});

$('#inquiry_alert_popup2 .cancel_btn, #inquiry_alert_popup2_1 .cancel_btn').on('click', function () {
    $('.alert_dim').removeClass('on');
    $('#inquiry_alert_popup2').removeClass('on');
    $('#inquiry_alert_popup2_1').removeClass('on');
});

$('#inquiry_alert_popup4 .confirm_btn, #inquiry_alert_popup5_1 .confirm_btn, #inquiry_alert_popup5_2 .confirm_btn').on('click', function () {
    location.reload();
});


