
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(response => setBooks(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Book Review Platform</h1>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
