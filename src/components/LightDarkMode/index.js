import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  btnMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state

    const classname = darkMode ? 'dark-mode' : 'light-mode'
    const buttonTxt = darkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`${classname}`}>
          <h1 className={`${classname}`}>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.btnMode}>
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
