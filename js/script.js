/*
 * Marchi developments
 * @create date 2019-11-14
 */

function detect_mobile() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        $("#css").attr("href", "css/mobile.css");
        $(".top1").attr("class", "navbar navbar-light fixed-top bg-white");
        planos(0)
    } else {
        $("#css").attr("href", "css/style.css");
        $(".top0").attr("class", "navbar navbar-light bg-white");
    }
}

const go = (elem) => {
    window.scroll({
        top: document
            .querySelector(elem)
            .offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}


var page0 = "";
var page1 = "";
var page2 = "";
var page3 = "";

function clientes() {
    for (var i = 0; i <= 187; i++) {
        prefix = i < 10 ? '00' : i < 100 ? "0" : "";
        if (i < 56) {
            page0 += "<img src='img/clientes/" + prefix + i + ".svg' class='marcas'>";
        } else if (i < 112) {
            page1 += "<img src='img/clientes/" + prefix + i + ".svg' class='marcas'>";
        } else if (i < 168) {
            page2 +=  "<img src='img/clientes/" + prefix + i + ".svg' class='marcas'>";
        } else {
            page3 += "<img src='img/clientes/" + prefix + i + ".svg' class='marcas'>";
        }
    }
}

function marcas(pg) {
    if (pg == 0) {
        document.getElementById("marcas").innerHTML = page0;
        $("#back6").attr("src", "img/arrow1.svg");
        $("#back6").attr("class", "btn_left1");
        $("#back6").removeAttr("onclick");
        $("#next6").attr("src", "img/arrow2.svg");
        $("#next6").attr("class", "btn_right0 ativo");
        $("#next6").attr("onclick", "marcas(1)");
    } else if (pg == 1) {
        document.getElementById("marcas").innerHTML = page1;
        $("#back6").attr("src", "img/arrow3.svg");
        $("#back6").attr("class", "btn_left1 ativo");
        $("#back6").attr("onclick", "marcas(0)");
        $("#next6").attr("src", "img/arrow2.svg");
        $("#next6").attr("class", "btn_right0 ativo");
        $("#next6").attr("onclick", "marcas(2)");
    } else {
        document.getElementById("marcas").innerHTML = page2;
        $("#next6").attr("src", "img/arrow1.svg");
        $("#next6").attr("class", "btn_right0 rotate");
        $("#back6").attr("onclick", "marcas(1)");
        $("#next6").removeAttr("onclick");
    }

}

function planos(pg) {
    if (pg == 0) {
        $("#essencial").attr("style", "display: show");
        $("#avancado").attr("style", "display: none");
        $("#profissional").attr("style", "display: none");
        $("#back7").attr("src", "img/arrow1.svg");
        $("#back7").attr("class", "btn_left1");
        $("#back7").removeAttr("onclick");
        $("#next7").attr("src", "img/arrow2.svg");
        $("#next7").attr("class", "btn_right0 ativo");
        $("#next7").attr("onclick", "planos(1)");
    } else if (pg == 1) {
        $("#essencial").attr("style", "display: none");
        $("#avancado").attr("style", "display: show");
        $("#profissional").attr("style", "display: none");
        $("#back7").attr("src", "img/arrow3.svg");
        $("#back7").attr("class", "btn_left1 ativo");
        $("#back7").attr("onclick", "planos(0)");
        $("#next7").attr("src", "img/arrow2.svg");
        $("#next7").attr("class", "btn_right0 ativo");
        $("#next7").attr("onclick", "planos(2)");
    } else {
        $("#essencial").attr("style", "display: none");
        $("#avancado").attr("style", "display: none");
        $("#profissional").attr("style", "display: show");
        $("#next7").attr("src", "img/arrow1.svg");
        $("#next7").attr("class", "btn_right0 rotate");
        $("#back7").attr("onclick", "planos(1)");
        $("#next7").removeAttr("onclick");
    }
}

$(document).ready(function () {

    detect_mobile();

    clientes();

    marcas(0);

    $('.collapse>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $("#next0").click(function () {
        $(".quem").hide()
        $(".missao").show()
    });

    $("#back0").click(function () {
        $(".missao").hide()
        $(".quem").show()
    });

    $("#next1").click(function () {
        $(".missao").hide()
        $(".visao").show()
    });

    $("#back1").click(function () {
        $(".visao").hide()
        $(".missao").show()
    });

    $("#next2").click(function () {
        $(".visao").hide()
        $(".valores").show()
    });

    $("#back2").click(function () {
        $(".valores").hide()
        $(".visao").show()
    });

    $("#next3").click(function () {
        $(".whatsapp").hide()
        $(".sua_marca").show()
    });

    $("#back3").click(function () {
        $(".sua_marca").hide()
        $(".whatsapp").show()
    });

    $("#next4").click(function () {
        $(".sua_marca").hide()
        $(".instagram").show()
    });

    $("#back4").click(function () {
        $(".instagram").hide()
        $(".sua_marca").show()
    });

    $("#next5").click(function () {
        $(".instagram").hide()
        $(".appmoda").show()
    });

    $("#back5").click(function () {
        $(".appmoda").hide()
        $(".instagram").show()
    });

    $('#telefone').mask('(00) 00000-000#');
    $('#telefone2').mask('(00) 00000-000#');

    $('body').on('focus', '.numero', function () {
        var maskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            options = {
                onKeyPress: function (val, e, field, options) {
                    field.mask(maskBehavior.apply({}, arguments), options);

                    if (field[0].value.length >= 14) {
                        var val = field[0].value.replace(/\D/g, '');
                        if (/\d\d(\d)\1{7,8}/.test(val)) {
                            field[0].value = '';
                            alert('Telefone Invalido');
                        }
                    }
                }
            };
        $(this).mask(maskBehavior, options);
    });

    function myFunction() {
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year").innerHTML = n;
    };
    myFunction();
});