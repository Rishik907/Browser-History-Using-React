import './index.css'

const SearchHistoryItem = props => {
  const {item, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item
  console.log(item)

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list-of-list">
      <p className="timerAccess">{timeAccessed}</p>
      <div className="img-head-delete-container">
        <div className="inner-img-head-delete-container">
          <img src={logoUrl} alt="domain logo" className="logoUrl" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button
          onClick={onDelete}
          type="button"
          className="button-val"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default SearchHistoryItem
