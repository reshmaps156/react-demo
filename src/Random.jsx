import React, { Component } from 'react'

export default class Random extends Component {
  
  constructor(props){
    super(props)
    console.log(props);
    this.state = {cname : 'BMW'}

    

  }

  change(data){
    this.setState({cname:data})
  }
  render() {
    return (
      <><div>Random</div>
      <p>data shared is {this.props.uname}</p>
      <p> car is : {this.state.cname}</p>
      <button className='btn btn-outline-warning' onClick={()=>this.change('swift')}>Click</button>
      </>
    )
  }
}

//return should be given with in render method
//Components should be inherit inorder to recognize by react as class component otherwise its mearly a class
// 'export default Random' to export the module