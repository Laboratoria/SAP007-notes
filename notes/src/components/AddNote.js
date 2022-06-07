import { useState } from "react";

const AddNote = ( { handleAddNote } ) => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };
    const handleSaveClick = () => {
        handleAddNote(noteText);
    };

    return (<div className="note new">
        <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}>
        </textarea>
        <div className="note-footer">
            <small>200 remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    );
}

export default AddNote;