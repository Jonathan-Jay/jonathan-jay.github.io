const URL = "https://jonathan-jay.github.io/";
const sidebarWidth = "250px";
var open = false;

function changeURL(address) {
	document.location.href = URL + address;
}

function insertSidebar() {
	var sidebar = document.createElement("aside");
	sidebar.id = "sidebar";
	sidebar.className = "sidebar";
	sidebar.innerHTML = `<div style="text-align: center; font-size: 2rem;">Pages</div>
		<button class="smltextbtn" onclick="changeURL('')" style="width: ` + sidebarWidth + `;">Home</button>
		<button class="smltextbtn" onclick="changeURL('tablefable')" style="width: ` + sidebarWidth + `;">Table Fable</button>
		<button class="smltextbtn" onclick="changeURL('mechamayhem')" style="width: ` + sidebarWidth + `;">Mecha Mayhem</button>
		<button class="smltextbtn" onclick="changeURL('calestialconquest')" style="width: ` + sidebarWidth + `;">Celestial Conquest</button>
		<button class="smltextbtn" onclick="changeURL('barotrauma')" style="width: ` + sidebarWidth + `;">Barotrauma</button>
		<button class="smltextbtn" onclick="changeURL('sideprojects')" style="width: ` + sidebarWidth + `;">Side Projects</button>
		<button class="smltextbtn" onclick="changeURL('gamejams')" style="width: ` + sidebarWidth + `;">Jam Projects</button>
	`;
	var button = document.createElement("button");
	button.id = "sidebarbutton";
	button.textContent = ">>";
	button.className = "sidebarbutton";
	button.onclick = toggleSidebar;
	document.body.insertBefore(button, document.getElementById("main"));
	document.body.insertBefore(sidebar, button);
}

function toggleSidebar() {
	open = !open;
	document.getElementById("main").style.paddingLeft = open ? sidebarWidth : "0px";
	document.getElementById("sidebar").style.width = open ? sidebarWidth : "0px";
	var btn = document.getElementById("sidebarbutton");
	btn.style.left = open ? sidebarWidth : "0px";
	btn.textContent = open ? "<<" : ">>";
}