function copyrightYear() {
	const copyright = document.getElementById("copy_date");
	const year = new Date();
	copyright.innerHTML = year.getFullYear();
}

window.onload = () => {
	copyrightYear();
};
