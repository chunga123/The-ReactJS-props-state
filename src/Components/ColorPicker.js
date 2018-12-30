import React, { Component } from 'react';



class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            colors : ['red','blue','#ccc','green'],

        };
        
    }

    DesignColor=(color,width)=>{
        return {
            background: color
        }
}
OnActive=(color)=>{
    this.props.onImportData(color);
}



    render() {
        var ShowColors = this.state.colors.map((color,index)=>{
            return <span 
            key={index}
             style={this.DesignColor(color)}
             className={this.props.color === color ? "active" : "spans" }
             onClick={() => this.OnActive(color)}>{color}</span>
            
        });
        return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Panel title</h3>
                        </div>
                        <div className="panel-body">
                            {ShowColors}
                        </div>
            </div>
            </div>
        );
    }
}

export default ColorPicker;
