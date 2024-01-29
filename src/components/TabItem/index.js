// Write your code here
import './index.css'

const TabItem = props => {
  const {items, getActivetabId, isActive} = props
  const {displayText, tabId} = items

  const btnclass = isActive ? 'spl-btn' : ''

  const getTabId = () => {
    getActivetabId(tabId)
  }

  return (
    <li className="li-container">
      <button
        className={`btn-card ${btnclass}`}
        onClick={getTabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
