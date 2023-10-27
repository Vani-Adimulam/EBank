import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props

  const onCLickLogout = () => {
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <navbar className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <button type="button" className="logout-button" onClick={onCLickLogout}>
        Logout
      </button>
    </navbar>
  )
}

export default withRouter(Header)
