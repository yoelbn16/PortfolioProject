function sendForm() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const content = document.getElementById('content').value;

	if (!name.trim()) {
		alert('אנא רשמו שם');
		return;
	}
	if (!email.trim()) {
		alert('אנא רשמו מייל');
		return;
	}
	if (!phone.trim()) {
		alert('אנא רשמו מס טלפון');
		return;
	}
	if (!content.trim()) {
		alert('אנא הוסיפו תוכן להודעה');
		return;
	}
}
