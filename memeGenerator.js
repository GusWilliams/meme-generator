let form = document.querySelector("form");
form.addEventListener("submit", memeGenerator);

function memeGenerator(e) {
	e.preventDefault();
	let url = imgurl.value;
	let top = topText.value.toUpperCase();
	let bottom = bottomText.value.toUpperCase();
	let body = document.querySelector("body");
	const image = document.createElement("img");
	image.src = url;
	const imgDiv = document.createElement("div");
	imgDiv.classList.add("memeImg");
	const topDiv = document.createElement("p");
	topDiv.classList.add("memeTop");
	const bottomDiv = document.createElement("p");
	bottomDiv.classList.add("memeBottom");
	body.append(imgDiv);
	topDiv.append(top);
	bottomDiv.append(bottom);
	imgDiv.append(image, bottomDiv, topDiv);
	form.reset();
}

let memeDelete = document.querySelector(".delete-button");
memeDelete.addEventListener("click", deleteMeme);
function deleteMeme(e) {
	const last = Array.from(document.querySelectorAll(".memeImg")).pop();
	if (e) {
		last.remove();
	}
}
