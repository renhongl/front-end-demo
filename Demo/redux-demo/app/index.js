/**
 * 将模块分为各个文件，学习redux依赖关系。
 */

import {store, defaultState} from './store/store';
import {addTodo}  from './action/todoListAction';
import './style/index.css';
import kios from './images/kios.png';

function main() {
    document.querySelector('.logo').setAttribute('src', kios);
    render(defaultState);
    let unsubscribe = store.subscribe(() => {
        render(store.getState());
    });

    let addButton = document.querySelector('.addOneTodo');
    addButton.onclick = function() {
        const input = document.querySelector('.newTodo');
        let text = input.value;
        store.dispatch(addTodo(text));
        input.value = '';
    };
}

function render(defaultState) {
    let ul = document.querySelector('.todoList');
    let liGroup = document.querySelectorAll('li');
    [...liGroup].forEach(function(li) {
        ul.removeChild(li);
    });
    if(defaultState.todoList){
        for(let [i, todo] of defaultState.todoList.entries()) {
            let li = document.createElement('li');
            li.innerText = i + ': ' + todo;
            ul.appendChild(li);
        }
    }
}

main();






