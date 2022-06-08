import { MdDeleteForever, FaEdit } from 'react-icons/md';

const Note = ({ id, title, text, date, handleDeleteNote }) => {
    return(
    <div className='note'>
        <span>{title}</span>
        <span>{text}</span>
        <div className="note-footer">
            <small>{ date }</small>
            <FaEdit 
            onClick={() => 

            }
            />
            <MdDeleteForever 
            onClick={ () => handleDeleteNote(id)} 
            className='delete-icon' 
            size='1.3em'/>
        </div>

    </div>
    )
};

export default Note;