import React from 'react';
import Dropbtn from './Dropbtn';
import Dropmenu from './Dropmenu';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
      scrolled: false,
      btnClicked: false,
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
  handleClick = () => {
    if(this.state.btnClicked == false) {
      document.body.style.overflow = 'hidden';
      this.setState({btnClicked: true});
    }
    else {
      document.body.style.overflow = '';
      this.setState({btnClicked: false});
    }
  }
  render() {

    return (

      <header className={"navbar "+ (this.state.scrolled ? "scrolled" : "") + (this.state.started ? "start" : "")}>
        <span className="logo" style={this.state.btnClicked || this.state.scrolled ? {color: "white"} : {} }>TxDragon</span>
        <Dropbtn onClick={this.handleClick} clicked={this.state.btnClicked}/>
        <Dropmenu clicked={this.state.btnClicked}/>
      </header>
    );
  }
}

export default Navbar