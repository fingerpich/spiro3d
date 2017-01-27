import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import SinusControllerElement from './sinusControllerElement.js';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {...state.dimension};
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onChange: (e) => {
			let {name,value}=e.target;
			dispatch(changeProperty(name,value));
		}
	}
};

const SinusController = connect(
	mapStateToProps,
	mapDispatchToProps
)(SinusControllerElement);


export default SinusController
