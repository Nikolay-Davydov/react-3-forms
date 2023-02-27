import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import List from './List';

const INITIAL_NOTES = [
  { id: nanoid(), date: '2000-01-01', km: 300 },
];

export default function Steps() {

  const [notes, setNotes] = useState(INITIAL_NOTES);

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <>
      <header>
        <h2>Учёт тренировок</h2>
      </header>
      <Form onSubmit={handleAddNote} />
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </>
  );
}
