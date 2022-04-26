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
    var city = ["Rio Branco", "Maceió", "Macapá", "Manaus", "Salvador", "Fortaleza", "Brasília", "Vitória", "Goiânia", "São Luís", "Cuiabá", "Campo Grande", "Belo Horizonte", "Belém", "João Pessoa", "Curitiba", "Recife", "Teresina", "Rio de Janeiro", "Natal", "Porto Alegre", "Porto Velho", "Boa Vista", "Florianópolis", "São Paulo", "Aracaju", "Palmas", "Guarulhos", "Campinas", "Ribeirão Preto", "Sorocaba", "Niterói", "Petrópolis", "Nova Friburgo", "Uberlândia", "Juiz de Fora", "Joinville", "Blumenau"]
    var hour = Math.floor((Math.random() * 7) + 1).toString();
    var int = Math.floor(Math.random() * 136);
    var nomesArray = ["Maria", "Lúcia", "Helena", "Alice", "Renato", "Davi", "Théo", "Mateus", "Laura", "Manu", "Sofia", "Isabella", "Helô", "Caudia", "Helen", "Luiza", "Júlia", "Maria Luiza", "Cecília", "Giovana", "Duda", "Bia", "Isadora", "Ana", "Maitê", "Clara", "Ísis", "Marina", "Juliano", "Edgard", "Lima", "Leonardo", "Rafaela", "Rebeca", "Gabriela", "Suzana", "Flavia", "Adriana", "Antônio", "Francisco", "Carlos", "Aline", "Lara", "Laís", "Mila", "Yara", "Julia", "Roberta", "Larissa", "Sheila", "Carol", "Sandra", "Yasmin", "Telma", "Tatiane", "Joana", "Marcela", "Vinicius", "Leandro", "Darlan", "Beto", "Melissa", "Raquel", "Samantha", "Michele", "Paula", "Mara", "Bruna", "Cléa", "Milena", "Andréia", "Sílvia", "Carla", "Carolina", "Luís", "Marcos", "Grabriel", "Rafael", "Silvia", "Alana", "Fernanda", "Samara", "Samanta", "Nicole", "Vannessa", "Daniel", "Sebastião", "Marcelo", "Sheyla", "Sara", "Priscila", "Jéssica", "Matheus", "Joaquim", "Samuel", "Henrique", "Guilherme", "Paola", "Maiara", "Victória", "Mayara", "Mirela", "Vera", "Verônica", "Cleide", "Rosa", "Márcia", "Luana", "Abigail", "Rosana", "Meire", "Pedro", "Paulo", "Lucas", "Luiz", "Bruno", "Eduardo", "Benedita", "Rosangela", "Margarida", "Magda", "Madalena", "Vicente", "Cláudio", "Caio", "Wendell", "Luciano", "José", "Ester", "Rute", "Ingrid", "Janaína", "Nívea", "Isaac", "Ismael", "Anderson"];
    return "<b>" + nomesArray[int] + " Colaborou com R$  " + plans[Math.floor(Math.random() * plans.length)] + "</b><br> Em " + city[Math.floor(Math.random() * city.length)] + "! " + "<small>" + hour + " minutos atrás</small>";
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
