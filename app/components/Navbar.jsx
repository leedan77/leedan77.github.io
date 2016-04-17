import React from 'react';
import Dropbtn from './Dropbtn';

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			started: false,
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
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			this.setState({started: true});
		}
		else {
			this.setState({started: false});
		}
		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
				
        this.setState({started: false, scrolled: true});
        
        
    } else {
        this.setState({scrolled: false});
    }
	}
	render() {

		return (

			<header className={"navbar "+ (this.state.scrolled ? "scrolled" : "") + (this.state.started ? "start" : "")}>
				<Dropbtn />
			</header>
		);
	}
}

export default Navbar