function copyrightYear() {
	const copyright = document.getElementById("copy_date");
	const year = new Date().getFullYear();
	if (copyright) {
		copyright.innerHTML = year;
	}
}

function openCloseMenu() {
	const icon = document.getElementById("menu_icon");
	const menu = document.getElementById("menu_drawer");

	icon.addEventListener("click", (e) => {
		const clicked = e.target.classList.contains("clicked");

		if (clicked) {
			icon.classList.remove("clicked");
			menu.classList.remove("active");
		} else {
			icon.classList.add("clicked");
			menu.classList.add("active");
		}
	});
}

function calculate() {
	const yarn_calc = document.getElementById("yarn_calculator");

	if (yarn_calc) {
		const startWt = document.getElementById("start_wt");
		const startYd = document.getElementById("start_yd");
		const currentWt = document.getElementById("current_wt");

		const resultCurrentYd = document.getElementById("current_yd");
		const resultProjectYd = document.getElementById("project_yd");
		const resultProjectWt = document.getElementById("project_wt");

		const reset = document.getElementById("reset");
		reset.addEventListener("click", () => {
			resultCurrentYd.innerHTML = "";
			resultProjectYd.innerHTML = "";
			resultProjectWt.innerHTML = "";
			measure.forEach((y) => {
				y.innerHTML = "(yd.)";
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

				meter.addEventListener("click", () => {
					resultCurrentYd.innerHTML = (currentYd / 1.094).toFixed(2);
					resultProjectYd.innerHTML = (projectYd / 1.094).toFixed(2);
				});

				yard.addEventListener("click", () => {
					resultCurrentYd.innerHTML = currentYd.toFixed(2);
					resultProjectYd.innerHTML = projectYd.toFixed(2);
				});
			}
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
			// console.log(result);

			let output = "";
			for (let i = 0; i < 3; i++) {
				const title = result.items[i].title;

				const pubDate = result.items[i].pubDate;
				const date = new Date(Date.parse(pubDate));
				// console.log(date.toDateString());

				const link = result.items[i].link;
				const id = link.substr(link.indexOf("=") + 1);

				output += `<article class="video"><div class="video_container"><figure class="latestVideo"><iframe src="https://youtube.com/embed/${id}?&autoplay=1&controls=0" frameborder="0" loading="lazy" allowfullscreen></iframe></figure></div><div class="title_container"><p class="pub-date">${date.toDateString()}</p><h2 class="latestTitle">${title}</h2></div></article>`;
			}

			const videos = document.getElementById("videos");
			if (videos) {
				videos.innerHTML = output;
			}
		});
	// .catch((error) => console.log("error", error));
};

window.onload = () => {
	copyrightYear();
	openCloseMenu();
	calculate();
	loadVideo();
};
