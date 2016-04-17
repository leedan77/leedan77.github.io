import React from 'react';


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
			<div className={"drop-btn " + (this.state.clicked ? "clicked" : "")} onClick={this.handleClick} >
  		 	<span></span>
  		</div>
  	);
  }
}