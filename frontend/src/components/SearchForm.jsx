import React, { useState } from 'react';
import './SearchForm.css';

const CLASSES = ['All Classes', 'SL', '3A', '2A', '1A', 'CC', '2S'];
const QUOTAS = ['General', 'Ladies', 'Senior Citizen', 'Tatkal', 'Premium Tatkal'];

function SearchForm() {
  const [tripType, setTripType] = useState('one-way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [trainClass, setTrainClass] = useState('All Classes');
  const [quota, setQuota] = useState('General');

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !date) {
      alert('Please fill From, To and Date fields.');
      return;
    }
    alert(`Searching trains from ${from} to ${to} on ${date}`);
    // TODO: connect to backend search API
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="search-wrapper">
      <div className="trip-tabs">
        {['one-way', 'round-trip'].map(t => (
          <button
            key={t}
            className={`trip-tab ${tripType === t ? 'active' : ''}`}
            onClick={() => setTripType(t)}
          >
            {t === 'one-way' ? '→ One Way' : '⇄ Round Trip'}
          </button>
        ))}
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-row">

          <div className="search-field">
            <label>From</label>
            <input
              type="text"
              placeholder="City or Station"
              value={from}
              onChange={e => setFrom(e.target.value)}
              required
            />
          </div>

          <button type="button" className="swap-btn" onClick={handleSwap} title="Swap stations">
            ⇄
          </button>

          <div className="search-field">
            <label>To</label>
            <input
              type="text"
              placeholder="City or Station"
              value={to}
              onChange={e => setTo(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label>Date</label>
            <input
              type="date"
              value={date}
              min={today}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>

          <div className="search-field">
            <label>Class</label>
            <select value={trainClass} onChange={e => setTrainClass(e.target.value)}>
              {CLASSES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="search-field">
            <label>Quota</label>
            <select value={quota} onChange={e => setQuota(e.target.value)}>
              {QUOTAS.map(q => <option key={q}>{q}</option>)}
            </select>
          </div>

          <button type="submit" className="search-btn">🔍 Search Trains</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
