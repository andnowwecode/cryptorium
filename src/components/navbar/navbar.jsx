import React, { useContext } from 'react'
import './navbar.css'
import logo from '../../assets/cryptorium-high-resolution-logo-transparent.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const navbar = () => {

const {setCurrency} = useContext(CoinContext)

const currencyHandler = (event) => {
  switch (event.target.value){
    case "eur": {
      setCurrency({name: "eur", symbol: "€"});
      break;
    }
    case "usd": {
      setCurrency({name: "usd", symbol: "$"});
      break;
    }
    case "gbp": {
      setCurrency({name: "gbp", symbol: "£"});
      break;
    }
    default : {
      setCurrency({name: "eur", symbol: "€"});
      break;
    }
  }
}

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img className='logo' src={logo} alt="" />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
          <select onChange={currencyHandler}>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="gbp">GBP</option>
          </select>
          <button>Sign up</button>
      </div>
    </div>
  )
}

export default navbar
