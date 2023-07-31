let inputFood = document.getElementById("input-food");
let inputbutton = document.getElementById("input-btn");
let foodContainer = document.getElementById("list");
let noListEL = document.getElementById("no-list");
let foodCountEl = document.getElementById("food-count");
let alert = document.getElementById("message");

// Function -1 : Add Input Value
let handleFood = () => {
	/* 
<li class="food-items">
	<div>Apple</div>
		<div onclick="removeItem(event)"><i class="fa fa-xmark"></i></div>
</li>
*/
	// creating new List
	let newList = document.createElement("li");
	let div = document.createElement("div");
	let divRemoveBtn = document.createElement("div");
	newList.append(div, divRemoveBtn);

	// assign classname & textcontent to newlist
	newList.className = "food-items";
	div.textContent = inputFood.value;
	divRemoveBtn.parentElement.setAttribute("onclick", "removeItem(event)");
	divRemoveBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
	// appending newly created element(newList) to foodcontainer
	foodContainer.append(newList);
	newList.append(div);
	newList.append(divRemoveBtn);
	createNew();

	// reseting input value
	inputFood.value = "";
	refresh();

	/* another way
	foodContainer.innerHTML += `<li class="food-items">${inputFood.value}</li>`;*/
};
inputbutton.addEventListener("click", handleFood);

function removeItem(event) {
	let list = event.target.parentNode.parentNode;

	let main = document.getElementById("main");
	let div = document.createElement("div");
	let strong = document.createElement("strong");
	let msg_1 = document.createTextNode("❌ oops !");
	let msg_2 = document.createTextNode(
		`You ${inputFood.value} Removed Your List😖`
	);
	div.className = "deleted";
	strong.append(msg_1);
	div.append(strong);
	div.append(msg_2);
	main.prepend(div);
	setTimeout(() => {
		div.remove();
	}, 2000);

	console.log(list);
	// remove
	list.remove();
	refresh();
}

// Function Used For Enter Input Value to Add
inputFood.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		return handleFood();
	}
});

// Function Used for Refresh
function refresh(event) {
	if (foodContainer.children.length > 0) {
		foodCountEl.innerText = `Total Items : ${foodContainer.children.length}`;
		noListEL.hidden = true;
		foodContainer.className = "food-list";
		foodCountEl.hidden = false;
		foodCountEl.className = "food-count";
	} else {
		noListEL.hidden = false;
		foodContainer.hidden = true;
		foodCountEl.hidden = true;
	}
}

// <strong>✅ Success !</strong> Your Food is Updated😊
function createNew() {
	let main = document.getElementById("main");
	let div = document.createElement("div");
	let strong = document.createElement("strong");
	let msg_1 = document.createTextNode("✅ Success !	");
	let msg_2 = document.createTextNode(
		`	Your ${inputFood.value} list are Updated😊`
	);
	div.className = "added";
	strong.append(msg_1);
	div.append(strong);
	div.append(msg_2);
	main.prepend(div);
	setTimeout(() => {
		div.remove();
	}, 2000);
}
inputbutton.addEventListener("click", createNew);
