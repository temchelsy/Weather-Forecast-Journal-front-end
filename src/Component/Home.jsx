import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [entries, setEntries] = useState([]);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

  const addEntry = async () => {
    if (date && description) {
        try {
            const position = await getCurrentPosition();
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const { weather, temperature } = await fetchWeatherData(latitude, longitude);

            const response = await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date,
                    description,
                    weather,
                    temperature,
                    latitude,
                    longitude
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to add entry. Server returned ${response.status}.`);
            }

            const data = await response.json();
            setEntries([...entries, data]);
            setError(null);
        } catch (error) {
            console.error('Error adding entry:', error);
            setError('Please enable geolocation to add an entry.');
        }
    } else {
        setError('Date and description are required.');
    }
};

    

     const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const fetchWeatherData = async (latitude, longitude) => {
        const apiKey = 'a5610615f19df1a38796c5716ede76e5';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
            const response = await axios.get(apiUrl);
            const weather = response.data.weather[0].description;
            const temperature = response.data.main.temp;
            return { weather, temperature };
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return { weather: 'N/A', temperature: 'N/A' };
        }
    };

    const updateEntry = async (id, newData) => {
        try {
            const response = await axios.put(`http://localhost:4000/${id}`, newData);
            setEntries(entries.map(entry => (entry.id === id ? response.data : entry)));
            setError(null);
        } catch (error) {
            console.error('Error updating entry:', error);
            setError('Failed to update entry. Please try again.');
        }
    };

    const deleteEntry = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/${id}`);
            setEntries(entries.filter(entry => entry.id !== id));
            setError(null);
        } catch (error) {
            console.error('Error deleting entry:', error);
            setError('Failed to delete entry. Please try again.');
        }
    };

    const fetchAllEntries = async () => {
        try {
            const response = await axios.get('http://localhost:4000/');
            setEntries(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching entries:', error);
            setError('Failed to fetch entries. Please try again.');
        }
    };

    return (
        <div>
            <h1>Weather journal</h1>
            <div className='main-container'>
            <input
                name='date'
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            className='dat'/>
            <input
                name='description'
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            className='desc'/>
            <div className='btn'>
             <button onClick={addEntry}>Add Entry</button>
             <button onClick={fetchAllEntries}>View Entries</button>
            </div> 
</div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='results'>
                {entries.map(entry => (
                    <div key={entry.id} className='result'>
                        <p>Date: {entry.date}</p>
                        <p>Description: {entry.description}</p>
                        <p>Temperature {entry.weather}</p>
                        <p>Weather: {entry.temperature} °C</p>
                        <button onClick={() => deleteEntry(entry.id)}>Delete</button>
                        <button onClick={() => updateEntry(entry.id, { /* Updated data */ })}>Update</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
