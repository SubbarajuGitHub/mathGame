import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  render() {
    const {EachCard, clickTabItem, onSelectedChange} = this.props
    const {displayText, tabId} = EachCard
    const changebuttonCss = onSelectedChange ? 'special' : ''
    const OnselectingTabItems = () => {
      clickTabItem(tabId)
    }
    return (
      <li className="list">
        <button
          className={`eachTab ${changebuttonCss}`}
          onClick={OnselectingTabItems}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
