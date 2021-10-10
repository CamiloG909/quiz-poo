export class UI {
	constructor() {}

	showQuestion(text) {
		const questionText = document.querySelector("#question");
		questionText.textContent = text;
	}

	showChoices(choices, callback) {
		const choicesContainer = document.querySelector("#choices");
		choicesContainer.innerHTML = "";

		for (let i = 0; i < choices.length; i++) {
			const buttonOption = document.createElement("button");
			buttonOption.addEventListener("click", () => callback(choices[i]));
			buttonOption.className = "quiz-btn";
			buttonOption.textContent = choices[i];

			choicesContainer.appendChild(buttonOption);
		}
	}

	showScore(score) {
		const scoreText = document.querySelector("#question");
		scoreText.innerHTML = `Tu puntaje es: ${score} <br>
		<a href='index.html' class="container-quiz__reload">Reiniciar</a>
		`;
		const choicesContainer = document.querySelector("#choices");
		choicesContainer.innerHTML = "";
		document.querySelector("#footer").remove();
	}

	showProgress(index, total) {
		const progressText = document.querySelector("#progress");
		progressText.textContent = `Question ${index} of ${total}`;
	}
}
