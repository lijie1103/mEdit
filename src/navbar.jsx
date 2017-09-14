import React from 'react';
import ReactDOM from 'react-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.navState ? this.props.navState : 0,
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
    renderNavbar() {
        if (!this.state.show) {
            return (
                <div class="edit-navbar" id="edit-navbar">
                    <div>
                        <a class="choose-all" onClick={this.selectAll.bind(this)} href="javascript:;">全选</a>
                        <a class="do-last" onClick={this.undo.bind(this)} href="javascript:;"></a>
                        <a class="do-next" onClick={this.redo.bind(this)} href="javascript:;"></a>
                    </div>
                    <div>
                        <a class="font1" target='font-style' onClick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font2" target='font-size' onClick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font-align" target='font-align' onClick={this.showList.bind(this)} href="javascript:;"></a>
                        <a class="font-color" target='font-color' onClick={this.showList.bind(this)} href="javascript:;"></a>
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
                        <a class="font-style" onClick={this.setting.bind(this)} href="javascript:;" title="blod">B</a>
                        <a class="font-style" onClick={this.setting.bind(this)} href="javascript:;" title="italic">I</a>
                        <a class="font-style" onClick={this.setting.bind(this)} href="javascript:;" title="underline">U</a>
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
                        <a class="font-style s" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="3">A</a>
                        <a class="font-style m" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="5">A</a>
                        <a class="font-style l" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="fontsize" value="7">A</a>
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
                        <a class="font-style left" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyLeft">
                        </a>
                        <a class="font-style center" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyCenter">
                        </a>
                        <a class="font-style right" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="justifyRight">
                        </a>
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
                        <a class="black font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#333"></a>
                        <a class="color2 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#808080"></a>
                        <a class="color3 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#ea271d"></a>
                        <a class="color4 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#fd8a25"></a>
                        <a class="color5 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#40b34f"></a>
                        <a class="color6 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#1f69f6"></a>
                        <a class="color7 font-style" onClick={this.setting.bind(this)} href="javascript:;" href="javascript:;" title="ForeColor" value="#af53b9"></a>
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