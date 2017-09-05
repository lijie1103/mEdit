import React from 'react';
import ReactDOM from 'react-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: ''
        }
    }
    showList() {
        console.log('object');
    }
    renderFont1() {
        return (
            <div class="edit-navbar edit-navbar-child hide" id='font-style'>
                <div>
                    <a class="font-style" href="javascript:;">B</a>
                    <a class="font-style" href="javascript:;">I</a>
                    <a class="font-style" href="javascript:;">U</a>
                </div>
            </div>

        )
    }
    renderFont2() {
        <div class="edit-navbar edit-navbar-child hide" id='font-size'>
            <div>
                <a class="font-style" href="javascript:;">小</a>
                <a class="font-style" href="javascript:;">中</a>
                <a class="font-style" href="javascript:;">大</a>
            </div>
        </div>
    }
    renderFontAlign() {
        <div class="edit-navbar edit-navbar-child hide" id='font-align'>
            <div>
                <a class="font-style" href="javascript:;">左</a>
                <a class="font-style" href="javascript:;">中</a>
                <a class="font-style" href="javascript:;">右</a>
            </div>
        </div>
    }
    renderFontColor() {
        <div class="edit-navbar edit-navbar-child hide" id='font-color'>
            <div>
                <a class="font-style" href="javascript:;">黑</a>
                <a class="font-style" href="javascript:;">红</a>
                <a class="font-style" href="javascript:;">蓝</a>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                <div class="edit-navbar" id="edit-navbar">
                    <div>
                        <a class="choose-all" href="javascript:;">全选</a>
                        <a class="do-last" href="javascript:;"></a>
                        <a class="do-next" href="javascript:;"></a>
                    </div>
                    <div>
                        <a class="font1" onclick={this.showList} href="javascript:;"></a>
                        <a class="font2" href="javascript:;"></a>
                        <a class="font-align" href="javascript:;"></a>
                        <a class="font-color" href="javascript:;"></a>
                    </div>

                </div>





            </div>

        )
    }
}

export default Navbar