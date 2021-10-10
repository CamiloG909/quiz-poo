export class Question {
	/**
	 *
	 * @param {String} text This is text of the question
	 * @param {String[]} choices This are the options of the question
	 * @param {String} answer This is answer of question
	 */
	constructor(text, choices, answer) {
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}

	/**
	 *
	 * @param {String} choice Some text to guess
	 * @returns {Boolean} Return true if the answer is correct
	 */
	correctAnswer(choice) {
		return choice === this.answer;
	}
}
