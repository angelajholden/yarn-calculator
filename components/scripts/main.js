function copyrightYear() {
	const copyright = document.getElementById("copy_date");
	const year = new Date();
	copyright.innerHTML = year.getFullYear();
	// console.log("copyright");
}

function calculate() {
	const startWt = document.getElementById("start_wt");
	const startYd = document.getElementById("start_yd");
	const currentWt = document.getElementById("current_wt");

	const resultCurrentYd = document.getElementById("current_yd");
	const resultProjectYd = document.getElementById("project_yd");
	const resultProjectWt = document.getElementById("project_wt");

	const reset = document.getElementById("reset");
	reset.addEventListener("click", () => {
		resultCurrentYd.innerHTML = 0;
		resultProjectYd.innerHTML = 0;
		resultProjectWt.innerHTML = 0;
		measure.forEach((m) => {
			m.innerHTML = "(m)";
		});
	});

	const meter = document.getElementById("meter");
	const yard = document.getElementById("yard");
	const measure = document.querySelectorAll(".measure");

	// console.log(measure);

	meter.addEventListener("click", () => {
		measure.forEach((m) => {
			m.innerHTML = "(m)";
		});
	});

	yard.addEventListener("click", () => {
		measure.forEach((y) => {
			y.innerHTML = "(yd.)";
		});
	});

	startWt.addEventListener("input", getResult);
	startYd.addEventListener("input", getResult);
	currentWt.addEventListener("input", getResult);

	function getResult() {
		// calculate the project weight
		const projectWt = startWt.value - currentWt.value;

		// calculate the project yards
		const projectYd = (startYd.value / startWt.value) * projectWt;

		// calculate the current yards remaining
		const currentYd = (startYd.value / startWt.value) * currentWt.value;

		if (currentWt.value > 0 && startWt.value > 0 && startYd.value > 0) {
			resultCurrentYd.innerHTML = currentYd.toFixed(2);
			resultProjectYd.innerHTML = projectYd.toFixed(2);
			resultProjectWt.innerHTML = projectWt.toFixed(2);
		}
	}
}

window.onload = () => {
	copyrightYear();
	calculate();
};
