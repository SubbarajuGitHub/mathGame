import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    const {timer, Score} = this.props
    return (
      <li className="navbar-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className="timer-bg">
          <p className="para1">Score:{Score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="para2">{timer} sec</p>
        </div>
      </li>
    )
  }
}

export default Navbar
