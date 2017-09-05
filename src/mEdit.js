// (function (global, factory) {
//     typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
//         typeof define === 'function' && define.amd ? define(['exports'], factory) :
//             (factory((global.pell = {})));
// }(this, (function (exports) {
//     'use strict';
//     var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// })))
// console.log('kkkkk');


import { h, render, Component } from 'preact';
console.log(document);
class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{time}</span>
    }
}


render(<Clock />, document.body);