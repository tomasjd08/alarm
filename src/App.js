import React, { useState, useEffect } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      if (alarmTime === currentTime) {
        alert('⏰ Alarm ringing!');
        setMessage('Alarm ringing!');
        setAlarmTime('');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [alarmTime]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>📅 Calendar & ⏰ Alarm App</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>Select a date: </label>
        <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
        <p>Selected Date: {selectedDate}</p>
      </div>

      <div>
        <label>Set Alarm (HH:MM): </label>
        <input type="time" onChange={(e) => setAlarmTime(e.target.value)} />
        <p>Alarm Time: {alarmTime}</p>
        <p style={{ color: 'red' }}>{message}</p>
      </div>
    </div>
  );
}

export default App;
