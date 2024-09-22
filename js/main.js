const firstCard = document.querySelector(".box__first-card");
const secondCard = document.querySelector(".box__second-card");
const submitBtn = document.querySelector(".box__first-card-submit-btn");
const checkBtns = document.querySelector(".box__first-card-btns");
const selectedNum = document.querySelector(".box__second-card-selected-text p span");

let newNum = "";

const handleDisplay = () => {
	firstCard.style.display = "none";
	secondCard.style.display = "grid";
};

checkBtns.addEventListener("click", e => {
	newNum = e.target.textContent;
	selectedNum.textContent = newNum;
});

submitBtn.addEventListener("click", () => {
	if (newNum === "") {
	} else {
		handleDisplay();
	}
});
