// Write your code here
import './index.css'

const AppItem = props => {
  const {itemsList} = props
  const {appName, imageUrl} = itemsList
  return (
    <li className="list-card">
      <img className="img-style" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
