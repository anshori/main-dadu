function acak() {
	// Play sound
	var audio = new Audio("assets/sound/dice-roll-sound-effect-1139.mp3");
	audio.play();

	// Generate random number
	for (let i = 0; i < 25; i++) {
		setTimeout(() => {
			let angka = Math.floor(Math.random() * 6) + 1;
			document.getElementById("angka").innerHTML = angka;
		}, 100 * i);
	}
}