import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedConponent){

	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}
		componentWillMount(){
			if(!this.props.authenticated){
				this.context.router.push('/')
			}	
		}
		componentWillUpdate(nextProps){
			if(!nextProps.authenticated){
				this.context.router.push('/')
			}
		}

		render(){
			console.log(this.context);
			
			return <ComposedConponent { ...this.props } />

		}
	}

 function mapStateToProps(state){
 	return {authenticated: state.authenticated};
 }

 return connect(mapStateToProps)(Authentication);
	

}