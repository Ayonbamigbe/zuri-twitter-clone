
function _handler(id){
	var _id = document.getElementById(id);
	for(var elt of _id.parentElement.children)
		elt.style.display="none";
	_id.style.display = "block";
}