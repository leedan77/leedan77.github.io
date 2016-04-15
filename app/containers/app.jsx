import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/sidebar';
import Notes from '../components/Notes';
import Date from '../components/Date';
import Navbar from '../components/Navbar';
import NoteStore from '../stores/configureStore'
import {createStore} from 'redux';
import rootReducer from '../reducers/noteReducer';
import {createNote, updateNote, deleteNote} from '../actions/notes';

const mapStateToProp = (state) => {
  return {
    notes: state,
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    addNote: () => dispatch(createNote('new task')),
    editNote: (id, task) => {
      if(!task.trim()) {
        return;
      }
      dispatch(updateNote(id, task))
    },
    deleteNote: (id, e) => {
      e.stopPropagation();
      dispatch(deleteNote(id));
    }
  }
  return dispatch; 
}



class App extends React.Component {
  static defaultProps = {
    checked: false,
    maxLength: 10,
  }; // 注意有分號
  static propTypes = {
    checked: React.PropTypes.bool.isRequired,
    maxLength: React.PropTypes.number.isRequired
  }; 
  constructor(props) {
    super(props);
    // if using es7 property initializer,
    // we can remove this line, and use "addNote = () => {}",
    // which can bind this with the class instance
    //this.addNote = this.addNote.bind(this);
  }
  render() {
    return (
      <div>
        <Navbar />
        <button className="add-note" onClick={this.props.addNote}>+</button>
        <Notes notes={this.props.notes} onEdit={this.props.editNote} onDelete={this.props.deleteNote}/>
        <SideBar />
        <Date />
      </div>

    );    
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
