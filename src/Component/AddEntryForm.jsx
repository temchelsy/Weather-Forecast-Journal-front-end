import React, { useState } from "react";
import axios from "axios";
function App() {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const addEntry = async () => {
    if (date && description) {
      try {
        setLoading(true);
        const weather = "Sunny"; 
        const temperature = "25°C"; 
        const response = await axios.post("http://localhost:3000/", {
        
          date,
          description,
          weather,
          temperature,
        });
        setEntries([...entries, response.data]);
        setError(null);
      } catch (error) {
        console.error("Error adding entry:", error);
        setError("Failed to add entry. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Date and description are required.");
    }
  };
  const getEntries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/"); 
      setEntries(response.data);
      setError(null);
    } catch (error) {
      console.error("Error getting entries:", error);
      setError("Failed to fetch entries. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addEntry} disabled={loading}>
        Add Entry
      </button>
      <button onClick={getEntries} disabled={loading}>
        Get Entries
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <p>Date: {entry.date}</p>
            <p>Description: {entry.description}</p>
            <p>Weather: {entry.weather}</p>
            <p>Temperature: {entry.temperature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
