import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="foot">
        <span className="copyright">Tx 2016. All rights reserved ©</span>
      </footer>
    );
  }
}