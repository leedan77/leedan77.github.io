import React from 'react';

Dropbtn.propTypes = {
  clicked: React.PropTypes.bool.isRequired,
};

export default class Dropbtn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false,
		};
	}

	handleClick = () => {
		if(this.state.clicked == false)
			this.setState({clicked: true});
		else
			this.setState({clicked: false});
	}

	render() {
		return (
			<div className={"drop-btn " + (this.props.clicked ? "clicked" : "")} onClick={this.props.onClick} >
  		 	<span></span>
  		</div>
  	);
  }
}