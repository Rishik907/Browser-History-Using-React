import {Component} from 'react'
import SearchHistoryItem from '../SearchHistoryItem'
import './index.css'

class SearchHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = this.props
    this.state = {
      searchInput: '',
      historyItem: initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    const val = event.target.value
    this.setState({searchInput: val})
  }

  onDeleteHistory = id => {
    const {historyItem} = this.state
    const filterRemoveHistory = historyItem.filter(each => each.id !== id)
    this.setState({historyItem: filterRemoveHistory})
  }

  render() {
    const {searchInput, historyItem} = this.state
    const filterHistory = historyItem.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const history = (
      <div className="search-container-lists">
        <ul className="lists-shadows">
          {filterHistory.map(each => (
            <SearchHistoryItem
              onDeleteHistory={this.onDeleteHistory}
              item={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )

    const noHistory = (
      <div className="no-history-container">
        <p className="history-para">There is no history to show</p>
      </div>
    )

    const text = filterHistory.length > 0 ? history : noHistory
    return (
      <div className="container">
        <div className="history-search">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchIcon"
              />
              <div className="input-container">
                <input
                  type="search"
                  value={searchInput}
                  placeholder="Search History"
                  className="input-search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
        </div>
        {text}
      </div>
    )
  }
}
export default SearchHistory
