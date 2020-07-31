import React, { Component } from 'react';
import blogImage from '../assets/blog-image-1.png';
import '../App.css'

class Form extends Component{
    constructor(props){
        super(props);
        
        this.displayDescription = [];
        this.state={
            
            showDescription: this.displayDescription,
            input1:''
        }
        
    }
  
    appendData = () => {
    
    this.displayDescription.push(<div className="row"><img src={blogImage} alt="" style={{ height:200,width:500 }}/><div style={{ width:'50%',marginLeft:"10%" }}><p>{this.state.input1}</p></div></div>);
    this.setState({ showDescription: this.displayDescription,input1:'' })
    }

    render(){
        return(
            <div>
                 <div>{this.displayDescription}</div>
                 <h4>Add Latest blog data here</h4>
                 <p>Lorum ipsum dolor set amet,consectaetor adipiscing elit. Vivamus malesuada adipiscing metus, tristique blandit lorem aliqam id.</p>
                 <tr><textarea rows="10" cols="50" placeholder="Description" value={this.state.input1} onChange={(e)=>this.setState({ input1 : e.target.value})} style={{ height:150,width:300,marginTop:10 }}/></tr>
                 <tr><input type='submit' onClick={this.appendData} style={{ height:25,width:310,marginTop:10 }} value="Submit"/></tr>
                 
            </div>
        )
    }
}

export default Form;