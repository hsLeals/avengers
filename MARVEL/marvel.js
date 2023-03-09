window.addEventListener("scroll", function () {
    if (window.scrollY >= 230) {
        document.querySelector("#avengers .left").style.animationName = "l"
        document.querySelector("#avengers .right").style.animationName = "r"
    } else {
        document.querySelector("#avengers .left").style.animationName = ""
        document.querySelector("#avengers .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 1000) {
        document.querySelector("#ironman .left").style.animationName = "ll"
        document.querySelector("#ironman .right").style.animationName = "rr"
    } else {
        document.querySelector("#ironman .left").style.animationName = ""
        document.querySelector("#ironman .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 1800) {
        document.querySelector("#captainamerica .left").style.animationName = "l"
        document.querySelector("#captainamerica .right").style.animationName = "r"
    } else {
        document.querySelector("#captainamerica .left").style.animationName = ""
        document.querySelector("#captainamerica .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 2600) {
        document.querySelector("#thor .left").style.animationName = "ll"
        document.querySelector("#thor .right").style.animationName = "rr"
    } else {
        document.querySelector("#thor .left").style.animationName = ""
        document.querySelector("#thor .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 3200) {
        document.querySelector("#hulk .left").style.animationName = "l"
        document.querySelector("#hulk .right").style.animationName = "r"
    } else {
        document.querySelector("#hulk .left").style.animationName = ""
        document.querySelector("#hulk .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 4000) {
        document.querySelector("#blackwidow .left").style.animationName = "ll"
        document.querySelector("#blackwidow .right").style.animationName = "rr"
    } else {
        document.querySelector("#blackwidow .left").style.animationName = ""
        document.querySelector("#blackwidow .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 4800) {
        document.querySelector("#hawkeye .left").style.animationName = "l"
        document.querySelector("#hawkeye .right").style.animationName = "r"
    } else {
        document.querySelector("#hawkeye .left").style.animationName = ""
        document.querySelector("#hawkeye .right").style.animationName = ""
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        $(".top").show()
    } else {
        $(".top").hide()
    }
})



$("#avengers .button").click(function () {
    if (document.querySelector("#avengers").style.height == "900px") {
        $(this).parent().parent().css("height", "1200px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#avengers .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "900px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#avengers .filmposters").css("display", "none")

    }
})

$("#ironman .button").click(function () {
    if (document.querySelector("#ironman").style.height == "750px") {
        $(this).parent().parent().css("height", "1050px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#ironman .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "750px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#ironman .filmposters").css("display", "none")

    }
})

$("#captainamerica .button").click(function () {
    if (document.querySelector("#captainamerica").style.height == "800px") {
        $(this).parent().parent().css("height", "1100px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#captainamerica .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "800px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#captainamerica .filmposters").css("display", "none")

    }
})


$("#thor .button").click(function () {
    if (document.querySelector("#thor").style.height == "800px") {
        $(this).parent().parent().css("height", "1100px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#thor .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "800px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#thor .filmposters").css("display", "none")

    }
})

$("#hulk .button").click(function () {
    if (document.querySelector("#hulk").style.height == "800px") {
        $(this).parent().parent().css("height", "1200px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#hulk .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "800px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#hulk .filmposters").css("display", "none")

    }
})

$("#blackwidow .button").click(function () {
    if (document.querySelector("#blackwidow").style.height == "800px") {
        $(this).parent().parent().css("height", "1200px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#blackwidow .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "800px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#blackwidow .filmposters").css("display", "none")

    }
})


$("#hawkeye .button").click(function () {
    if (document.querySelector("#hawkeye").style.height == "770px") {
        $(this).parent().parent().css("height", "1200px")
        $(this).html(`<span></span>
    <span></span>
    <span></span>
    <span></span> hide films`)
        $("#hawkeye .filmposters").css("display", "flex")
    } else {
        $(this).parent().parent().css("height", "770px")
        $(this).html(`<span></span>
        <span></span>
        <span></span>
        <span></span> show films`)
        $("#hawkeye .filmposters").css("display", "none")

    }
})