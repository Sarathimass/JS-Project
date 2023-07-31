document.addEventListener("click", (event) => {
	const id = event.target.dataset.toggleId;

	if (!id) return; // ignore all

	const el = document.getElementById(id);

	el.hidden = !el.hidden;
});

const formEl = document.querySelector("#btn-support");

formEl.addEventListener("submit", (event) => {
	event.preventDefault();

	let donateAmount = event.target.querySelector("input").value;

	alert(`Thank you for donating ₹${donateAmount}.`);
	formEl[0].value = "";
});
