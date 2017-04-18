import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ARBLEVOX</h1>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    )
  }
}

App.propTypes = propTypes
