import React from 'react';

const style = {
  close: {
    visibility: 'hidden',
    opacity: 0,
  },
  open: {
    visibility: 'visible',
    opacity: 1,
  }
}



export default class Dropmenu extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
    return (
		  <div className='drop-menu' style={this.props.clicked ? style.open : style.close}>
        <ul>
          <li><a>關於我</a></li>
          <li><a>展示集</a></li>
          <li><a>迴響</a></li>
        </ul>
        <div className='social'>
          <a href="https://www.facebook.com/shawn.lee.98871"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="https://twitter.com/txdragonLee"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <span className='copyright'></span>
      </div>
    );
	}
}

Dropmenu.propTypes = {
  clicked: React.PropTypes.bool.isRequired,  
};
