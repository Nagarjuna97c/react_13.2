import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="para1">{appName}</p>
    </li>
  )
}

export default AppItem
