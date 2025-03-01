import { allNotes } from "../endpoints/api"
import { useEffect, useState } from "react";


interface Note {
  id: number;
  title: string;
}

const TodoList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const result = await allNotes(); // Fetch notes from API
        setNotes(result.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="p-2 border rounded-md mb-2">
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

