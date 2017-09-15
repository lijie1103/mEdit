import React from 'react';
import ReactDOM from 'react-dom';
import MEdit from './mEdit.jsx';
import merge from 'lodash/_mergeData.js'
function initMEdit(el, options) {
    let default_options = {
        val: '',
        succFun: function (html) { }
    }
    let obj = {}
    if (options) {
        obj = merge(options, default_options)
    } else {
        obj = default_options
    }
    ReactDOM.render(
        <MEdit deaultVal={obj.val} onSucc={obj.succFun} />,
        el
    );
}
function showEdit() {
    document.getElementById('m_edit_container').setAttribute('class', 'show')
    document.getElementById('edit_inner').setAttribute('class', 'edit-container')
}
export {
    showEdit,
    initMEdit,
    MEdit
}