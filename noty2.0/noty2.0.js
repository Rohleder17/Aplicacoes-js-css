Notiflix.Notify.Init({
		  closeButton: false,
		  position: 'left-bottom',
		  messageMaxLength:500,
		  cssAnimationStyle:'from-bottom', 
		  cssAnimationDuration:1000,
		  borderRadius:'20px',
		  timeout: 4000,
		  plainText: false,
		  fontSize: '16px',
		  success: {background:'#32c682',textColor:'#fff',childClassName:'success',notiflixIconColor:'rgba(0,0,0,0.2)',fontAwesomeClassName:'fas fa-check-circle',fontAwesomeIconColor:'rgba(0,0,0,0.2)',backOverlayColor:'rgba(50,198,130,0.2)',}
		});
		var supernotificator_nomes = 'Miguel,Arthur,Heitor,Bernardo,Théo,Davi,Gabriel,Pedro,Samuel,Lorenzo,Benjamin,Matheus,Lucas,Benício,Gael,Joaquim,Nicolas,Henrique,Rafael,Isaac,Guilherme,Murilo,Lucca,Gustavo,João Miguel,Noah,Felipe,Anthony,Enzo,João Pedro,Pietro,Bryan,Daniel,Pedro Henrique,Enzo Gabriel,Leonardo,Vicente,Valentim,Eduardo,Antônio,Emanuel,Davi Lucca,Bento,João,João Lucas,Caleb,Levi,Vitor,Enrico,Cauã,Caio,Vinícius,Henry,João Gabriel,Augusto,Ravi,Francisco,Otávio,Davi Lucas,João Guilherme,Thomas,Ícaro,Theodoro,João Vitor,Luiz Miguel,Yan,Yuri Thiago,Arthur Miguel,Nathan,Erick,Breno,Luiz Felipe,Anthony Gabriel,Martin,Matteo,Oliver,Arthur Gabriel,Ryan,Raul,Luan,Tomás,Mathias,Davi Luiz,Pedro Lucas,Derick,Vitor Hugo,Kauê,Lucas Gabriel,Arthur Henrique,Rodrigo,Bruno,Davi Miguel,Yago,José,Pedro Miguel,Luiz Henrique,Hugo,Otto,Josué,Helena,Alice,Laura,Manuela,Valentina,Sophia,Isabella,Heloísa,Luiza,Júlia,Lorena,Lívia,Maria Luiza,Cecília,Eloá,Giovanna,Maria Clara,Maria Eduarda,Mariana,Lara,Beatriz,Antonella,Maria Júlia,Emanuelly,Isadora,Ana Clara,Melissa,Ana Luiza,Ana Júlia,Esther,Lavínia,Maitê,Maria Cecília,Maria Alice,Sarah,Elisa,Liz,Yasmin,Isabelly,Alícia,Clara,Isis,Rebeca,Rafaela,Marina,Ana Laura,Maria Helena,Agatha,Gabriela,Catarina,Letícia,Mirella,Nicole,Luna,Maria Vitória,Olívia,Vitória,Maria,Maria Fernanda,Ana Beatriz,Allana,Maria Valentina,Milena,Emilly,Ayla,Maria Flor,Maya,Bianca,Clarice,Aurora,Larissa,Mariah,Pietra,Laís,Stella,Eduarda,Maria Heloísa,Ana Lívia,Ana Sophia,Maria Laura,Carolina,Ana Vitória,Malu,Gabrielly,Ana Liz,Analu,Maria Sophia,Ana Cecília,Amanda,Louise,Heloise,Fernanda,Ana,Melina,Maria Isis,Bella,Joana,Isabel,Melinda,Pérola';
		supernotificator_nomes = supernotificator_nomes.split(',');
		document.addEventListener('DOMContentLoaded', function() {
			setTimeout(supernotificador_notifica, Math.floor(Math.random() * (20000 - 4000 + 1) + 4000));
		});
		function supernotificador_notifica(){
			supernotificador_nome = supernotificator_nomes[Math.floor(Math.random() * (supernotificator_nomes.length - 1))];
			Notiflix.Notify.Success('<strong>'+supernotificador_nome+'</strong> Entrou pro Grupo!');
			setTimeout(supernotificador_notifica, Math.floor(Math.random() * (20000 - 4000 + 1) + 4000));
		}
