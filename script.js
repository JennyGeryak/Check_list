var id_index=0;
	 function getIdIndex (){
	 	return id_index=id_index+1;
	 }
	 //@param {string} text - need us to add text of the task into the function
	function addTask (text) {
		var task_list=document.getElementById("task_list");
		var id="item"+getIdIndex ();
		// creating var named task_item and assign element with tipe input, created in document 
		var task_item = document.createElement('input');
	    task_item.type = 'checkbox';
	    task_item.id=id;
	    task_item.checked=true;
	    task_item.style.display = 'none';
	    task_list.appendChild(task_item);
	    // label_item it's object 
		var label_item = document.createElement('label');
		label_item.htmlFor =id;
	    label_item.type = 'checkbox';
	    task_list.appendChild(label_item);
	    // creating child element in object label_item 
	    label_item.appendChild(document.createTextNode(text));
	    var button=document.createElement("button");
	    task_list.appendChild(button);
		button.appendChild(document.createTextNode('x'));
		button.onclick = function () {
			task_list.removeChild(label_item);
			task_list.removeChild(task_item);
			task_list.removeChild(this);
			//clearButton(this,task_list);

		}
	    label_item.onclick = function () {
	    	console.log (task_item.checked);
	    	if(task_item.checked) {
	    		this.style.textDecoration = 'line-through';
	    	} else {
	    		this.style.textDecoration = 'inherit';
	    	}
	    }
	}	
	function addField () {
		var task_list=document.getElementById("task_list");
		var tool_bar=document.createElement("div");
		document.body.appendChild(tool_bar);
		var button=document.createElement("button");
		tool_bar.appendChild(button);
		button.appendChild(document.createTextNode('+'));
		var input_field = document.createElement('input');
		tool_bar.appendChild(input_field);
		input_field.type = 'text';
		input_field.id='task_field';
		button.onclick = function () {
			var text = input_field.value;
			-(text);

	   	}
	}
	function clearList () {
		var task_list = document.getElementById("task_list");
		var tool_bar=document.createElement("div");
		document.body.appendChild(tool_bar);
		var button=document.createElement("button");
		tool_bar.appendChild(button);
		button.appendChild(document.createTextNode('Clear all'));
		button.onclick = function () {
			task_list.innerHTML=""
			console.dir(task_list);
		}
	}
	//function clearButton (object,parent) {
		//parent.removeChild(object);}
	addTask ('task 1');
	addTask ('task 2');
	addField ('');
	clearList ('')
	
