var names = ["Maria Cecília Campos", "Davi Lucas Novaes", "Maria Eduarda da Luz", "Marcos Vinicius Moreira", "Bianca da Rocha", "Olivia da Luz", "Pedro Lucas Novaes", "Cecília da Paz", "Ana Luiza Pires", "Ana Clara FariasFernandes", "Maria Fernanda Costela", "Vicente da Costa", "Ana Clara Fogaça", "Isabella da Cruz", "Ana Carolina Araújo", "Raquel da Luz", "Ana Júlia Ramos", "Stella da Paz", "Maria Luiza Martins", "Ryan da Rocha", "Maria Sophia Ramos", "Davi Lucca da Luz", "DaviLuiz Teixeira", "Bruno da Rocha", "Luiz Miguel Pires", "Isabel das Neves", "Ana Lívia Correia", "Marcela da Luz", "Vitor Gabriel Lopes", "Davi Lucca Martins", "Isabella da Rosa", "Alícia da Costa", "João Felipe Cavalcanti", "Gustavo Henrique Jesus", "Luiz Gustavo Carvalho", "João Miguel Cavalcanti", "Antônio da Cruz", "Letícia da Mata", "Ana Beatriz Azevedo", "Davi Lucas Barbosa", "Beatriz da Luz", "Miguel da Cruz", "Evelyn da Cunha", "Davi Luiz Azevedo", "Ana Carolina Novaes", "Pedro Henrique Nascimento", "Pedro Henrique da Mata", "João Felipe Vieira", "João Pedro Nogueira", "Luiz Fernando Pereira", "Maria Cecília Ferreira", "João Guilherme Caldeira", "Gustavo da Cruz", "Davi Lucas da Costa", "Marcos Vinicius Lima", "João Felipe Rocha", "Luiz Felipe da Rocha", "Lucas da Rosa", "Luiz Otávio Freitas", "Pedro MiguelAragão", "Pedro Miguel Martins", "Luiz Henrique Peixoto", "Agatha da Cruz", "João Guilherme Araújo", "Carlos Eduardo da Paz", "Ana Clara Barbosa", "Gabriela da Cunha", "Luiz Gustavo Aragão", "Luiz Henrique da Paz", "Luiz Henrique Peixoto", "Ana Carolina da Mota", "Bernardo da Conceição", "João Miguel Campos", "João Gabriel Almeida", "Alícia da Mota", "Ana Júlia Cunha", "Benício da Cruz", "Luiz Miguel Nogueira", "Ana Laura Ferreira", "Luiz Gustavo Ribeiro", "Luiz Gustavo Duarte", "Marcelo da Conceição", "Antônio da Cunha", "Emanuelly da Luz", "Davi Lucas Moreira", "Enzo Gabriel FariasFernandes", "Maria Clara Silva", "Cauê da Costa", "Maria Luiza Costela", "Pedro Lucas FariasFernandes", "Ana CarolinaCunha", "Maria Sophia da Luz", "Davi Lucas Martins", "Davi da Rosa", "Joaquim da Costa", "Vitor Hugo Santos", "Pedro Miguel Rezende", "Cecília da Mata", "Luana da Mata", "Ana Luiza Gomes", "Rafaela da Mata", "Maria Cecília Pires", "Heloísa da Mota", "Ana Julia da Conceição", "Davi Lucas Barbosa", "Maria Cecília Porto", "Vitor Hugo Vieira", "Kamilly daConceição", "Danilo da Costa", "Cauê da Rocha", "Ana Carolina Oliveira", "Lucca da Luz", "Davi Lucca Costela", "Emilly da Paz", "Ana Beatriz Lima", "Cecília da Cunha", "Maria Vitória Alves", "Joaquim da Paz", "Ana Vitória da Conceição", "Luiz Otávio da Cruz", "Isabelly da Conceição", "Ana Vitória Ribeiro", "Mariana da Cunha", "Fernanda da Conceição", "Ana Laura Melo", "Davi Lucca Moraes", "Alana das Neves", "João Felipe Porto", "Luiz Gustavo Moraes", "Lucas Gabriel Martins", "Pedro Lucas Castro", "Lara da Cruz", "Maria Luiza Teixeira", "Maria Eduarda FariasFernandes", "Davi Luiz Dias", "Luiz Miguel Vieira", "João Miguel Freitas", "Vitor Hugo Cunha", "Melissa da Paz", "Enzo Gabriel das Neves", "Ana Lívia Pinto", "Luiz Henrique FariasFernandes", "Kamilly da Costa", "Maria Luiza Nogueira", "Luiz Felipe da Rosa", "Kamilly da Luz", "Luiz Miguel Castro", "Maria Luiza Oliveira", "Marcos Vinicius Jesus", "Maria Sophia Novaes", "Vitor Gabriel da Luz", "Luigi da Luz", "Lucas Gabriel Oliveira", "João Guilherme Gomes", "Juliana da Paz", "Ana Luiza Moreira", "Caroline da Mota", "Gustavo Henrique da Cunha", "Ana Júlia Pinto", "Ana Luiza Dias", "Vitor Hugo Moraes", "Maria Clara Vieira", "Paulo da Mota", "João Gabriel da Mota", "Melissa da Rocha", "Ana Julia Porto", "Luiz Fernando Nogueira", "Ana Lívia Campos", "João Felipe das Neves", "Ana Beatriz da Mota", "Ana Vitória Moraes", "Ana Luiza Azevedo", "Luiz Felipe Lima", "Nathan da Cunha", "João Guilherme da Luz", "Maria Alice da Cunha", "Pedro Henrique Campos", "Giovanna daMota", "Ana Clara Cardoso", "Heitor da Paz", "Maria Vitória Cavalcanti", "Ana Sophia Nascimento", "Luiz Gustavo Freitas", "Bernardo da Rosa", "João Gabriel Viana", "Vitor Gabriel Nunes", "Gustavo Henrique Azevedo", "Pietra da Cruz", "Carlos Eduardo Lima", "Isabelly da Costa", "Fernando da Luz", "Natália da Conceição", "Matheus da Paz", "Marcos Vinicius Moraes", "João Miguel Jesus", "Gabriela da Cunha", "Maria Julia Almeida", "Alice da Luz", "Benjamin da Luz", "Maria Cecília Almeida", "Enzo Gabriel Moreira", "Amanda da Cunha", "Ian da Mata", "Thiago da Mata", "Davi Luiz Duarte", "João Miguel Costela", "Davi Lucas Nunes", "Gustavo Henrique Moura", "Valentina da Rosa", "João Pedro Lima", "Carolina da Rocha", "Renan da Rosa", "João Miguel das Neves", "Luiz Felipe Monteiro", "Ana Clara da Luz", "Pedro Lucas das Neves", "Vinicius da Mata", "Valentina da Cunha", "Diogo da Conceição", "Ana Luiza Azevedo", "Maria Julia Moura", "Pedro Miguel Oliveira", "Luiz Miguel Lima", "Lara da Rocha", "João Pedro Melo", "Lucas Gabriel Cardoso", "Ana Carolina Lopes", "Pedro Miguel Ribeiro", "Mariane da Rosa", "Luiz Felipe FariasFernandes", "Maria Clara Martins", "Ana Laura Freitas", "Marcos Vinicius Viana", "Sophia da Rocha", "Bruna da Rocha", "Davi Luiz Almeida", "Davi Luiz da Costa", "João Vitor daLuz", "Maria Eduarda da Luz", "Luiz Gustavo da Mota", "Ana Carolina Dias", "Thales das Neves", "João Miguel Silveira", "Maria Eduarda Peixoto", "Alice da Mota", "Lucca da Mota", "Maria Cecília Costa", "Noah da Luz", "Juan da Conceição", "Pedro Miguel Pires", "Mirella da Cruz", "Fernando das Neves", "Marcos Vinicius Gomes", "Sarah da Mata", "Pedro Miguel Duarte", "Maria Luiza Nogueira", "Enzo Gabriel Monteiro", "Vitor Hugo Moreira", "Thiago da Luz", "Luiz Henrique Mendes", "Nicolas das Neves", "Danilo da Cunha", "Lorena da Conceição", "Cecília da Paz", "Agatha da Mota", "Milena da Costa", "Ana Beatriz Souza", "Pedro Henrique Freitas", "João Miguel da Mata", "Gabriel da Rosa", "Enzo Gabriel Alves", "Vitor Gabriel Oliveira", "Maria Fernanda Costa", "Marcos Vinicius Carvalho", "Maria Julia das Neves", "Ana Lívia Cavalcanti", "Ana Julia Pereira", "Pietra da Cunha", "João Miguel Porto", "João Guilherme Barbosa", "Brenda da Costa", "Olivia da Costa", "Maria Eduarda Gomes", "Ana Luiza Cardoso,", "Matheus da Costa", "Gustavo Henrique Viana", "Vitor Gabriel Costela", "João Felipe Souza", "Davi Lucca Sales", "Ana Julia Vieira", "Ana Clara Rodrigues", "Luiz Felipe Pires", "João Pedro Almeida", "Gabriela das Neves", "Pedro Miguel da Costa", "Marcela da Mata", "Carlos Eduardo Cardoso,", "Alana da Mata", "Alexia da Mota", "Maria Alice Caldeira", "Nathan da Paz", "Pedro Henrique Gonçalves", "Maria Julia Mendes", "Lorena das Neves", "Maria Vitória Viana", "Thales da Rocha", "Vitor Gabriel da Conceição", "Ana da Paz", "Elisa da Mata", "Enzo Gabriel Caldeira", "Isabelly da Rocha", "João Felipe Mendes", "Maria Vitória da Mata", "Davi Luiz da Costa", "Clarice da Cruz", "Maria Fernanda Correia", "Ana Lívia Cavalcanti", "João da Rocha", "Maria Eduarda Rocha", "João Lucas Moraes", "Davi Lucca Monteiro", "João Vitor Martins", "Raquel da Mata", "João Lucas Lima", "Ana Júlia Novaes", "Ana Lívia Nogueira", "Ana Vitória Silveira", "Pedro da Cunha", "Luiz Fernando da Rosa", "Pedro Miguel Rocha", "Larissa da Paz", "Luiz Miguel Santos", "Luiz Fernando Sales", "Ana Luiza Caldeira", "Maria Fernanda da Rosa", "Vitor HugoMoura", "Gustavo Henrique Alves", "Caio das Neves", "Gabriela da Conceição", "Cecília da Cruz", "João Gabriel Viana", "Ana Lívia Melo", "Luiz Miguel Vieira", "Julia da Costa", "Bernardo da Cruz", "Davi Lucas Moraes", "Ana Vitória Aragão", "João Gabriel Gonçalves", "Carlos Eduardo da Cruz", "Davi Luiz Aragão", "Marcos Vinicius da Rocha", "Maria CecíliaFariasFernandes", "Yuri da Rosa", "Sophia da Cruz", "João Felipe da Luz", "Ana Sophia Porto", "Leandro da Mata", "Maria Vitória Souza", "Kevin da Paz", "Davi Lucca Duarte", "Giovanna das Neves", "Carolina da Mata", "Gustavo Henrique Oliveira", "João Miguel Pires", "Ana da Rocha", "Ana Sophia da Conceição", "Carlos Eduardo FariasFernandes", "Noah da Rosa", "Davi Lucas Costela", "Joaquim da Mota", "Luana da Mata", "Kaique da Cunha", "Isabelly da Rosa", "Ana Carolina Sales", "Pedro Lucas Costela", "Yuri da Conceição", "Ana Sophia Costela", "Vitor da Luz", "Ana Luiza da Rosa", "Maria Cecília Cunha", "Luiz Fernando Porto", "Lucas Gabriel Freitas", "Joana da Paz", "Isabelly da Rocha", "Ana Sophia Cardoso", "Thales da Rocha", "Alexandre da Mata", "Vitor Hugo da Cruz", "Luiz Otávio Vieira", "Davi Lucca Ramos", "Rafael da Cunha", "Bruno da Mata", "Luiz Miguel Pinto", "Maria Clara Cunha", "Lavínia da Conceição", "Isabel das Neves", "Ana Julia Monteiro", "Luiz Miguel Souza", "Luiz Felipe Ferreira", "Maria Clara Correia", "Diego da Cruz", "Ana Julia Lima", "Ana Julia da Conceição", "Luiz Otávio Barros", "João Gabriel da Cunha", "Arthur da Luz", "Luiz Felipe Lopes", "Ana Laura Costela", "Luiz Fernando Castro", "Pedro Henrique Viana", "Davi Luiz da Costa", "Leonardo da Conceição", "Otávio da Conceição", "Isabel da Mota", "Bernardo da Cruz", "Marina da Conceição", "João Felipe das Neves", "Maria Vitória Freitas", "Maria Cecília Nunes", "Augusto da Luz", "Vitor Gabriel Caldeira", "Maria Luiza da Mata", "Carlos Eduardo Cunha", "Maria Cecília Cardoso,", "Pedro Henrique Pereira", "Ian da Paz", "Luiza da Conceição", "Kamilly da Mota", "Alícia da Costa", "Felipe da Cunha", "Ana Beatriz Carvalho", "Ana Carolina Costa", "Rodrigo da Costa", "Luiz Fernando da Rosa", "Letícia da Mota", "João Vitor Almeida", "João Miguel Correia", "Thales da Cunha", "Breno da Luz", "Davi Luiz Pires", "Lucas Gabriel Nogueira", "Maria Sophia Costa", "Danilo da Paz", "Maria Eduarda da Costa", "Ana Júlia Barbosa", "Lucas Gabriel Moura", "Vitória da Cunha", "Joaquim da Mata", "Maria da Rocha", "João Miguel FariasFernandes", "Bryan da Conceição", "Ana Clara Monteiro", "Marcelo das Neves", "Maria Cecília Rezende", "Maria Julia Rodrigues", "Luiz Miguel Ferreira", "Pedro Henrique da Rocha", "Maria da Costa", "João Gabriel Carvalho", "Davi Lucas Pinto", "Luiz Otávio Fogaça", "Noah da Paz", "Beatriz da Paz", "Ana Clara da Rocha", "Maria Sophia Rezende", "Valentina da Paz", "Milena da Rocha", "Maria Clara Castro", "Luiz Miguel Lopes", "Luiza da Conceição", "Ana Laura Rodrigues", "Davi Lucas Cardoso", "Ana Sophia Cardoso,", "João Guilherme FariasFernandes", "Joaquim da Mota", "Davi Lucca Moraes", "Davi Lucca Ferreira", "Paulo da Conceição", "Pedro Lucas Ribeiro", "Luigi da Mota", "João Felipe Lopes", "Breno da Cunha", "Clara da Mota", "Juan da Rosa", "Laís da Rocha", "Marina das Neves", "Julia das Neves", "Maria Vitória Rodrigues", "Maria Sophia Lima", "Eduarda da Cruz", "Lucas Gabriel Ribeiro", "Emanuelly da Mata", "João Lucas Nunes", "Clarice da Cunha", "Brenda da Rosa", "Davi Lucca Costela", "João Gabriel da Cruz", "Ana Vitória Ferreira", "Leonardo da Costa", "Gustavo Henrique Aragão", "Maria Julia Costela", "Pedro Miguel Lima", "Ana Luiza Duarte", "Ana Julia Viana", "Cauê da Mota", "Guilherme daConceição", "Maria Julia FariasFernandes", "Antônio da Cruz", "Ana Laura Nogueira", "Maria Alice Novaes", "João PedroCardoso,", "Pedro Lucas da Rocha", "Pedro Miguel Nogueira", "Calebe da Luz", "Carolina da Costa", "Maria da Mota", "Lorenzo das Neves", "Paulo da Paz", "Lucas Gabriel Monteiro", "Maria Julia Monteiro", "Felipe da Cruz", "João Miguel Gomes", "Ana Laura Pinto", "Ana Sophia da Paz", "Davi Lucas da Costa", "João Felipe Fogaça", "Ana Carolina Correia", "Vitória da Mota", "Eloah da Mota", "Heloísa da Paz", "João Vitor da Cunha", "Luiz Henrique Viana", "Kevin da Conceição", "Luna da Paz", "Maria Fernanda Alves", "Maria Sophia Peixoto", "Ana Sophia Araújo", "Bianca da Rosa", "Gustavo Henrique Barbosa", "Francisco da Cruz", "Vitor Gabriel Rocha", "Davi Lucas Rezende", "Lucas Gabriel Rezende", "Marcos Vinicius Costa", "Lucas Gabriel FariasFernandes", "Maria Clara da Mata", "Laís da Cruz", "Marcelo da Conceição", "Enzo da Mata", "João Pedro Campos", "Maria Julia Porto", "Gabriela da Rosa", "João Vitor Oliveira", "Luiz Miguel Silveira", "Marcos Vinicius Santos", "Maria Fernanda Souza", "Larissa da Mota", "Eloah da Mota", "João Lucas Aragão", "Maria Luiza Caldeira", "Letícia da Paz", "Pedro Miguel Vieira", "Luiz Fernando Correia", "João Lucas da Cruz", "Maria Fernanda Peixoto", "Gabriel da Costa", "Maria Cecília da Rosa", "Luiz Henrique Gomes", "Luiz Henrique Vieira", "Otávio das Neves", "Ana Vitória Araújo", "Pedro Miguel Souza", "Emanuelly da Cruz", "Maria Sophia Mendes", "João Lucas Cavalcanti", "João Gabriel Moreira", "Benjamin da Costa", "João Gabriel da Rocha", "Maria Cecília Campos", "Vitor Gabriel Alves", "Isaac da Cunha", "Ana Júlia Martins", "Gabrielly da Rosa", "Stella da Rocha", "Luiz Otávio Sales", "Vitor Gabriel Pereira", "João Vitor da Mota", "Maria Sophia FariasFernandes", "Samuel da Cunha", "Ana Laura Teixeira", "Lucas Gabriel Almeida", "Ana Clara Gomes", "Larissa da Conceição", "Maria Clara Melo", "Marcos Vinicius FariasFernandes", "Luiz Henrique Barbosa", "Luiz Miguel Araújo", "Davi Lucca Pereira", "Ana Lívia Peixoto", "Maria Sophia Oliveira", "Ana Clara Teixeira", "Lucas Gabriel Melo", "Pedro Henrique Cunha", "Daniel da Rocha", "Antônio da Rocha", "Luiz Gustavo Silveira", "Henrique das Neves", "Luiz Gustavo Costela", "Luiz Miguel Cardoso", "Clarice da Cruz", "Davi Lucca da Luz", "Marcos ViniciusMartins", "Bárbara da Mota", "Maria Fernanda Rezende", "Ana Beatriz Caldeira", "Kevin da Luz", "Maria Fernanda Ramos", "Agatha da Conceição", "André da Mota", "Pedro da Rocha", "Ana Vitória Caldeira", "Ana Laura Jesus", "Emanuelly da Rocha", "Ana Beatriz da Paz", "Ana Lívia Moura", "Erick da Cunha", "Ana Lívia Oliveira", "João Lucas Barros", "Clarice da Conceição", "Diogo da Rocha", "Luiz Henrique Ribeiro", "Nicole da Mota", "Breno da Paz", "João Lucas Viana", "Brunada Rosa", "Luigi da Conceição", "Ana Carolina Peixoto", "Ana Julia FariasFernandes", "Maria Vitória Santos", "João Felipe Gonçalves", "Maria Clara Araújo", "Luiz Henrique Cardoso,", "João Gabriel Barbosa", "Ana Julia Castro", "João Pedro da Costa", "Davi Luiz Dias", "Emilly da Conceição", "Theo da Conceição", "João Lucas Azevedo", "Maria Alice Cunha", "Lucas Gabriel da Luz", "Maria Alice Monteiro", "Leonardo da Cunha", "Samuel da Cruz", "Ana Lívia Silveira", "Luiz Gustavo Fogaça", "Davi Lucca Ribeiro", "Bernardo da Conceição", "Yago da Cruz", "Rebeca da Cruz", "João Vitor da Paz", "Luiz Gustavo Moura", "Pedro Henrique Campos", "Enzo Gabriel da Mata", "Vinicius das Neves", "Davi Luiz Melo", "Alexia da Mata", "Levi da Cruz", "Lucas Gabriel Rodrigues", "Maria Cecília Jesus", "João Vitor Almeida", "Ana Carolina Teixeira", "Ana Beatriz Mendes", "Carlos Eduardo Moura", "João Vitor Duarte"];
window.addEventListener("load", function() {
    !function() {
        function a(a) {
            return "<p style=\"font-family: 'Montserrat', sans-serif; font-weight: 600; color: white !important; margin: 3px; font-size: 0.8em; line-height: 140%;\">" + a + "</p>"
        }
        function i(a, i) {
            return Math.random() * (i - a) + a
        }
        function o(a, i) {
            var o = document.getElementsByTagName("head")[0]
              , e = document.createElement("script");
            e.type = "text/javascript",
            e.src = a,
            e.onreadystatechange = i,
            e.onload = i,
            o.appendChild(e)
        }
        function e(a, i) {
            var o = document.getElementsByTagName("head")[0]
              , e = document.createElement("link");
            e.rel = "stylesheet",
            e.href = a,
            e.onreadystatechange = i,
            e.onload = i,
            o.appendChild(e)
        }
        function r(a) {
            document.getElementById(a).style.backgroundColor = "rgba(0, 181, 26, 0.93) !important"
        }
        function n() {
            function o() {
                var o, e, n, c = (new Date).getHours(), M = (o = 64,
                e = 1600,
                n = t[c],
                (d - u) / (e - o) * (n - e) + d), C = i(.5 * M, 1.5 * M);
                if (0 != Math.floor(C)) {
                    var L = new Noty({
                        theme: l,
                        layout: "topRight",
                        timeout: s,
                        text: a("<b>" + Math.floor(C) + "</b> pessoas compraram Metaverso Tattoo 3D"),
                        killer: !0
                    })
                      , z = L.id;
                    L.show(),
                    r(z)
                }
            }
            function e() {
                var i = function() {
                    var a = localStorage.getItem("37ryh92dj");
                    return null == a && (localStorage.setItem("37ryh92dj", ","),
                    i()),
                    a
                }
                  , o = function(a) {
                    var o = i();
                    return null != o && !(o.split(",").find(function(i) {
                        return i === a
                    }) !== a)
                }
                  , e = function() {
                    for (var a, e, r = names[Math.floor(Math.random() * names.length)], n = 0; o(r); )
                        if (r = names[Math.floor(Math.random() * names.length)],
                        (n += 1) == names.length) {
                            r = null;
                            break
                        }
                    return null !== r && (a = r,
                    (e = i().split(",")).push(a),
                    localStorage.setItem("37ryh92dj", e)),
                    r
                }();
                if (null !== e) {
                    var n = new Noty({
                        theme: l,
                        layout: "topRight",
                        timeout: s,
                        text: a("<b style=color:#00ffaa;>" + e + "</style></b>, acabou de se inscrever no Metaverso Tattoo 3D!"),
                        killer: !0
                    })
                      , u = n.id;
                    n.show(),
                    r(u)
                }
            }
            function n(a, o, e, r) {
                setInterval(function() {
                    (new Date).getMinutes() % Math.floor(i(o, e)) == 0 && a()
                }, r)
            }
            setTimeout(e, 17e3),
            setTimeout(o, 3e4),
            n(o, 2, 6, 3e4),
            n(e, 2, 6, 3e4)
        }
        var u = 0
          , d = 8
          , s = 8e3;
        new Date(2018,2,5),
        new Date(2018,2,12);
        var l = "relax"
          , t = {
            0: 375,
            1: 250,
            2: 175,
            3: 162.5,
            4: 122,
            5: 167,
            6: 350,
            7: 525,
            8: 1050,
            9: 1350,
            10: 1350,
            11: 1275,
            12: 1250,
            13: 1200,
            14: 1125,
            15: 1050,
            16: 1e3,
            17: 1025,
            18: 1125,
            19: 1400,
            20: 1225,
            21: 825,
            22: 700,
            23: 275
        };
        o("https://code.jquery.com/jquery-3.3.1.min.js", function() {
            o("https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js", function() {
                e("https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css", function() {
                    e("https://fonts.googleapis.com/css?family=Amatic+SC:700&amp;subset=latin-ext", n);
                    var a = document.createElement("style");
                    a.type = "text/css",
                    a.innerHTML = "#noty_layout__topRight { width: 256px !important;  } .noty_body { background-color: #636665 !important; } .noty_theme__relax.noty_type__alert, .noty_theme__relax.noty_type__notification { border: 0px; border-radius: 19px; background-color: transparent;}",
                    document.body.appendChild(a),
                    Noty.setMaxVisible(3)
                })
            })
        })
    }()
});
