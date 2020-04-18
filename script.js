const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


class Todo{
	constructor(no){
		this.id = no
		this.parentNode = document.createElement("li");
		this.jobItem = this.createJobBox();
		this.textbox = this.createTextBox();
		this.checkbox = this.createCheckbox();
		this.button = this.createButton();
		this.createTodo();
	}

	createTodo(){
		this.jobItem.appendChild(this.checkbox);
		this.jobItem.appendChild(this.button);
		this.jobItem.appendChild(this.createBreak());
		this.jobItem.appendChild(this.textbox);
		this.parentNode.appendChild(this.jobItem);
	}

	createJobBox(){
		const jobItem = document.createElement("div");
		jobItem.className = classNames.TODO_ITEM;
		jobItem.innerHTML = "Todo No." + this.id
		return jobItem
	}

	createTextBox(){
		let text = document.createElement("TextArea");
		text.style.width = "100%";
		return text
	}

	createBreak(){
		let lineBreak = document.createElement("br");
		return lineBreak 
	}

	createButton(){
		let button = document.createElement("button");
		button.className = classNames.TODO_DELETE
		button.innerHTML = "Remove"
		button.addEventListener("click", () => removeTodo(this.id))
		return button
	}

	createCheckbox(){
		const checkbox = document.createElement("input");
		const inputType = document.createAttribute("type")
		inputType.value = "checkbox"
		checkbox.setAttributeNode(inputType); 
		checkbox.className = classNames.TODO_CHECKBOX
		checkbox.innerHTML = "Done"
		checkbox.addEventListener("change", update)
		return checkbox
	}

	isChecked(){
		return this.checkbox.checked
	}
}

class TodoList{
	constructor(){
		this.list = []
		this.lastID = 0
		this.domList = document.getElementById('todo-list')
		this.domCount  = document.getElementById('item-count')
		this.domUncheckCount = document.getElementById('unchecked-count')
	}


	createTodo() {
		const todo = new Todo(this.lastID++);
		this.domList.appendChild(todo.parentNode);
		this.list.push(todo)
		this.update();
	}

	removeTodo(number){
		let remove = null
		this.list.forEach(
			function(todo){
				if(todo.id === number){
					remove = todo
					remove.parentNode.innerHTML = ""
				}
			}
		)
		let index = this.list.indexOf(remove);
  		this.list.splice(index, 1);
		this.update()
	}

	update(){
		this.domCount.innerHTML = this.list.length;
		this.getUncheckedCount();
	}

	getUncheckedCount(){
		let count = 0
		this.list.forEach(
			function(todo){if(!todo.isChecked()){count++}}
		)
		console.log(count)
		this.domUncheckCount.innerHTML = count
	}

}

const todoList = new TodoList();
function newTodo(){
	todoList.createTodo();
}

function removeTodo(number){
	console.log("removing a todo...")
	todoList.removeTodo(number);
}

function update(){
	todoList.update();
}
