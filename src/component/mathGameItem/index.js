import {Component} from 'react'

import './index.css'

class GameItem extends Component {
  render() {
    const {EachCard, changeImage} = this.props
    const {thumbnailUrl, id} = EachCard
    const MakeRandomNumber = () => {
      changeImage(id)
    }
    return (
      <li className="list">
        <button className="buttons" type="button">
          <img
            src={thumbnailUrl}
            className="thumbnail-image"
            alt="thumbnail"
            onClick={MakeRandomNumber}
          />
        </button>
      </li>
    )
  }
}
export default GameItem
