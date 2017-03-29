/**
 * 将模块分为各个文件，学习redux依赖关系。
 */

import { store, state } from '../store/store';
import { addTodo, removeTodo} from '../action/todoListAction';
import '../style/todo.css';
import todoHTML from '../template/todo.html';

export default class Todo {
    constructor() {
        let section = document.createElement('section');
        section.setAttribute('class', 'todo-section');
        section.innerHTML = todoHTML;
        document.body.appendChild(section);
        this._render(state);
        this._addEvent();
    }

    _addEvent() {
        let unsubscribe = store.subscribe(() => {
            this._render(store.getState());
        });

        let addButton = document.querySelector('.addOneTodo');
        addButton.onclick = function() {
            const input = document.querySelector('.newTodo');
            let text = input.value;
            store.dispatch(addTodo(text));
            input.value = '';
        };

        
    }

    _render(state) {
        let ul = document.querySelector('.todoList');
        let liGroup = document.querySelectorAll('li');
        [...liGroup].forEach(function(li) {
            ul.removeChild(li);
        });
        for (let [i, todo] of state.todoList.entries()) {
            let li = document.createElement('li');
            let removeButton = document.createElement('input');
            removeButton.setAttribute('type', 'button');
            removeButton.setAttribute('value', '删除');
            removeButton.setAttribute('class', 'remove-button');
            removeButton.onclick = function(e) {
                store.dispatch(removeTodo(e.target.parentNode.innerText.split(':')[0]));
            }
            li.innerText = i + ': ' + todo;
            li.appendChild(removeButton);
            ul.appendChild(li);
        }
    }

}