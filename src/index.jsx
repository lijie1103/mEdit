import React from 'react';
import ReactDOM from 'react-dom';
import MEdit from './mEdit.jsx'

function initMEdit(el, option) {
    ReactDOM.render(
        <MEdit deaultVal={option.val} onSucc={option.succFun} />,
        el
    );
}
function showEdit() {
    document.getElementById('edit-bg').setAttribute('class', 'show')
    document.getElementById('edit_inner').setAttribute('class', 'edit-container')
}
export {
    showEdit,
    initMEdit,
    MEdit
}