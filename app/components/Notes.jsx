import React from 'react';
import Note from './Note.jsx';
import {List, Map} from 'immutable';
export default ({notes, onEdit, onDelete}) => {
	
  return (
    <ul className="notes">{notes.map(note =>
      <li className="note" key={note.get('id')}>
        <Note task={note.get('task')} onEdit={onEdit.bind(null, note.get('id'))} onDelete={onDelete.bind(null, note.get('id'))}/>
      </li>
    )}</ul>
  );
}