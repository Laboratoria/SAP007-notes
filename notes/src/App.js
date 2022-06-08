import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

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

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data")
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  },
    []);

  useEffect(() => {
    localStorage.setItem(
      "react-notes-app-data",
      JSON.stringify(notes)
    );
  }, [notes]); //salva notas no localstorage, precisa ser trocado pelo firebase

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]; //cria um novo array ao invés de upar o array antigo
    setNotes(newNotes);

  }; // prop drilling 

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>

  );
};

export default App;