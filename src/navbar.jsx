import React from 'react';
import ReactDOM from 'react-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.showState ? this.props.showState : 0,
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
        e.preventDefault();
        e.stopPropagation();
        var command = e.target.getAttribute('title')
        var val = e.target.getAttribute('value')
        let name = e.target.getAttribute('class')
        if (name.indexOf('bg') > -1) {
            let new_name = name.substring(0, name.length - 2)
            e.target.setAttribute('class', new_name)
        } else {

            e.target.setAttribute('class', name + ' bg')
        }

        if (!val) {
            val = null
        }
        this.props.setting(command, false, val)
        let seft = this
        setTimeout(function () {
            seft.setState({
                show: 0
            })
        }, 500)

    }
    showList(e) {
        e.preventDefault();
        e.stopPropagation();
        let state = e.currentTarget.getAttribute('target')
        this.setState({
            show: state
        })
    }
    getVal() {
        console.log(this.refs.content.innerHTML);
    }
    changeShow(e) {
        this.setState({
            show: 0,
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: this.props.showstate,
        })
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
                        <a class="font-style" href="javascript:;"><span class='size' onClick={this.setting.bind(this)} title="Bold">B</span></a>
                        <a class="font-style" href="javascript:;"><i class='size' onClick={this.setting.bind(this)} title="italic">I</i></a>
                        <a class="font-style" href="javascript:;"><span class='size' onClick={this.setting.bind(this)} title="underline" style={{ 'textDecoration': 'underline' }}>U</span></a>
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
                        <a class="font-style s" href="javascript:;"><span class='size' onClick={this.setting.bind(this)} title="fontsize" value="3">A</span></a>
                        <a class="font-style m" href="javascript:;" ><span class='size' onClick={this.setting.bind(this)} title="fontsize" value="5">A</span></a>
                        <a class="font-style l" href="javascript:;"><span class='size' onClick={this.setting.bind(this)} title="fontsize" value="7">A</span></a>
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
                        <a class="font-style" href="javascript:;">
                            <span class="left" onClick={this.setting.bind(this)} title="justifyLeft" ></span>
                        </a>
                        <a class="font-style " href="javascript:;">
                            <span class="center" onClick={this.setting.bind(this)} title="justifyCenter" ></span>
                        </a>
                        <a class="font-style " href="javascript:;">
                            <span class="right" onClick={this.setting.bind(this)} title="justifyRight" ></span>
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
                        <a class="black font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#333"></a>
                        <a class="color2 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#808080"></a>
                        <a class="color3 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#ea271d"></a>
                        <a class="color4 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#fd8a25"></a>
                        <a class="color5 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#40b34f"></a>
                        <a class="color6 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#1f69f6"></a>
                        <a class="color7 font-style" onClick={this.setting.bind(this)} href="javascript:;" title="ForeColor" value="#af53b9"></a>
                    </div>
                </div>
            )
        }

    }
    render() {
        return (
            <div onClick={this.changeShow.bind(this)}>
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