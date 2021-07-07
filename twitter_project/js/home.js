function _hide(id,_animate_func){
	var _id = document.getElementById(id);
	if(_animate_func){
		_animate_func(_id);
	}else{
		_id.style.display = "none";
	}
}

function _show(id,_animate_func){
	var _id = document.getElementById(id);
	if(_animate_func){
		_animate_func(_id);
	}else{
		_id.style.display = "block";
	}
}


function _animation_top_to_bottom(_id){
	_id.style.top = "101%";
}

function _animation_bottom_to_top(_id){
	_id.style.top = "0%";
}

function _animation_left_to_right(_id){
	_id.style.left = "0%";
}

function _animation_right_to_left(_id){
	_id.style.left = "-101%";
}

function _to_light(elt){
	if(document.body.classList.contains('dark_mode')){
		document.body.classList.remove('dark_mode');
		elt.querySelector('.txt').innerText = "To Dark Mode";
	}else{
		document.body.classList.add('dark_mode');
		elt.querySelector('.txt').innerText = "To Light Mode";
	}
	
}