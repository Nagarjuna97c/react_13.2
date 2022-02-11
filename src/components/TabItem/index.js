import './index.css'

const TabItem = props => {
  const {itemDetails, changeCategory, selectedCategory} = props
  const categoryChange = () => {
    changeCategory(itemDetails.tabId)
  }

  const checkCategory =
    selectedCategory === itemDetails.tabId ? 'highlight' : ''

  return (
    <li className="category" onClick={categoryChange}>
      <button type="button" className={`para ${checkCategory}`}>
        {itemDetails.displayText}
      </button>
    </li>
  )
}

export default TabItem
