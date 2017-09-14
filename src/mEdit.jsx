import React from 'react';
import Navbar from './navbar.jsx'
class MEdit extends React.Component {
    constructor(props) {
        super(props)
        let { deaultVal } = this.props

        this.state = {
            val: deaultVal ? deaultVal : '',
            navState: 0   //navbar 的 显示状态
        }
    }
    getVal(e) {
        e.preventDefault();
        e.stopPropagation();
        let html = this.refs.content.innerHTML
        this.props.onSucc(html)
        this.setState({
            val: '',
            navState: 0,
        })
        // this.refs.edit_container.setAttribute('class', 'hide')
    }
    changeState() {
        let html = this.refs.content.innerHTML
        this.setState({
            val: html,
            navState: 0,
        })
    }
    render() {
        let deaultVal = this.state.val
        let html = {
            __html: deaultVal
        }
        return (
            <div class='hide' id='edit-bg' ref='edit_container'>
                <div class="edit-bg" onClick={this.changeState.bind(this)}></div>
                <Navbar show={this.state.navState} />
                <div class="edit-container" >
                    <div class="edit-content" ref='content' contenteditable="true"
                        dangerouslySetInnerHTML={html}>></div>
                    <div class="edit-footbar">
                        <a class="btn-sure" href="javascript:;" onClick={this.getVal.bind(this)}>确定</a>
                    </div>
                </div>

            </div>

        );
    }
}

export default MEdit;