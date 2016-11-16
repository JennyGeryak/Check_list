var id_index=0;
	 function getIdIndex (){
	 	return id_index=id_index+1;
	 }
	function add_task (text){
		var task_list=document.getElementById("task_list");
		var id="item"+getIdIndex ();
		var task_item = document.createElement('input');
	    task_item.type = 'checkbox';
	    task_item.id=id;
	    task_item.checked=true;
	    task_item.style.display = 'none';
	    task_list.appendChild(task_item);
		var label_item = document.createElement('label');
		label_item.htmlFor =id;
	    label_item.type = 'checkbox';
	    task_list.appendChild(label_item);
	    label_item.appendChild(document.createTextNode(text));
	    label_item.onclick = function () {
	    	console.log (task_item.checked);
	    	if(task_item.checked) {
	    		this.style.textDecoration = 'line-through';

	    	} else {
	    		this.style.textDecoration = 'inherit';
	    	}

	    	// commit
	    }
	}
	add_task ('task 1');
	add_task ('task 2');
