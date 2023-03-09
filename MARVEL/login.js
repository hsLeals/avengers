function LogIn() {
    for (let i = 0; i < user.length; i++) {
        if ($(".log_page .psw").val() == user[i].password && $(".log_page .un").val() == user[i].username) {
            $(".log_page input").css("outline", "none")
            $(".log_page").hide()
            $(".sign").hide()
        }
        else if ($(".log_page .psw").val() != user[i].password ) 
            {
                $(".log_page .psw").css("outline", "2px solid red")
            }
            if ($(".un").val() != user[i].username) {
                $(".log_page .un").css("outline", "2px solid red")
            }
        
    }
}

function sign() {
    user.push({ username: `${$(".un").val()}`, password: `${$(".psw").val()}` },)
    $(".sign_page input").val("")
    $(".sign_page").hide()
}



$(".log_page input").keypress(function (e) {
    if (e.which == 13) {
        LogIn();
    }
});
$(".sign_page input").keypress(function (e) {
    if (e.which == 13) {
        sign();
    }
});

$(".log_page button").click(function () {
    LogIn();
});


var user = [
    { username: "Leals", password: "Leals" },
]


$(".sign a:nth-child(1)").click(function () {
    $(".sign_page").toggle()
    $(".log_page").hide()
})
$(".sign a:nth-child(2)").click(function () {
    $(".log_page").toggle()
    $(".sign_page").hide()
})



$(".sign_page button").click(function () {
    sign();
});



$("input").keyup(function () {
    if ($("input").val() == "") {
        $(this).css("font-size", "15px")
    } else {
        $(this).css("font-size", "17px")
    }
});

function eye() {
    $(".fa-eye-slash").toggle()
    $(".fa-eye").toggle()
    $(".psw").attr("type", "text")
}
$(".fa-eye-slash").toggle()
$(".fa-eye").click(eye);
$(".fa-eye-slash").click(function () {
    eye()
    $(".psw").attr("type", "password")
});
