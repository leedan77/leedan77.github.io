import React from 'react';

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			scrolled: false,
		};

	}
	componentDidMount() {
	    window.addEventListener("scroll", this.handleScroll); 
	}
	componentWillUnmount() {
	    window.addEventListener("scroll", this.handleScroll);  
	}
	handleScroll = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				
        this.setState({scrolled: true});
        
        
    } else {
        this.setState({scrolled: false});
    }
	}
	render() {

		return (

			<header className={"navbar "+ (this.state.scrolled ? "scrolled" : "")}>I am a banner</header>
		);
	}
}

export default Navbar