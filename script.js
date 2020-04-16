const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCount  = document.getElementById('item-count')
const uncheckedCount = document.getElementById('unchecked-count')

function newTodo() {
	incrementCounts();
	var newJob = document.createElement("div");
	newJob.className = classNames.TODO_ITEM;
	newJob.innerHTML = "Todo No." + itemCount.innerHTML
	list.appendChild(newJob);
	list.appendChild(document.createElement("li"));
}

function incrementCounts(){
	itemCount.innerHTML++;
	uncheckedCount.innerHTML++;
}