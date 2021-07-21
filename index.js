let icon = document.getElementById('icon');
let col1 = document.querySelector('#colr1');
let col2 = document.querySelector('#colr2');
let col3 = document.querySelector('#colr3');
let content = document.querySelectorAll('#all');

function function1(x) {
	if (x == "paint") {
		document.getElementById(x).ondblclick = function () {
			document.getElementById('color').style.display = 'block';
		}
		document.getElementById(x).onclick = function () {
			document.getElementById('color').style.display = 'none';

		}
		col1.onclick = function () {
			document.body.classList.toggle("red");
		}
		col2.onclick = function () {
			document.body.classList.toggle("blue");
		}
		col3.onclick = function () {
			document.body.classList.toggle("green");
		}
	}
	else if (x == "close") {
		document.getElementById(x).ondblclick = function () {
			document.getElementById('navmenu').style.display = 'none';
			document.getElementById('sidebar_btn').style.display = 'block';
		}
	}
	else if (x == "sidebar_btn") {
		document.getElementById(x).ondblclick = function () {
			document.getElementById('navmenu').style.display = 'block';
			document.getElementById('sidebar_btn').style.display = 'none';
		}
	}
	else if (x == "skillsbtn" || x == "educationbtn") {
		document.getElementById("skillsbtn").onclick = function () {

			document.getElementById('skillz').style.display = 'block';
			document.getElementById('education').style.display = 'none';
		}
		document.getElementById('educationbtn').onclick = function () {
			document.getElementById('education').style.display = 'block';
			document.getElementById('skillz').style.display = 'none';
		}
	}
	else if (x == "allbtn" || x == "webappbtn" || x == "photoshopbtn") {
		document.getElementById("allbtn").onclick = function () {

			document.getElementById('webapp').style.display = 'block';
			document.getElementById('photoshop').style.display = 'block';
		}
		document.getElementById("webappbtn").onclick = function () {

			document.getElementById('webapp').style.display = 'block';
			document.getElementById('photoshop').style.display = 'none';
		}
		document.getElementById("photoshopbtn").onclick = function () {
			document.getElementById('webapp').style.display = 'none';
			document.getElementById('photoshop').style.display = 'block';
		}
	}
	else if (x == "clasywork" || x == "indiawork" || x == "passwordwork" || x == "pomodorowork" || x == "weightwork" || x == "cardwork") {
		document.getElementById(x).style.display = 'block';
		document.getElementById('sidebar_btn').style.display = 'none';
		document.getElementById('all').style.display = 'none';
	}
	else if (x == "calsy" || x == "india") {
		let w = x + "-project-details"
		let y = x + "-project-info"

		document.getElementById(w).onclick = function () {
			document.getElementById(y).style.display = 'none';
			document.getElementById(w).querySelector('i.fas').classList.remove('fa-minus');
			document.getElementById(w).querySelector('i.fas').classList.add('fa-plus');
		}
		document.getElementById(w).ondblclick = function () {
			document.getElementById(y).style.display = 'block';
			document.getElementById(w).querySelector('i.fas').classList.remove('fa-plus');
			document.getElementById(w).querySelector('i.fas').classList.add('fa-minus');
		}
	}

}

//=======================dark theme===========
icon.onclick = function () {
	document.body.classList.toggle("dark-theme");
	if (document.body.classList.contains("dark-theme")) {
		icon.src = "images/sun.png";
	}
	else {
		icon.src = "images/moon.png";
	}
}

