import React from 'react';
import ReactDOM from 'react-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 0,
        }
    }
    //全选
    selectAll() {
        document.execCommand('SelectAll');
    }
    //撤销操作
    undo() {
        document.execCommand('undo');
    }
    //重做被撤销的操作
    redo() {
        document.execCommand('redo');
    }
    //设置样式
    setting(e) {
        var command = e.target.getAttribute('title')
        var val = e.target.getAttribute('value')
        if (!val) {
            val = null
        }
        document.execCommand(command, false, val);
        this.setState({
            show: 0
        })
    }
    showList(e) {
        let state = e.currentTarget.getAttribute('target')
        this.setState({
            show: state
        })
    }
    getVal() {
        console.log(this.refs.content.innerHTML);
    }

    // handle(e) {
    //     console.log(e.target.innerHTML);
    //     this.setState({
    //         html: e.target.innerHTML
    //     })
    // }
    renderNavbar() {
        if (!this.state.show) {
            return (
                <div class="edit-navbar" id="edit-navbar">
                    <div>
                        <a class="choose-all" onclick={this.selectAll.bind(this)} href="javascript:;">全选</a>
                        <a class="do-last" onclick={this.undo.bind(this)} href="javascript:;"></a>
                        <a class="do-next" onclick={this.redo.bind(this)} href="javascript:;"></a>
                    </div>
                    <div>
                        <a class="font1" target='font-style' onclick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font2" target='font-size' onclick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font-align" target='font-align' onclick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font-color" target='font-color' onclick={this.showList.bind(this)} href="javascript:;"></a>
                    </div>

                </div>
            )
        }
    }
    renderFont1() {
        if (this.state.show == 'font-style') {
            return (
                <div class="edit-navbar edit-navbar-child" >
                    <div>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" title="blod">B</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" title="underline">I</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" title="italic">U</a>
                    </div>
                </div>
            )
        }

    }
    renderFont2() {
        if (this.state.show == 'font-size') {
            return (
                <div class="edit-navbar edit-navbar-child" >
                    <div>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="3">小</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="5">中</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="7">大</a>
                    </div>
                </div>
            )
        }
    }
    renderFontAlign() {
        if (this.state.show == 'font-align') {
            return (
                <div class="edit-navbar edit-navbar-child" >
                    <div>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyLeft">左</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyCenter">中</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyRight">右</a>
                    </div>
                </div>
            )
        }
    }
    renderFontColor() {
        if (this.state.show == 'font-color') {
            return (
                <div class="edit-navbar edit-navbar-child" >
                    <div>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="black">黑</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="red">红</a>
                        <a class="font-style" onclick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="blue">蓝</a>
                    </div>
                </div>
            )
        }

    }
    render() {
        return (
            <div>
                {this.renderNavbar()}
                {this.renderFont1()}
                {this.renderFont2()}
                {this.renderFontAlign()}
                {this.renderFontColor()}
            </div>

        )
    }
}

export default Navbar