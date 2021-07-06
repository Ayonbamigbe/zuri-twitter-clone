
function _handler(id){
	var _id = document.getElementById(id);
	for(var elt of _id.parentElement.children)
		elt.style.display="none";
	_id.style.display = "block";
}

function _toggle_password(id,m_elt){
	var _id = document.getElementById(id);
	if(_id.type.toLowerCase() == "password"){
		_id.type="text";
		m_elt.innerText = "Hide password";
	}else if(_id.type.toLowerCase() == "text"){
		_id.type="password";
		m_elt.innerText = "Reveal password";
	}
}

function _write_text(e,elt){
	var num = elt.parentElement.getAttribute('foot_text').split('/')[1];	
	if(elt.value.length==num && e.key != "Backspace"){
		e.preventDefault();
	}
}

function _update_text_len(e,elt){
	var num = elt.parentElement.getAttribute('foot_text').split('/')[1];
	elt.parentElement.setAttribute('foot_text',elt.value.length+"/"+num)
}