import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx'

ReactDOM.render(
    <div>
        <div class="edit-bg">
            <div class="edit-container">
                <Navbar />



                <textarea placeholder="不超过1000字" class="edit-content"></textarea>
                <div class="edit-footbar">
                    <a class="btn-sure" href="javascript:;">确定</a>
                </div>
            </div>
        </div>
    </div>,
    document.body
);
