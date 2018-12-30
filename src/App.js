import React, { Component } from 'react';

import './App.css';
import ColorPicker from './Components/ColorPicker';
import Reset from './Components/Reset';
import Result from './Components/Result';
import SizeSetting from './Components/SizeSetting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      color:'red',
      fontSize:15 + 'px'
    }
  }
  onSetColor=(params)=>{
   this.setState({
     color:params
   });
  }
  onReset=(colors,fonts)=>{
    this.setState({
      color:colors,
      fontSize:fonts
    });
  }
  onSetFontSize=(NASA)=>{
    console.log('====================================');
    console.log(NASA);
    console.log('====================================');
    this.setState({
      fontSize:NASA
    })
  }
  render() {
    return (
      <div>
        
        <div className="row">
          <ColorPicker color={this.state.color} onImportData={this.onSetColor}/>
          <SizeSetting fontSize={this.state.fontSize} onImportFontSIze={this.onSetFontSize}/>
        </div>
        <Reset Reset={this.onReset}/>
        <Result color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
    );
  }
}

export default App;
