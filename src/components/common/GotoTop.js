import React, {Component} from 'react';
import './gototop.css';

class GotoTop extends Component {

    HandleScrollTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (<div>
            <button onClick={this.HandleScrollTop} id="gototop" className="button-1"><i className="fas fa-chevron-up"></i></button>
        </div>)
    }
};

export default GotoTop;
