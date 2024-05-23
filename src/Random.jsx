import React, { Component } from 'react'

export default class Random extends Component {
  constructor(props){
    super(props)
    console.log(props);

  }
  render() {
    return (
      <><div>Random</div>
      <p>data shared is {this.props.uname}</p>
      </>
    )
  }
}

//return should be given with in render method
//Components should be inherit inorder to recognize by react as class component otherwise its mearly a class
// 'export default Random' to export the module