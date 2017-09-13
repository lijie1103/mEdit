import React from 'react';
import ReactDOM from 'react-dom';
import MEdit from './mEdit.jsx'

function initMEdit(elm, succFun, cancelFun) {
    ReactDOM.render(
        <MEdit onSucc={succFun} onCancel={cancelFun} />,
        elm
    );
}

export {
    initMEdit,
    MEdit
}