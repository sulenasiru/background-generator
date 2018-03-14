var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var delet = document.getElementById("delete");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

}

function addListAfterClick(){
	
    if(inputLength > 0){
	createList()
}

}

button.addEventListener("click",addListAfterClick) 
    
    function addKeyAfterPress(event){
    
	
    if(inputLength > 0  && event.keyCode === 13){
	createList()
}
}

    

input.addEventListener("keypress", addKeyAfterPress)