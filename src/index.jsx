import React from 'react'
import { render } from 'react-dom'
import MEditComponent from './mEdit.jsx';
import merge from 'lodash/_mergeData.js'

class MEdit {
    constructor(options) {
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
        this.options = obj
    }

    showEdit() {
        document.getElementById('m_edit_container').setAttribute('class', 'show')
        document.getElementById('edit_inner').setAttribute('class', 'edit-container')
    }

    render(container) {
        let node = null
        container = container || this.options.container

        if (!container) throw new Error(`Container is required: ${container}`)

        if (!(container instanceof HTMLElement)) {
            node = document.getElementById(container)
            if (!node) throw new Error(`Container not found, document.getElementById: ${container}`)
        } else {
            node = container
        }

        return render(<MEditComponent deaultVal={this.options.val} onSucc={this.options.succFun} />, node)
    }
}

export default MEdit
