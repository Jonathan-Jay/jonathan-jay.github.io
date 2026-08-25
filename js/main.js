const URL = "https://jonathan-jay.github.io/";
const sidebarWidth = "250px";
var open = false;

function changeURL(address) {
	document.location.href = URL + address;
}

function insertSidebar() {
	var sidebar = document.createElement("aside");
	sidebar.id = "sidebar";
	sidebar.style.width = sidebarWidth;
	sidebar.className = "sidebar";
	sidebar.innerHTML = `<div>
			<div style="text-align: center; width: ` + sidebarWidth + `; font-size: 2rem; padding-bottom: 20px;">Pages</div>
			<button class="smltextbtn" onclick="changeURL('')" style="width: ` + sidebarWidth + `;">Home</button>
			<button class="smltextbtn" onclick="changeURL('tablefable')" style="width: ` + sidebarWidth + `;">Table Fable</button>
			<button class="smltextbtn" onclick="changeURL('mechamayhem')" style="width: ` + sidebarWidth + `;">Mecha Mayhem</button>
			<button class="smltextbtn" onclick="changeURL('celestialconquest')" style="width: ` + sidebarWidth + `;">Celestial Conquest</button>
			<button class="smltextbtn" onclick="changeURL('barotrauma')" style="width: ` + sidebarWidth + `;">Barotrauma</button>
			<button class="smltextbtn" onclick="changeURL('sideprojects')" style="width: ` + sidebarWidth + `;">Side Projects</button>
			<button class="smltextbtn" onclick="changeURL('gamejams')" style="width: ` + sidebarWidth + `;">Jam Projects</button>
		</div>
		<div style="position: fixed; bottom: 0; padding-bottom: 20px; padding-top: 20px; width: ` + sidebarWidth + `; background-color: rgb(50, 50, 50);">
			<div style="padding-left: 20px;">
				<div>Find me at:</div>
				<div><a href="https://github.com/Jonathan-Jay">Github</a></div>
				<div><a href="https://jjthething.itch.io/">Itch.io</a></div>
				<div><a href="https://www.linkedin.com/in/jonathan-jay-ca/">LinkedIn</a></div>
			</div>
		</div>
	`;
	var button = document.createElement("button");
	button.id = "sidebarbutton";
	button.className = "sidebarbutton";
	button.onclick = toggleSidebar;
	document.body.insertBefore(button, document.getElementById("main"));
	document.body.insertBefore(sidebar, button);
	toggleSidebar();
}

function toggleSidebar() {
	open = !open;
	document.getElementById("main").style.paddingLeft = open ? sidebarWidth : "0px";
	document.getElementById("sidebar").style.left = open ? "0px" : "-" + sidebarWidth;
	var btn = document.getElementById("sidebarbutton");
	btn.style.left = open ? sidebarWidth : "0px";
	btn.textContent = open ? "<<" : ">>";
}