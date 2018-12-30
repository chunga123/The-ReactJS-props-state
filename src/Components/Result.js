import React, { Component } from 'react';


class Result extends Component {
    constructor(props) {
        super(props);
        
    }
    setStyle=()=>{
        return {
            color : this.props.color,
            "font-size":this.props.fontSize + 'px'
        }
    }
    render() {
        return (
            <div>
                <div className="Show">
                    <div className="color">
                        Color:<span>{this.props.color}</span>
                    </div>
                    <div className="Size"> 
                        Size: <span>{this.props.fontSize}px</span> 
                    </div>
                </div>

                <div className="panel panel-default" >
                    <div className="panel-body" style={this.setStyle()}>
                         you can change color or change fontsize , 
            </div>
                </div>
            </div>
        );
    }
}

export default Result;
