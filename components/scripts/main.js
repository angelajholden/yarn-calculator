function copyrightYear() {
	const copyright = document.getElementById("copy_date");
	const year = new Date().getFullYear();
	if (copyright) {
		copyright.innerHTML = year;
	}
}

function calculate() {
	const yarn_calc = document.getElementById("yarn_calculator");

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

const loadVideo = () => {
	const cid = "UC4VVojtCVaFNv-q9h4wt_aQ";
	const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
	const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

	fetch(reqURL)
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			const link = result.items[0].link;
			const title = result.items[0].title;
			// const date = result.items[0].pubDate;
			// const published = new Date(date);
			const id = link.substr(link.indexOf("=") + 1);

			const output = `<h2 class="latestTitle">${title}</h2><figure class="video_container"><iframe src="https://youtube.com/embed/${id}?&autoplay=1" class="latestVideo" frameborder="0" allowfullscreen></iframe></figure>`;

			const video = document.getElementById("video");
			if (video) {
				video.innerHTML = output;
			}
		})
		.catch((error) => console.log("error", error));
};

window.onload = () => {
	copyrightYear();
	calculate();
	loadVideo();
};
