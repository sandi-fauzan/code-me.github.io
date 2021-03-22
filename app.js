// TESTIMONI

var curent = 0;

function getFigures() {
    return document.getElementById("carousel").getElementsByTagName("figure");
}

function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == "visible") {
            figures[i].className = "hidden";
            pointer = i;
            curent = pointer + 1;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = "visible";
}

function movePrev() {
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == "visible") {
            figures[i].className = "hidden";
        }
    }
    if (curent === 0) {
        curent = figures.length - 1;
        figures[curent].className = "visible";
    } else {
        curent = curent - 1;
        figures[curent].className = "visible";
    }
}


// NAVBAR SCROLL
$(function () {
    //fungsi dibawah hanya berjalan untuk semua tag <a> yang diawali (^) dengan hash (#)
    $('a[href^="#"]').on('click', function (e) {

        //masukkan ke dalam kurung kurawalnya $(a[href^])......
        $target = $(this.hash);

        //masukkan baris coding ini dibawahnya $target ......
        $jarak = 100;
        $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $jarak
            },
            1000, //durasi dalam milisekon
            'swing', //efek transisi (opsi : swing / linear)
            function () {
                window.location.hash = target;
            }
        );

    });
});
