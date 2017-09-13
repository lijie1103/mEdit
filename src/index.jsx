import React from 'react';
import ReactDOM from 'react-dom';
import MEdit from './mEdit.jsx'

function initMEdit(elm, val, succFun, cancelFun) {
    ReactDOM.render(
        <MEdit deaultVal={val} onSucc={succFun} onCancel={cancelFun} />,
        elm
    );
}

export {
    initMEdit,
    MEdit
}