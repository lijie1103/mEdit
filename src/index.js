
import { h, render, Component } from 'preact';
class Clock extends Component {
    render() {
        let arr = [1, 2, 3, 4]
        arr.map((item) => {
            console.log(item, 'kkkkk');
        })
        let time = new Date().toLocaleTimeString();
        return <span>{time}</span>
    }
}


render(<Clock />, document.body);



