import React, { Component } from 'react';


class reset extends Component {
    ResetAll=()=>{
        this.props.Reset('red',15)
    }
    render() {
        return (
            <div>
                <div className="Button-content">
                    <button className="btn btn-succeess" onClick={()=>this.ResetAll()}>Reset All</button>
                </div>
            </div>
        );
    }
}

export default reset;
