document.addEventListener("DOMContentLoaded", function () {
	const subtitle = document.getElementById("subtitle");
	const button = document.querySelector(".button");
	const subtitles = ["Frontend Developer", "UI/UX Desginer"];
	let currentIndex = 0;

	function slideSubtitle() {
		subtitle.classList.add("slide-out");
		setTimeout(function () {
			subtitle.textContent = subtitles[currentIndex];
			subtitle.classList.remove("slide-out");
			currentIndex = (currentIndex + 1) % subtitles.length;
		}, 500); 
	}


	subtitle.textContent = subtitles[currentIndex];

	const intervalId = setInterval(slideSubtitle, 1500);

	// Stop the interval when the button is clicked
	button.addEventListener("click", function () {
		clearInterval(intervalId);
	});
});
