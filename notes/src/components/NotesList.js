import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note 
                id={note.id} 
                title={note.title}
                text={note.text} 
                date={note.date}
                handleEditNote={handleEditNote}
                handleDeleteNote={handleDeleteNote}
                />
            )}
            
            <AddNote handleAddNote={handleAddNote}/>

        </div>
    );
};

export default NotesList