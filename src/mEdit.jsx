import React from 'react';
import Navbar from './navbar.jsx'
class MEdit extends React.Component {
    getVal() {
        let html = this.refs.content.innerHTML
        return html
    }
    render() {
        return (
            <div class="edit-bg">
                <Navbar />
                <div class="edit-container" >
                    <div class="edit-content" ref='content' contenteditable="true"></div>
                    <div class="edit-footbar">
                        <a class="btn-sure" href="javascript:;" onclick={this.getVal.bind(this)}>确定</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MEdit;