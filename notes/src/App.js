import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "my first note :)))",
    date: "07/06/2022"
  },
  {
    id: nanoid(),
    text: "my second note :)))",
    date: "07/06/2022"
  },
  {
    id: nanoid(),
    text: "my third note :)))",
    date: "07/06/2022"
  },
  {
    id: nanoid(),
    text: "my fourth note :)))",
    date: "07/06/2022"
  }]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]; //cria um novo array ao invés de upar o array antigo
    setNotes(newNotes);

  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;