$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "<b>Please fill the required fields</b>"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "<b>Your password must include atleast 8 characters</b>"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "<b>Please fill the required fields</b>"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "<b>Your password must include atleast 8 characters</b>"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}
var a = document.getElementById("logPassword")
document.getElementById("remember").addEventListener("change",()=>{
	if(remember.checked)
	a.type="text"
	else{
		a.type="password"
	}
})

var b = document.getElementById("signPassword")
document.getElementById("remember1").addEventListener("change",()=>{
	if(remember1.checked)
	b.type="text"
	else{
		b.type="password"
	}
})