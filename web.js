function web() {
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	if (email.includes("@") && password.length >= 8) {
		window.open("index.html",  "_blank");
	}
	else {
		alert ("please enter your email and password");
	}
}