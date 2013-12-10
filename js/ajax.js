$('#login-submit').bind('click',function(){
    var username_val = $('#username').val();
    var pwd_val = $('#pwd').val();
    var csrfmiddlewaretoken_val = $('[name=csrfmiddlewaretoken]').val();
    $.post("/ajax/login/",
        {"username":username_val,
        "password":pwd_val,
        "csrfmiddlewaretoken":csrfmiddlewaretoken_val,
        },
        function(data){
            alert(data);
            }
    );
    return false;
});
