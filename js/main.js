$(document).ready(function(){



    $('input').focusin(function(){
        $(this).prev('.label').addClass('active');
    });
    $('input').focusout(function(){
        $(this).prev('.label').removeClass('active');
        $('.hint').hide();
    });
    $('#password').on('keydown', function(){
        var pass = $(this).val(),
            errors = [];

        if(pass.length < 7)
        {
            errors.push('Your password must be at least 8 characters')
        }
        if(pass.search(/[!#$%&?@"]/) < 0 )
        {
            errors.push("Your password must contain at least one special char");
        }
        if (pass.search(/[a-z]/i) < 0)
        {
            errors.push("Your password must contain at least one letter");
        }
        if(pass.search(/[0-9]/) < 0 )
        {
            errors.push("Your password must contain at least one digit");
        }
        if(errors.length > 0)
        {
            $('.hint').show();
        }
        else{
            $('.hint').hide();
            $('.btn')
                .removeAttr('disabled')
                .removeClass('disabled');
        }
    })


});