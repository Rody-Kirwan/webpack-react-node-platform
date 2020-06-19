import React from 'react'
import Menu from './menu'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      test: false
    }

    this.setTestValue = this.setTestValue.bind(this)
  }

  setTestValue() {
    this.setState({ test: true })
  }

  render() {
    const backgroundColor = this.state.test === true
      ? 'green'
      : 'red'

    const componentStyle = {
      background: 'red',
      color: 'green',
      height: '100px',
      width: '100px',
      marginLeft: '100px'
    }

    if (this.state.test === true) {
      componentStyle.background = 'green'
    }
    
    return (
      <div style={componentStyle} id="hello">
         Hello World!
        <button onClick={this.setTestValue}>SET VALUE</button>
        <Menu />
      </div>
    )
  }
}

export default App