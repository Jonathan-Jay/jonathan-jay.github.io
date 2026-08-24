const URL = "https://jonathan-jay.github.io/";

function changeURL(address) {
	document.location.href = URL + address;
}

function insertSidebar() {
	var sidebar = document.createElement("aside");
	sidebar.id = "sidebar";
	sidebar.className = "sidebar";
	sidebar.innerHTML = `<div style="text-align: center; font-size: 2rem;">Sidebar</div>
		<div>test</div>
		<div>test</div>
		<div>test</div>
		<div>test</div>
	`;
	document.body.insertBefore(sidebar, document.getElementById("main"));
}