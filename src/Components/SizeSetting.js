import React, { Component } from 'react';


class SizeSetting extends Component {
    getSize=()=>{
        return this.props.fontSize;
        
    }
    click=(string)=>{
        console.log('====================================');
        console.log(this.props.fontSize);
        console.log('====================================');
        
        if(string=="Up"){
            this
                .props
                .onImportFontSIze(this.props.fontSize+1); 
        } 
        else{
            this
                .props
                .onImportFontSIze(this.props.fontSize-1);
        }
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title"><span>size : {this.props.fontSize} px</span></h3>
                    </div>
                    <div className="panel-body">

                        <button type="button" className="btn btn-primary" onClick={()=>this.click("Down")}>Down</button>
                        <button className="btn btn-primary" onClick={()=>this.click("Up")}>Up</button>

                    </div>
                </div>

            </div>
        );
    }
}

export default SizeSetting;
