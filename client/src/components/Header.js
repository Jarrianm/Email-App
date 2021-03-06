import React, { Component } from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Stripe from './Stripe'
class Header extends Component {
renderContent(){
  switch(this.props.auth){
    case null:
      return;
      case false: 
      return <li><a href='/auth/google'> Login With Google </a></li>
        default:
          return  [ <li><Stripe/></li>,
          <li className='tab'><a href='/api/logout'> Logout </a></li>
  ]
  }
}

  render() {
    // console.log(this.props)
    return (
      <div>
        <nav className="nav-extended blue">
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} 
            className="brand-logo">
              Focus Group
            </Link>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{auth: state.auth}
}


export default connect(mapStateToProps) (Header);
