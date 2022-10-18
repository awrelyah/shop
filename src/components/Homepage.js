import React from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import shoe from '../img/jordan.gif'
import '../style/homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='container-row'>
            <div className='container left'>
                <img width='100px' src={logo} alt='logo' />
                <h1>BALTIC SNKRS - SNEAKERS & CLOTHING</h1>
                <h4>100% authentic shoes and clothing</h4>
                <h4>based in Tallinn, Estonia</h4>
                <Link to="/shop" className='shop-now-btn'>Shop Now</Link>
            </div>
            <div className='container'>
                <img src={shoe} alt='spinning shoe' className='shoe-img'/>
            </div>
        </div>
    </div>
  )
}

export default Homepage