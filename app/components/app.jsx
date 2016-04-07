import React from 'react';
import SideBar from './sidebar';
import Notes from './Notes';
import NoteStore from '../stores/configureStore'
import {createStore} from 'redux';
import rootReducer from '../reducers/noteReducer';
import {createNote, updateNote, deleteNote} from '../actions/notes';

const store = createStore(rootReducer);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // if using es7 property initializer,
    // we can remove this line, and use "addNote = () => {}",
    // which can bind this with the class instance
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.state = store.getState();
    store.dispatch(createNote('hehe'));
    
  }
  componentDidMount() {
    store.subscribe(this.stateChange);
  }
  componentWillUnmount() {
        
  }
  stateChange() {
    this.setState(store.getState());
  }
  // addNote = () => {}
  addNote() {
    store.dispatch(createNote('new task'));
  };
  editNote(id, task) {

    // Don't modify if trying set an empty value
    if(!task.trim()) {
      return;
    }
    store.dispatch(updateNote(id, task));
    
  };

  deleteNote(id, e) {
    e.stopPropagation();
    store.dispatch(deleteNote(id));
  }
  render() {
    const notes = store.getState();
    
    return (

      <div>
      <button className="add-note" onClick={this.addNote}>+</button>
      <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      <SideBar />
      </div>

      );    
  }
}
