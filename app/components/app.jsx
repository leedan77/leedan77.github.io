import React from 'react';
import SideBar from './sidebar';
import Notes from './Notes';
import NoteStore from '../stores/configureStore'
import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // if using es7 property initializer,
    // we can remove this line, and use "addNote = () => {}",
    // which can bind this with the class instance
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = store.getState();
  }
  // addNote = () => {}
  addNote() {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: 'new task'}]
      /*
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'new task'
      }])*/
      
    });
  };
  editNote(id, task) {
    // Don't modify if trying set an empty value
    if(!task.trim()) {
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };

  deleteNote(id, e) {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
  render() {
    const notes = this.state.notes;
    return (

      <div>
      <button className="add-note" onClick={this.addNote}>+</button>
      <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      <SideBar />
      </div>

      );    
  }
}
