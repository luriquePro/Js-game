function jogarNovamente() {
	document.querySelector(".container__botao-jogar-novamente")
		? document.querySelector(".container__botao-jogar-novamente").remove()
		: false;

	const numeroSecreto = Math.floor(Math.random() * 5);
	const chute = prompt(`Escolha um número de 0 a 5`);

	if (chute) {
		if (numeroSecreto == chute) {
			escreverTexto(
				`<h1>Você <span class="container__texto-azul">acertou!</span></h1><h2>Você descobriu o número secreto!</h2><br><button class="container__botao-jogar-novamente" onclick="jogarNovamente()">Jogar novamente</button>`
			);
		} else {
			escreverTexto(
				`<h1>Você <span class="container__texto-vermelho">Errou!</span></h1><h2>O número secreto era ${numeroSecreto}!</h2><br><button class="container__botao-jogar-novamente" onclick="jogarNovamente()">Jogar novamente</button>`
			);
		}
	} else {
		escreverTexto(`<button class="container__botao-jogar-novamente" onclick="jogarNovamente()">Jogar novamente</button>`);
	}
}

function escreverTexto(text) {
	document.querySelector(".container__texto").innerHTML = text;
}

document.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		jogarNovamente();
	}
});

jogarNovamente();
