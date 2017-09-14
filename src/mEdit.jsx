import React from 'react';
import Navbar from './navbar.jsx'
class MEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 0,
        }
    }
    getVal() {
        let html = this.refs.content.innerHTML
        return html
    }
    showPage(){
        this.setState({
            show: 0
        })
    }
    render() {
        return (
            <div class="edit-bg">
                <Navbar showState={this.state.show} />
                <div class="edit-container" >
                    <div class="edit-content" ref='content' contenteditable="true"></div>
                    <div class="edit-footbar" onClick={this.showPage.bind(this)}>
                        <a class="btn-sure" href="javascript:;" onclick={this.getVal.bind(this)}>确定</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MEdit;