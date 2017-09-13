import React from 'react';
import Navbar from './navbar.jsx'
class MEdit extends React.Component {
    getVal(e) {
        e.preventDefault();
        e.stopPropagation();
        let html = this.refs.content.innerHTML
        console.log(html, 'kkk');
        return html
    }
    hideEdit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.refs.edit_container.setAttribute('class', 'hide')
    }
    render() {
        return (
            <div class='hide' id='edit-bg' ref='edit_container'>
                <div class="edit-bg" onClick={this.hideEdit.bind(this)}></div>
                <Navbar />
                <div class="edit-container" >
                    <div class="edit-content" ref='content' contenteditable="true"></div>
                    <div class="edit-footbar">
                        <a class="btn-sure" href="javascript:;" onClick={this.getVal.bind(this)}>确定</a>
                    </div>
                </div>

            </div>

        );
    }
}

export default MEdit;