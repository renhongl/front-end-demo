/**
 * 将模块分为各个文件，学习redux依赖关系。
 */

import Header from './component/Header';
import Todo from './component/Todo';

function main() {
    new Header();
    new Todo();
}

main();