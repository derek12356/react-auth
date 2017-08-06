import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	authButton(){
		if(this.props.authenticated){
			return <button onClick={()=>this.props.authenticate(false)}>Sign Out</button>;
		}
		return  <button onClick={()=>this.props.authenticate(true)}>Sign in</button>; 
		
	}
	render(){
		return(
			<div>
			<nav class='navbar navbar-light'>
				<ul class='nav navbar-nav'>
				<li class='nav-item'>
					<Link to='/'>Home</Link>
				</li>
				<li class='nav-item'>
					<Link to='/resources'>Resources</Link>
				</li>
				<li class='nav-item'>
					{this.authButton()}
				</li>
				</ul>
			</nav>
			</div>
			);
	}
}
function mapStateToProps(state){

return   {	authenticated:state.authenticated }
}

export default connect(mapStateToProps,actions)(Header)

