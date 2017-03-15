/**
 * 将模块分为各个文件，学习redux依赖关系。
 */

import {todoListStore, todoList} from './store/todoListStore';
import {addTodo}  from './action/todoListAction';

function main() {
    let unsubscribe = todoListStore.subscribe(() => {
        render(todoListStore.getState());
    });

    let addButton = document.querySelector('.addOneTodo');
    addButton.onclick = function() {
        let text = document.querySelector('.newTodo').value;
        todoListStore.dispatch(addTodo(text));
    };
}

function render(todoList) {
    let ul = document.querySelector('ul');
    if(ul){
        ul.remove();
    }
    ul = document.createElement('ul');
    document.body.appendChild(ul);
    for(let todo of todoList) {
        let li = document.createElement('li');
        li.innerHTML = todo;
        ul.appendChild(li);
    }
}

main();






