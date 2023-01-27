$(function () {

	$('form div').addClass('col-12 mb-3');
	$('#result').removeClass('mb-3');

	let form = document.getElementById('userForm');
	let userName = document.getElementById('userName');
	let userEmail = document.getElementById('userEmail');
	let userPass = document.getElementById('userPass');
	let appleNum = document.getElementById('appleNum');
	let thanks = document.getElementById('thanks');
	let studyCheck = document.getElementById('studyReady');

	let validateButton = $('#validateForm');
	let resultText = $('#validationResult');

	let valName = userName.validity;
	let valEmail = userEmail.validity;
	let valPass = userPass.validity;
	let valNum = appleNum.validity;
	let valThanks = thanks.validity;

	form.addEventListener('submit', function (e) {
		if (form.checkValidity()) {
			resultText.text('Дякую!').addClass('text-bg-success');
			// e.preventDefault();
		}
	})

	validateButton.on('click', validateForm);
	form.addEventListener('change', function () {
		resultText.text('').removeClass('text-bg-success');
	})

	function validateForm() {

		if (valName.valueMissing || valName.tooShort) {
			userName.setCustomValidity("Як тебе звати, друже?");
			userName.reportValidity();
		} else if (valEmail.valueMissing) {
			userEmail.setCustomValidity("Ну й дарма, не отримаєш бандероль із яблуками!");
			userEmail.reportValidity();
		} else if (valPass.valueMissing || valPass.tooShort || valPass.tooLong) {
			userPass.setCustomValidity("Я нікому не скажу наш секрет");
			userPass.reportValidity();
		} else if (valNum.valueMissing || appleNum.rangeUnderflow) {
			appleNum.setCustomValidity("Ну поїж хоч трохи... Яблука дуже смачні");
			appleNum.reportValidity();
		} else if (thanks.value.toLowerCase() != 'дякую' || valThanks.valueMissing) {
			thanks.setCustomValidity("Фу, невдячний(-а)!");
			thanks.reportValidity();
		} else if (studyCheck.checked === false) {
			studyCheck.setCustomValidity("Освічені люди живуть довше! Добре подумай!");
			studyCheck.reportValidity();
		} else {
			resultText.text('Validated!').addClass('text-bg-success');
		}
	}



})