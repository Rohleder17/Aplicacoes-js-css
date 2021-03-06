function showSiriusForce() {
    $ZapNutripowerSearch("#wappBox").style.right = "0";
    $ZapNutripowerSearch("#wappBox").style.left = "0";
    document.body.style.overflow = "hidden";
    $ZapNutripowerSearch(".ZapNutripower-background").style.display = "block";
}
function hideSiriusForce() {
    $ZapNutripowerSearch("#wappBox").style.right = "-500px";
    $ZapNutripowerSearch("#wappBox").style.left = "auto";
    document.body.style.overflow = "";
    $ZapNutripowerSearch(".ZapNutripower-background").style.display = "none";
}
function debounce(func, wait=10, immediate=true) {
    let timeout;
    return function() {
        let context = this
          , args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    }
    ;
}
;let scrollPos = 0;
const nav = document.querySelector('.ZapNutripower-btn-show-wapp-stick');
if (nav !== null) {
    function checkPosition() {
        let windowY = window.scrollY;
        if (windowY < scrollPos) {
            nav.classList.add('is-visible');
            nav.classList.remove('is-hidden');
        } else {
            nav.classList.add('is-hidden');
            nav.classList.remove('is-visible');
        }
        scrollPos = windowY;
    }
    window.addEventListener('scroll', debounce(checkPosition));
}
if (window.innerWidth > 700) {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.default-block').hide();
        if (scrollTop > 3300 && scrollTop < 15000) {
            $('#zap-flutuante').fadeIn();
        } else if (scrollTop > 3300) {
            $('#zap-flutuante').fadeOut();
        } else if (scrollTop < 15000) {
            $('#zap-flutuante').fadeOut();
        }
    });
}
if (window.innerWidth < 699) {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.default-block').hide();
        if (scrollTop > 7000 && scrollTop < 25000) {
            $('#zap-flutuante').fadeIn();
        } else if (scrollTop > 7000) {
            $('#zap-flutuante').fadeOut();
        } else if (scrollTop < 25000) {
            $('#zap-flutuante').fadeOut();
        }
    });
}
function createPhrase() {
    var plans = ["10 Reias", "7 Reais", "5 Reais"]
    var city = ["Rio Branco", "Macei??", "Macap??", "Manaus", "Salvador", "Fortaleza", "Bras??lia", "Vit??ria", "Goi??nia", "S??o Lu??s", "Cuiab??", "Campo Grande", "Belo Horizonte", "Bel??m", "Jo??o Pessoa", "Curitiba", "Recife", "Teresina", "Rio de Janeiro", "Natal", "Porto Alegre", "Porto Velho", "Boa Vista", "Florian??polis", "S??o Paulo", "Aracaju", "Palmas", "Guarulhos", "Campinas", "Ribeir??o Preto", "Sorocaba", "Niter??i", "Petr??polis", "Nova Friburgo", "Uberl??ndia", "Juiz de Fora", "Joinville", "Blumenau"]
    var hour = Math.floor((Math.random() * 7) + 1).toString();
    var int = Math.floor(Math.random() * 136);
    var nomesArray = ["Maria", "L??cia", "Helena", "Alice", "Renato", "Davi", "Th??o", "Mateus", "Laura", "Manu", "Sofia", "Isabella", "Hel??", "Caudia", "Helen", "Luiza", "J??lia", "Maria Luiza", "Cec??lia", "Giovana", "Duda", "Bia", "Isadora", "Ana", "Mait??", "Clara", "??sis", "Marina", "Juliano", "Edgard", "Lima", "Leonardo", "Rafaela", "Rebeca", "Gabriela", "Suzana", "Flavia", "Adriana", "Ant??nio", "Francisco", "Carlos", "Aline", "Lara", "La??s", "Mila", "Yara", "Julia", "Roberta", "Larissa", "Sheila", "Carol", "Sandra", "Yasmin", "Telma", "Tatiane", "Joana", "Marcela", "Vinicius", "Leandro", "Darlan", "Beto", "Melissa", "Raquel", "Samantha", "Michele", "Paula", "Mara", "Bruna", "Cl??a", "Milena", "Andr??ia", "S??lvia", "Carla", "Carolina", "Lu??s", "Marcos", "Grabriel", "Rafael", "Silvia", "Alana", "Fernanda", "Samara", "Samanta", "Nicole", "Vannessa", "Daniel", "Sebasti??o", "Marcelo", "Sheyla", "Sara", "Priscila", "J??ssica", "Matheus", "Joaquim", "Samuel", "Henrique", "Guilherme", "Paola", "Maiara", "Vict??ria", "Mayara", "Mirela", "Vera", "Ver??nica", "Cleide", "Rosa", "M??rcia", "Luana", "Abigail", "Rosana", "Meire", "Pedro", "Paulo", "Lucas", "Luiz", "Bruno", "Eduardo", "Benedita", "Rosangela", "Margarida", "Magda", "Madalena", "Vicente", "Cl??udio", "Caio", "Wendell", "Luciano", "Jos??", "Ester", "Rute", "Ingrid", "Jana??na", "N??vea", "Isaac", "Ismael", "Anderson"];
    return "<b>" + nomesArray[int] + " Colaborou com R$  " + plans[Math.floor(Math.random() * plans.length)] + "</b><br> Em " + city[Math.floor(Math.random() * city.length)] + "! " + "<small>" + hour + " minutos atr??s</small>";
}
$(document).ready(function() {
    setTimeout(function() {
        showPopupNotify();
        closePopupNotify();
    }, 100)
    setInterval(function() {
        showPopupNotify();
        closePopupNotify()
    }, 30 * 1000);
    $(".custom-close").click(function() {
        $(".custom-social-proof").hide("slow");
    });
})
function closePopupNotify() {
    setTimeout(function() {
        $(".custom-social-proof").hide("slow");
    }, 10000)
}
function showPopupNotify() {
    $("#PopupNotify").html(createPhrase());
    $(".custom-social-proof").show("slow");
}
