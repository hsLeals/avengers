const films = [
    { id: "avengers", film: "avengers1film.jpg", link: "https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_2" },
    { id: "avengers", film: "avengers2film.jpg", link: "https://www.imdb.com/title/tt2395427/?ref_=fn_al_tt_6" },
    { id: "avengers", film: "avengers3film.jpg", link: "https://www.imdb.com/title/tt4154756/?ref_=fn_al_tt_3" },
    { id: "avengers", film: "avengers4film.jpg", link: "https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1" },
    { id: "ironman", film: "ironman1film.jpg", link: "https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1" },
    { id: "ironman", film: "ironman2film.jpg", link: "https://www.imdb.com/title/tt1228705/?ref_=fn_al_tt_3" },
    { id: "ironman", film: "ironman3film.jpg", link: "https://www.imdb.com/title/tt1300854/?ref_=fn_al_tt_2" },
    { id: "captainamerica", film: "ca1film.jpg", link: "https://www.imdb.com/title/tt0458339/?ref_=fn_al_tt_1" },
    { id: "captainamerica", film: "ca2film.jpg", link: "https://www.imdb.com/title/tt1843866/?ref_=fn_al_tt_3" },
    { id: "captainamerica", film: "ca3film.jpg", link: "https://www.imdb.com/title/tt3498820/?ref_=fn_al_tt_2" },
    { id: "thor", film: "thor1film.jpg", link: "https://www.imdb.com/title/tt0800369/?ref_=fn_al_tt_2" },
    { id: "thor", film: "thor2film.jpg", link: "https://www.imdb.com/title/tt1981115/?ref_=fn_al_tt_4" },
    { id: "thor", film: "thor3film.jpg", link: "https://www.imdb.com/title/tt3501632/?ref_=fn_al_tt_3" },
    { id: "thor", film: "thor4film.jpg", link: "https://www.imdb.com/title/tt10648342/?ref_=fn_al_tt_1" },
    { id: "hulk", film: "hulkfilm.jpg", link: "https://www.imdb.com/title/tt0800080/?ref_=fn_al_tt_3" },
    { id: "blackwidow", film: "blackwidowfilm.jpg", link: "https://www.imdb.com/title/tt3480822/?ref_=fn_al_tt_1" },
    { id: "hawkeye", film: "hawkeyefilm.jpg", link: "https://www.imdb.com/title/tt10160804/?ref_=fn_al_tt_1" }
]

for (let i = 0; i < films.length; i++) {
    $(".movies").append(`<div id="${films[i].id}" class="film">
    <img src="${films[i].film}" alt="">
    <div class="icons">
        <i class="fa-regular fa-heart"></i>
        <a href="${films[i].link}" target="_blank"><i class="fa-solid fa-circle-info"></i></a>
    </div>
</div>`)
}

$(".fa-heart").click(function () {
    $(this).toggleClass("fa-solid red")
    $(this).toggleClass("fa-regular")
    $(this).parent().parent().toggleClass("favorites")
})




$(".ironman").click(function () {
    $(".film").hide()
    document.querySelectorAll("#ironman").forEach(x => {
        x.style.display = "inline-block"
    });
});
$(".captainamerica").click(function () {
    $(".film").hide()
    document.querySelectorAll("#captainamerica").forEach(x => {
        x.style.display = "inline-block"
    });
});
$(".thor").click(function () {
    $(".film").hide()
    document.querySelectorAll("#thor").forEach(x => {
        x.style.display = "inline-block"
    });
});
$(".hulk").click(function () {
    $(".film").hide()
    document.querySelectorAll("#hulk").forEach(x => {
        x.style.display = "inline-block"
    });
});
$(".blackwidow").click(function () {
    $(".film").hide()
    document.querySelectorAll("#blackwidow").forEach(x => {
        x.style.display = "inline-block"
    });
});
$(".hawkeye").click(function () {
    $(".film").hide()
    document.querySelectorAll("#hawkeye").forEach(x => {
        x.style.display = "inline-block"
    });
});

document.querySelector("#filter").addEventListener("change", function () {
    document.querySelectorAll(".film").forEach(x => {
        if (x.getAttribute("id") == document.querySelector("#filter").value) {
            x.style.display = "inline-block"
        } else {
            x.style.display = "none"
        }
        if (x.getAttribute("class") == "film favorites") {
            console.log(x.getAttribute("class"));
            x.style.display = "inline-block"
        }
        if (document.querySelector("#filter").value == "") {

            x.style.display = "inline-block"
        }
    });
})

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        $(".top").show()
    } else {
        $(".top").hide()
    }
})