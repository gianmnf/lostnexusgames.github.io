function downloads(){
	var x = document.getElementById("downloads");
	var y = document.getElementById("desc");
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
	if(y.style.display === "none"){
		y.style.display = "block";
	}
	else{
		y.style.display = "none";
	}
}

function screenshots(){
	var x = document.getElementById("my-slider");
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
}